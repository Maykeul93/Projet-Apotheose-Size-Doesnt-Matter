import {
    SET_USER_ANSWER,
    VALIDATE_USER_ANSWER,
    SET_ROUND,
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
    score: [],
    isRound: false,
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
        case SET_ROUND:
            return {
                ...state,
                isRound: !state.isRound,
            }
        default:
            return state;
    }
};

export default reducer;
