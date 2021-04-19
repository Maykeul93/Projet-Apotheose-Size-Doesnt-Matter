import {
    SET_USER_ANSWER,
    VALIDATE_USER_ANSWER,
    SET_OTHER_PLAYER_ANSWER,
    SET_GAME_QUESTIONS,
    RESET_GAME_STATE,
    SET_PLAYER_LEAVE_GAME,
} from 'actions/gameInterface';

import {
    SET_OTHER_PLAYERS,
} from 'actions/game';

const initialState = {
    players: [],
    userAnswer: '',
    userAnswerValidate: '',
    score: [],
    questions: [],
};

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_OTHER_PLAYERS:
            return {
                ...state,
                players: action.players,
            };
        case SET_GAME_QUESTIONS:
            return {
                ...state,
                questions: action.questions,
                numberOfRounds: action.questions.length,
            };
        case SET_USER_ANSWER:
            return {
                ...state,
                userAnswer: action.value,
            };
        case VALIDATE_USER_ANSWER:
            return {
                ...state,
                userAnswerValidate: action.value,
                userAnswer: '',
            };
        case SET_OTHER_PLAYER_ANSWER: {
            // Set the other player's answer into the otherPlayers Array
            const setPlayerAnswer = state.players.map((player) => {
                if (player.id === action.id){
                    return {
                        ...player,
                        answer: action.answer,
                    };
                }
                return player;
            });

            return {
                ...state,
                players: setPlayerAnswer,
            };
        }
        case SET_PLAYER_LEAVE_GAME: {
            const players = state.players.filter((player) => player.id !== action.id);
            return {
                ...state,
                players,
            }
        }
        case RESET_GAME_STATE:
            return initialState;
        default:
            return state;
    }
};

export default reducer;
