import { SET_OPTION, SET_QUESTION, SET_TAG } from "actions/admin";

const initialState = {
    option: '',
    addQuestionInputValue: '',
    addReponseInputValue: '',
    selectTag: '',
    question : [],
    tag: [],
};

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_OPTION:
            return {
                ...state,
                option: action.value,
            }
        case SET_QUESTION:
            return {
                ...state,
                question: action.value,
            }
        case SET_TAG:
            return {
                ...state,
                tag: action.value,
            }
        default:
            return state;
    }
};

export default reducer;
