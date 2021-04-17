import { SET_LOADING, SET_PROFIL_INPUT_VALUE, SET_MESSAGE, RESET_INPUT } from "actions/profil";

const initialState = {
    email: undefined,
    pseudo: undefined,
    oldPassword: undefined,
    newPassword: undefined,
    validPassword: undefined,
    loading: false,
    message:'',
};

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_PROFIL_INPUT_VALUE :
            return {
                ...state,
                [action.name]: action.value,
            };
        case RESET_INPUT :
            return {
                ...state,
                email: undefined,
                pseudo: undefined,
                oldPassword: undefined,
                newPassword: undefined,
                validPassword: undefined,
            };
        case SET_LOADING :
            return {
                ...state,
                loading: action.value
            };
        case SET_MESSAGE :
            return {
                ...state,
                message: action.value
            };
        default:
            return state;
    }
};

export default reducer;