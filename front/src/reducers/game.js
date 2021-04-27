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
    SET_SCORE,
} from 'actions/gameInterface';

import {
    SET_OTHER_PLAYERS,
    CHAT_RECEIVE_MESSAGE,
    SET_OTHER_PLAYER_AVATAR,
} from 'actions/game';

import { transformExactAnswerIntoExploitableAnswer } from 'selectors/gameSelectors';

const initialState = {
    players: [],
    userAnswerValidate: '',
    score: [],
    questions: [],
    idGame: null,
    round: 0,
    exactAnswer: null,
    isRound:false,
    isOver: false,
    chatMessages: [],
};

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_OTHER_PLAYERS:
            return {
                ...state,
                players: action.players,
            };
        case SET_OTHER_PLAYER_AVATAR: {
            const updateAvatar = state.players.map((player) => {
                if (player.id === action.id){
                    return {
                        ...player,
                        avatar: action.avatar,
                    }
                }
                else {
                    return player;
                }
            });
            return {
                ...state,
                players: updateAvatar,
            }
        }
        case CHAT_RECEIVE_MESSAGE:
            return {
                ...state,
                chatMessages: [...state.chatMessages, action.message],
            }
        case SET_GAME_QUESTIONS:
            return {
                ...state,
                questions: action.questions,
                idGame: action.idGame,
                isOver: false,
                exactAnswer: transformExactAnswerIntoExploitableAnswer(action.questions[0].answer),
            };
        case SET_SCORE:
            return {
                ...state,
                score: action.score,
            }
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
            }
        case SET_ROUND: {
            const { round, questions } = state;
            return {
                ...state,
                round: round + 1,
                exactAnswer: round < questions.length ? transformExactAnswerIntoExploitableAnswer(questions[round].answer) : 0,
            }
        }
        case RESET_ALL_PLAYERS_ANSWER: {
            const resetPlayersAnswer = state.players.map((player) => {
                return {
                    ...player,
                    answer: 0,
                }
            });
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
                ...initialState,
            }
        default:
            return state;
    }
};

export default reducer;
