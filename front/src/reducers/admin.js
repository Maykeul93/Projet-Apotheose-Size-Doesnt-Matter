import { 
    SET_ADD_QUESTION_INPUT_VALUE, 
    SET_ADD_QUESTION_SELECT_VALUE, 
    SET_LOADING, 
    SET_OPTION, 
    SET_QUESTIONS, 
    SET_TAGS } from "actions/admin";

const initialState = {
    loading: false,
    option: '',
    questions : [],
    tags: [],
    addQuestion:{
        question:'',
        answer:'',
        tagId: 1,
    },
};

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state,
                loading: action.value,
            }
        case SET_OPTION:
            return {
                ...state,
                option: action.value,
            }
        case SET_QUESTIONS:
            return {
                ...state,
                questions: action.value,
            }
        case SET_TAGS:
            return {
                ...state,
                tags: action.value,
            }
        case SET_ADD_QUESTION_INPUT_VALUE:
            return {
                ...state,
                addQuestion:{
                    ...state.addQuestion,
                    [action.name]: action.value
                },
            }
        case SET_ADD_QUESTION_SELECT_VALUE:
            return {
                ...state,
                addQuestion:{
                    ...state.addQuestion,
                    tagId: action.value
                },
            }
        default:
            return state;
    }
};

export default reducer;
