import {
    SET_CODE_ROOM_INPUT,
    STOCK_ROOM,
    LAUNCH_GAME,
} from 'actions/game';

import {
    SET_USER_ANSWER,
} from 'actions/gameInterface';

const initialState = {
    codeRoomInput: '',
    room: '',
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
    isLaunch: false,
    userAnswer: '',
};

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_CODE_ROOM_INPUT:
            return {
                ...state,
                codeRoomInput: action.value,
            };
        case STOCK_ROOM:
            return {
                ...state,
                room: action.roomCode,
            };
        case LAUNCH_GAME:
            return {
                ...state,
                isLaunch: true,
            }
        case SET_USER_ANSWER:
            return {
                ...state,
                userAnswer: action.value,
            }
        default:
            return state;
    }
};

export default reducer;
