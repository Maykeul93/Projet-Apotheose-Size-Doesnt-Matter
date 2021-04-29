import { 
        SET_LOADING,
        SET_REGISTERED, 
        SET_SIGN_UP_ERROR, 
        SET_SIGN_UP_INPUT_VALUE } from "actions/signUp";

const initialState = {
    email: '',
    pseudo: '',
    password: '',
    validPassword: '',
    isRegistered: false,
    loading: false,
    error: '',
};

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_SIGN_UP_INPUT_VALUE :
            return {
                ...state,
                [action.name]: action.value,
            };
        case SET_LOADING :
            return {
                ...state,
                loading: action.value
            };
        case SET_REGISTERED :
            return {
                ...state,
                isRegistered: action.value,
            };
        case SET_SIGN_UP_ERROR :
            return {
                ...state,
                error: action.value,
            };
        default:
            return state;
    }
};

export default reducer;