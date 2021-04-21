import {
    VALIDATE_USER_ANSWER,
    SET_OTHER_PLAYER_ANSWER,
    SET_GAME_QUESTIONS,
    RESET_GAME_STATE,
    SET_PLAYER_LEAVE_GAME,
    RESET_ALL_PLAYERS_ANSWER,
    SET_ROUND,
    SET_IS_ROUND,
    SET_GAME_IS_OVER,
} from 'actions/gameInterface';

import {
    SET_OTHER_PLAYERS,
} from 'actions/game';

const initialState = {
    players: [],
    userAnswerValidate: '',
    score: [],
    questions: [],
    gameId: null,
    round: 0,
    exactAnswer: 0,
    isRound:false,
    isOver: false,
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
                gameId: action.gameId,
            };
        case VALIDATE_USER_ANSWER:
            return {
                ...state,
                userAnswerValidate: action.value,
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
        case SET_IS_ROUND:
            return {
                ...state,
                isRound: !state.isRound,
            };
        case SET_ROUND: {
            return {
                ...state,
                round: state.round + 1,
                exactAnswer: Number(state.questions[state.round].answer),
            };
        }
        case RESET_ALL_PLAYERS_ANSWER: {
            const resetPlayersAnswer = state.players.map((player) => {
                return {
                    ...player,
                    answer: 0,
                }
            });
            console.log('resetPlayersAnswer', resetPlayersAnswer);
            return {
                ...state,
                userAnswerValidate: '',
                players: resetPlayersAnswer,
            };
        }
        case SET_PLAYER_LEAVE_GAME: {
            const players = state.players.filter((player) => player.id !== action.id);
            return {
                ...state,
                players,
            }
        }
        case SET_GAME_IS_OVER:
            return {
                ...state,
                isOver: true,
            }
        case RESET_GAME_STATE:
            return {
                ...initialState
            };
        default:
            return state;
    }
};

export default reducer;
