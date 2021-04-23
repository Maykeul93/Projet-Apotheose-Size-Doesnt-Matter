import { 
        SET_EMAIL_INPUT_VALUE,
        SET_PASSWORD_INPUT_VALUE,
        SET_LOADING_STATE,
        SET_LOGGED,
        SET_DISPLAYED,
        SET_USER,
        SET_LOGOUT,
        SET_USER_AVATAR,
    } from 'actions/user';

    import {
        SET_SOCKET,
    } from 'actions/socket';

const initialState = {
    isLogged: false,
    id:'',
    email: '',
    password: '',
    pseudo: '',
    loading: false,
    isDisplayed: false,
    socket: null,
    avatar: '',
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
                avatar: action.avatar,
            };
        case SET_SOCKET:
            return {
                ...state,
                socket: action.socket,
            }
        case SET_USER_AVATAR:
            return {
                ...state,
                avatar: action.avatar,
            }
        case SET_LOGOUT:
            return {
                ...state,
                id: '',
                email: '',
                pseudo: '',
                isLogged: false
            }
        default:
            return state;
    }
};

export default reducer;