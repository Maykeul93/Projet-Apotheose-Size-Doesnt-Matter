import {
    SET_USER_ANSWER,
    VALIDATE_USER_ANSWER,
    SET_ROUND,
} from 'actions/gameInterface';

import {
    SET_OTHER_PLAYERS,
} from 'actions/game';

const initialState = {
    players: [],
    userAnswer: '',
    userAnswerValidate: '',
    score: [],
    isRound: false,
};

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_OTHER_PLAYERS:
            return {
                ...state,
                players: action.players,
            }
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
