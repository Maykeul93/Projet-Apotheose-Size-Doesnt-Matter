import { 
    SET_ADD_QUESTION_INPUT_VALUE, 
    SET_ADD_QUESTION_SELECT_VALUE, 
    SET_DELETE_QUESTION_SELECT_QUESTION_VALUE, 
    SET_LOADING, 
    SET_OPTION, 
    SET_QUESTIONS, 
    SET_TAGS, 
    SET_UPDATE_QUESTION_INPUT_VALUE,
    SET_UPDATE_QUESTION_SELECT_QUESTION_VALUE,
    SET_UPDATE_QUESTION_SELECT_TAG_VALUE} from "actions/admin";

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
    updateQuestion: {
        questionId: 1,
        question: '',
        answer: '',
        tagId:1,
    },
    deleteQuestion : {
        questionId:1
    }
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
            //SET ADD QUESTION
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
            // SET UPDATE QUESTION
        case SET_UPDATE_QUESTION_INPUT_VALUE:
            return {
                ...state,
                updateQuestion:{
                    ...state.updateQuestion,
                    [action.name]: action.value
                },
            }
        case SET_UPDATE_QUESTION_SELECT_QUESTION_VALUE:
            return {
                ...state,
                updateQuestion:{
                    ...state.updateQuestion,
                    questionId: action.value
                },
            }
        case SET_UPDATE_QUESTION_SELECT_TAG_VALUE:
            return {
                ...state,
                updateQuestion:{
                    ...state.updateQuestion,
                    tagId: action.value
                },
            }
            //SET DELETE QUESTION 
        case SET_DELETE_QUESTION_SELECT_QUESTION_VALUE: 
        return {
            ...state,
                deleteQuestion:{
                    ...state.deleteQuestion,
                    questionId: action.value
                },
        }
        default:
            return state;
    }
};

export default reducer;
