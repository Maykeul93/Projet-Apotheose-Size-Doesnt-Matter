import { SET_LOADING, SET_PROFIL_INPUT_VALUE } from "actions/profil";

const initialState = {
    email: '',
    pseudo: '',
    oldPassword: '',
    newPassword: '',
    validPassword: '',
    loading: false,
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
        default:
            return state;
    }
};

export default reducer;