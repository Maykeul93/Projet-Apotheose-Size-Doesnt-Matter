import {
    SET_CODE_ROOM_INPUT,
    STOCK_ROOM
} from 'actions/game';

const initialState = {
    users: [],
    codeRoomInput: '',
    room: '',
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
        default:
            return state;
    }
};

export default reducer;
