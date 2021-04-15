import { 
        SET_EMAIL_INPUT_VALUE,
        SET_PASSWORD_INPUT_VALUE,
        SET_PSEUDO,
        SET_LOADING_STATE,
        SET_LOGGED,
        SET_DISPLAYED

    } from 'actions/user';

const initialState = {
    isLogged: false,
    email: '',
    password: '',
    pseudo: '',
    loading: false,
    isDisplayed: false,
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
        case SET_PSEUDO :
            return {
                ...state,
                pseudo: action.pseudo
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
        default:
            return state;
    }
};

export default reducer;