import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import get from 'lodash.get';

import Card from '../pure/Card';
import Label from '../pure/Label';
import Input from '../pure/Input';
import Button from '../pure/Button';

import { uniqid } from '../utils/util';
import { addOptionToSurveyForm, removeOptionFromSurveyForm, updateSurveyInput } from '../actions/form';
import { saveSurvey, fetchSurveys, saveAnswer, fetchAnswers } from '../apis/api';
import { toggleSurveyForm, toggleSurvey } from '../actions/survey';

const Survey = props => {
    const { index, mode, form, actions, name, profile, answers, inCreate, pageNumber, pageSize} = props;
    let { _id, question, options, show = false } = form;
    let checked = false;
    const pagedIndex = (pageNumber - 1) * pageSize + index;

    if( mode === 'preview' ){
        const answer = answers.find( answer => answer.name === profile  && answer.survey_id === _id );
        if( answer ){
            options = options.map(
                option => {
                    checked = !checked ? option._id === answer.option_id : checked;
                    return {
                        ...option,
                        checked: option._id === answer.option_id,
                    }
                }
            );
        }
    }

    return (
        <Card css='survey'>
            <section className='survey_question'>
                <div className='survey_question_header'>
                    <Label css='survey_question_label' htmlFor='survey_question'>{`Question ${checked ? '- (Answered)' : ''}`}</Label>
                    {
                        mode === 'edit' ? (<Button css='survey_cancel_button' onClick={actions.toggleSurveyForm}>X</Button>) : 
                        (<Button css='survey_cancel_button' onClick={() => actions.toggleSurvey(pagedIndex)}>{ show ? 'Collapse' : 'Expand' }</Button>)
                    }
                </div>
                {
                   mode === 'edit' ? (
                        <Input 
                            css='survey_question_input survey_question_item' 
                            name='survey_question'
                            value={question.value} 
                            onUpdate={(event) => actions.updateSurveyInput('question.value', event.target.value)}
                        />
                   ) :
                   (
                       <Label>{question.value}</Label>
                   )
                }
            </section>
            {
                (inCreate || show )&& (
                    <section className='survey_options'>
                        <Label css='survey_options_label' htmlFor={name}>Options</Label>
                        {
                            options.map(
                                (option, index) => (
                                    mode === 'edit' ? (
                                        <div className='survey_option' key={option._id}>
                                            <Input 
                                                css='survey_option_input survey_option_item' 
                                                id={option._id}
                                                name={name}
                                                value={option.value}
                                                onUpdate={(event) => actions.updateSurveyInput(`options.${index}.value`, event.target.value)}
                                            />
                                            <Button css='survey_button survey_option_button survey_option_item secondary_button' onClick={() => actions.removeOptionFromSurveyForm(option._id)}>Remove</Button>
                                        </div>
                                    ) : 
                                    (
                                        <div className='survey_option_in_preview' key={option._id}>
                                            <Input 
                                                css='survey_option_radio_input survey_option_item' 
                                                id={option._id}
                                                name={name} 
                                                type='radio'
                                                checked={option.checked}
                                                value={option.value}
                                                onUpdate={() => actions.saveAnswer(_id, option._id)}/>
                                            <Label css='survey_option_label' htmlFor={option._id}>{option.value}</Label>
                                        </div>
                                    )
                                )
                            )
                        }
                    </section>
                )
            }
            {
                mode === 'edit' && (
                    <section className='survey_buttons'>
                        <Button css='normal_button survey_button' onClick={() => actions.addOptionToSurveyForm()}>Add Option</Button>
                        <Button css='primary_button survey_button' onClick={() => actions.saveSurvey()}>Create</Button>
                    </section>
                )
            }
        </Card>
    );
}

class Home extends Component {
    componentDidMount(){
        this.props.actions.fetchSurveys();
        this.props.actions.fetchAnswers();
    }

    render(){
        const { name, inCreate = false, surveys = [], answers = [], pageNumber, pageSize } = this.props;
        const start = (pageNumber - 1) * pageSize;
        const end = start + pageSize;
        const pagedSurveys = surveys.slice( start, end );

        return (
            <section className='home'>
                {
                    inCreate && (
                        <React.Fragment>
                            <Survey actions={this.props.actions} form={this.props.form} mode='edit' inCreate={inCreate}/>
                            {
                                surveys.length > 0 && <hr/>
                            }
                        </React.Fragment>
                    )
                }
                {
                    pagedSurveys.length === 0  && !inCreate && (<Label css='no_survey_label'>No surveys available</Label>)
                }
                {
                    pagedSurveys.map(
                        (survey, index) => {
                            const id = uniqid();
                            return (
                                <Survey 
                                    index={index} 
                                    key={id} 
                                    profile={name} 
                                    answers={answers} 
                                    name={id} 
                                    css='survey_item' 
                                    actions={this.props.actions} 
                                    form={survey} 
                                    mode='preview'
                                    pageNumber={pageNumber}
                                    pageSize={pageSize}
                                />
                            )
                        }
                    )
                }
            </section>
        );
    }
}

const mapStateToProps = state => {
	return {
        name: get(state, ['profile', 'name'], null),
        inCreate: get(state, ['survey', 'inCreate'], false),
        form: get(state, ['form', 'survey'], {}),
        surveys: get(state, ['survey', 'items'], []),
        answers: get(state, ['answer', 'items'], []),
        pageNumber: get(state, ['pageable', 'number'], 1),
        pageSize: get(state, ['pageable', 'size'], 5),
    }
}

const mapDispatchToProps = dispatch => {
    return { 
        actions: bindActionCreators({ 
            addOptionToSurveyForm, 
            removeOptionFromSurveyForm, 
            updateSurveyInput,
            saveSurvey,
            fetchSurveys,
            saveAnswer,
            fetchAnswers,
            toggleSurveyForm,
            toggleSurvey,
        }, dispatch) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);