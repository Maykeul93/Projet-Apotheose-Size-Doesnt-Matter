import {
    SET_CODE_ROOM_INPUT,
} from 'actions/game';

const initialState = {
    users: [],
    codeRoomInput: '',
};

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_CODE_ROOM_INPUT:
            return {
                ...state,
                codeRoomInput: action.value,
            }
        default:
            return state;
    }
};

export default reducer;
