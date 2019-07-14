import uniq from 'lodash.uniqueid';

export default {
    profile: {
        name: null,
        hasUser: false,
    },
    survey: {
        inCreate: false,
        items: []
    },
    answer: {
        items: []
    },
    forms: {
        login: {
            label: 'Name',
            type: 'text',
            placeholder: 'Enter name to sign in',
            value: ''
        },
        survey: {
            question: {
                value: '',
            },
            options: [
                {
                    _id: uniq('survey_option_'),
                    value: '',
                }
            ]
        }
    }
}