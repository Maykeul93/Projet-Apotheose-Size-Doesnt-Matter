
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

