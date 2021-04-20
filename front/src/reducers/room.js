import {
    SET_CODE_ROOM_INPUT,
    STOCK_ROOM,
    LAUNCH_GAME,
    RESET_ROOM,
} from 'actions/game';

const initialState = {
    room: '',
    codeRoomInput: '',
    isLaunch: false,
    gameId: null,
}

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
                gameId: action.id,
            }
        case RESET_ROOM:
            return {
                ...state,
                isLaunch: false,
                room: '',
            }
        default:
            return state;
    }
};

export default reducer;