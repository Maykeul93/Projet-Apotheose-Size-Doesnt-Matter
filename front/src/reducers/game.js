import {
    SET_USER_ANSWER,
    VALIDATE_USER_ANSWER,
    SET_ROUND,
    SET_OTHER_PLAYER_ANSWER,
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
        case SET_OTHER_PLAYER_ANSWER: {
            console.log('je recois la réponse d un autre joueur');
            const setPlayerAnswer = state.players.map((player) => {
                if (player.id === action.id){
                    return {
                        ...player,
                        answer: action.answer,
                    }
                }
                return player;
            });
            console.log('setPlayerAnswer', setPlayerAnswer);
            return {
                ...state,
                players: setPlayerAnswer,
            };
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
