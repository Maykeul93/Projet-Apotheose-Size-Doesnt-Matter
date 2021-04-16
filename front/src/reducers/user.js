import { 
        SET_EMAIL_INPUT_VALUE,
        SET_PASSWORD_INPUT_VALUE,
        SET_LOADING_STATE,
        SET_LOGGED,
        SET_DISPLAYED,
        SET_USER
    } from 'actions/user';

    import {
        SET_SOCKET,
    } from 'actions/socket';

const initialState = {
    isLogged: false,
    email: '',
    password: '',
    pseudo: '',
    loading: false,
    isDisplayed: false,
    socket: {},
};

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_EMAIL_INPUT_VALUE :
            return {
                ...state,
                email: action.value
            };
        case SET_PASSWORD_INPUT_VALUE :
            return {
                ...state,
                password: action.value
            };
        case SET_LOADING_STATE :
            return {
                ...state,
                loading: action.loading
            };
        case SET_LOGGED :
            return {
                ...state,
                isLogged: action.value
            };
        case SET_DISPLAYED :
            return {
                ...state,
                isDisplayed: !state.isDisplayed
            };
        case SET_USER :
            return {
                ...state,
                id: action.id,
                email: action.email,
                pseudo: action.pseudo,
            };
        case SET_SOCKET:
            return {
                ...state,
                socket: action.socket,
            }
        default:
            return state;
    }
};

export default reducer;