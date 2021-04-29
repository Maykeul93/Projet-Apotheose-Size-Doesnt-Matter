import {
    SET_CODE_ROOM_INPUT,
    STOCK_ROOM,
    LAUNCH_GAME,
    RESET_ROOM,
    SET_ROOM_ERROR,
    RESET_ROOM_ERROR,
    SET_IS_READY,
} from 'actions/game';

const initialState = {
    room: '',
    codeRoomInput: '',
    isLaunch: false,
    error: null,
    isCreator: false,
    isReady: false,
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
                isCreator: action.isCreator,
            };
        case SET_IS_READY:
            return {
                ...state,
                isReady: action.isReady,
            }
        case LAUNCH_GAME:
            return {
                ...state,
                isLaunch: true,
            }
        case RESET_ROOM:
            return {
                ...initialState,
                isLaunch: false,
            }
        case SET_ROOM_ERROR:
            return {
                ...state,
                error: action.error,
            }
        case RESET_ROOM_ERROR: {
            return {
                ...initialState,
            }
        }
        default:
            return state;
    }
};

export default reducer;