import { uniqid } from '../utils/util';

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
    form: {
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
                    _id: uniqid(),
                    value: '',
                }
            ]
        }
    },
    pageable: {
        number: 1,
        size: 5,
    }
}