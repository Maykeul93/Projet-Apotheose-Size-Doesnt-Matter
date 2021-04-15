import {
    SET_USER_ANSWER,
    VALIDATE_USER_ANSWER,
} from 'actions/gameInterface';

const initialState = {
    players: [
        {
            id: 1,
            pseudo: 'Bilbo',
            answer: '4',
        }, {
            id: 2,
            pseudo: 'Gandalf',
            answer: '6',
        }
    ],
    userAnswer: '',
    userAnswerValidate: '',
};

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_USER_ANSWER:
            return {
                ...state,
                userAnswer: action.value,
            }
        case VALIDATE_USER_ANSWER:
            return {
                ...state,
                userAnswerValidate: action.value,
                userAnswer: '',
            }
        default:
            return state;
    }
};

export default reducer;
