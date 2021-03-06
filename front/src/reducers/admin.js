import { 
    SET_ADD_QUESTION_INPUT_VALUE, 
    SET_ADD_QUESTION_SELECT_VALUE, 
    SET_ADD_TAG_INPUT_VALUE, 
    SET_BAN_USER_SELECT_VALUE, 
    SET_DELETE_QUESTION_SELECT_QUESTION_VALUE, 
    SET_DELETE_TAG_SELECT_TAG_VALUE, 
    SET_ERROR, 
    SET_LOADING, 
    SET_MESSAGE, 
    SET_OPTION, 
    SET_QUESTIONS, 
    SET_ROLE_SELECT_VALUE, 
    SET_TAGS, 
    SET_UPDATE_QUESTION_INPUT_VALUE,
    SET_UPDATE_QUESTION_SELECT_QUESTION_VALUE,
    SET_UPDATE_QUESTION_SELECT_TAG_VALUE,
    SET_UPDATE_TAG_INPUT_VALUE,
    SET_UPDATE_TAG_SELECT_TAG_VALUE,
    SET_USERS} from "actions/admin";

const initialState = {
    loading: false,
    option: '',
    questions : [],
    tags: [],
    users: [],
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
    },
    addTag : {
        tag: '',
    },
    updateTag : {
        tagId: 1,
        tag: '',
    },
    deleteTag : {
        tagId: 1,
    },
    role: {
        userId: 1,
    },
    ban:{
        userId: 1,
    },
    message:'',
    error: '',
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
        case SET_USERS:
            return {
                ...state,
                users: action.value,
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
            //SET ADD TAG
        case SET_ADD_TAG_INPUT_VALUE: 
        return {
            ...state,
                addTag:{
                    ...state.deleteQuestion,
                    tag: action.value
                },
        }
            // SET UPDATE TAG
        case SET_UPDATE_TAG_INPUT_VALUE: 
        return {
            ...state,
                updateTag:{
                    ...state.updateTag,
                    tag: action.value
                },
        }
        case SET_UPDATE_TAG_SELECT_TAG_VALUE: 
        return {
            ...state,
                updateTag:{
                    ...state.updateTag,
                    tagId: action.value
                },
        }
        //DELETE TAG
        case SET_DELETE_TAG_SELECT_TAG_VALUE:
        return {
            ...state,
            deleteTag:{
                ...state.deleteTag,
                tagId: action.value
            },
        }

        // CHANGE ROLE

        case SET_ROLE_SELECT_VALUE: 
        return {
            ...state,
            role:{
                ...state.role,
                userId: action.value,
            }
        }
        // BAN USER

        case SET_BAN_USER_SELECT_VALUE: 
        return {
            ...state,
            ban:{
                ...state.user,
                userId: action.value,
            }
        }
        // SET_MESSAGE

        case SET_MESSAGE: 
        return {
            ...state,
            message: action.value
        }
        // SET_ERROR MESSAGE

        case SET_ERROR: 
        return {
            ...state,
            error: action.value
        }
        default:
            return state;
    }
};

export default reducer;
