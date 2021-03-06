
//Set loading
export const SET_LOADING = 'SET_LOADING';

export const setLoading = (value) => ({
    type: SET_LOADING,
    value
})
//Set the selested form(add question, update questions, etc...)
export const SET_OPTION = 'SET_OPTION';

export const setOption = (value) => ({
    type: SET_OPTION,
    value
})

// resquest api to set questions and set tags in the redux state
export const SET_ADMIN = 'SET_ADMIN';

export const setAdmin = () => ({
    type: SET_ADMIN,
})

export const SET_QUESTIONS = 'SET_QUESTIONS';

export const setQuestions = (value) => ({
    type: SET_QUESTIONS,
    value
})
export const SET_TAGS = 'SET_TAGS';

export const setTags = (value) => ({
    type: SET_TAGS,
    value
})

export const SET_USERS = 'SET_USERS';

export const setUsers = (value) => ({
    type: SET_USERS,
    value
})

// Add question actions
export const SET_ADD_QUESTION_INPUT_VALUE = 'SET_ADD_QUESTION_INPUT_VALUE';

export const setAddQuestionInputValue = (name, value) => ({
    type: SET_ADD_QUESTION_INPUT_VALUE,
    name,
    value
})
export const SET_ADD_QUESTION_SELECT_VALUE = 'SET_ADD_QUESTION_SELECT_VALUE';

export const setAddQuestionSelectValue = (value) => ({
    type: SET_ADD_QUESTION_SELECT_VALUE,
    value
})

export const ADD_QUESTION = 'ADD_QUESTION';

export const addQuestion = () => ({
    type: ADD_QUESTION,
})

//Update Question Actions
export const SET_UPDATE_QUESTION_INPUT_VALUE = 'SET_UPDATE_QUESTION_INPUT_VALUE';

export const setUpdateQuestionInputValue = (name, value) => ({
    type: SET_UPDATE_QUESTION_INPUT_VALUE,
    name,
    value
})

export const SET_UPDATE_QUESTION_SELECT_QUESTION_VALUE = 'SET_UPDATE_QUESTION_SELECT_QUESTION_VALUE';

export const setUpdateQuestionSelectQuestionValue = (value) => ({
    type: SET_UPDATE_QUESTION_SELECT_QUESTION_VALUE,
    value
})
export const SET_UPDATE_QUESTION_SELECT_TAG_VALUE = 'SET_UPDATE_QUESTION_SELECT_TAG_VALUE';

export const setUpdateQuestionSelectTagValue = (value) => ({
    type: SET_UPDATE_QUESTION_SELECT_TAG_VALUE,
    value
})

export const UPDATE_QUESTION = 'UPDATE_QUESTION';

export const updateQuestion = () => ({
    type: UPDATE_QUESTION,
})

// DELETE QUESTION
export const SET_DELETE_QUESTION_SELECT_QUESTION_VALUE = 'SET_DELETE_QUESTION_SELECT_QUESTION_VALUE';

export const setDeleteQuestionSelectQuestionValue = (value) => ({
    type: SET_DELETE_QUESTION_SELECT_QUESTION_VALUE,
    value
})

export const DELETE_QUESTION = 'DELETE_QUESTION';

export const deleteQuestion = () => ({
    type: DELETE_QUESTION,
})

// ADD TAG
export const SET_ADD_TAG_INPUT_VALUE = 'SET_ADD_TAG_INPUT_VALUE';

export const setAddTagInputValue = (name, value) => ({
    type: SET_ADD_TAG_INPUT_VALUE,
    name,
    value
})

export const ADD_TAG = 'ADD_TAG';

export const addTag = () => ({
    type: ADD_TAG,
})

//UPDATE TAGE

export const SET_UPDATE_TAG_SELECT_TAG_VALUE = 'SET_UPDATE_TAG_SELECT_TAG_VALUE';

export const setUpdateTagSelectTagValue = (value) => ({
    type: SET_UPDATE_TAG_SELECT_TAG_VALUE,
    value
})

export const SET_UPDATE_TAG_INPUT_VALUE = 'SET_UPDATE_TAG_INPUT_VALUE';

export const setUpdateTagInputValue = (name, value) => ({
    type: SET_UPDATE_TAG_INPUT_VALUE,
    name,
    value
})

export const UPDATE_TAG = 'UPDATE_TAG';

export const updateTag = () => ({
    type: UPDATE_TAG,
})

//DELETE TAG

export const SET_DELETE_TAG_SELECT_TAG_VALUE = 'SET_DELETE_TAG_SELECT_TAG_VALUE';

export const setDeleteTagSelectTagValue = (value) => ({
    type: SET_DELETE_TAG_SELECT_TAG_VALUE,
    value
})

export const DELETE_TAG = 'DELETE_TAG';

export const deleteTag = () => ({
    type: DELETE_TAG,
})

// SET CHANGE ROLE

export const SET_ROLE_SELECT_VALUE = 'SET_ROLE_SELECT_VALUE';

export const setRoleSelectValue = (value) => ({
    type: SET_ROLE_SELECT_VALUE,
    value
})

export const CHANGE_ROLE = 'CHANGE_ROLE';

export const changeRole = () => ({
    type: CHANGE_ROLE,
})

// SET BAN ROLE

export const SET_BAN_USER_SELECT_VALUE = 'SET_BAN_USER_SELECT_VALUE';

export const setBanUserSelectValue = (value) => ({
    type: SET_BAN_USER_SELECT_VALUE,
    value
})

export const BAN_USER = 'BAN_USER';

export const banUser = () => ({
    type: BAN_USER,
})
// SET MESSAGE

export const SET_MESSAGE = 'SET_MESSAGE';

export const setMessage = (value) => ({
    type: SET_MESSAGE,
    value
})

// SET ERROR MESSAGE
export const SET_ERROR = 'SET_ERROR';

export const setError = (value) => ({
    type: SET_ERROR,
    value
})
