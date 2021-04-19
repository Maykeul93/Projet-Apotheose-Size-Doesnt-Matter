import { SET_OPTION } from "actions/admin";

const initialState = {
    option: '',
};

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_OPTION:
            return {
                ...state,
                option: action.value,
            }
        default:
            return state;
    }
};

export default reducer;
