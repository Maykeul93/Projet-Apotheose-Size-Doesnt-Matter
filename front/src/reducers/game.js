import {
    SET_CODE_ROOM_INPUT,
    STOCK_ROOM,
    LAUNCH_GAME,
} from 'actions/game';

const initialState = {
    users: [],
    codeRoomInput: '',
    room: '',
    players: [
        {
            id: 1,
            pseudo: 'Bilbo',
        }, {
            id: 2,
            pseudo: 'Gandalf',
        }
    ],
    isLaunch: false,
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
        default:
            return state;
    }
};

export default reducer;
