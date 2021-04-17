import { SET_LOADING, SET_PROFIL_INPUT_VALUE, SET_MESSAGE } from "actions/profil";

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