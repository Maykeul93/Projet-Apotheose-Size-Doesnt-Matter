import { SET_LOADING, SET_PROFIL_INPUT_VALUE, RESET_INPUT, SET_PROFIL_SUCCESS, SET_PROFIL_ERROR } from "actions/profil";

const initialState = {
    email: undefined,
    pseudo: undefined,
    oldPassword: undefined,
    newPassword: undefined,
    validPassword: undefined,
    loading: false,
    success:'',
    error: '',
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
        case SET_PROFIL_SUCCESS :
            return {
                ...state,
                success: action.value
            };
        case SET_PROFIL_ERROR :
            return {
                ...state,
                error: action.value
            };
        default:
            return state;
    }
};

export default reducer;