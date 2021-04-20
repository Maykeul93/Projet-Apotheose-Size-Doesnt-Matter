import { 
    setLoading,
    setQuestions, 
    setTags, 
    SET_ADMIN,
    ADD_QUESTION,
    setAddQuestionInputValue,
    UPDATE_QUESTION,
    setUpdateQuestionInputValue,
    DELETE_QUESTION,
    ADD_TAG,
    UPDATE_TAG,
    setUpdateTagInputValue,
 } from "actions/admin";
import api from "api";

const admin = (store) => (next) => (action) => {
    switch(action.type) {
        case SET_ADMIN: {
            store.dispatch(setLoading(true));
            api.get(`/admin/1/question`,)
            .then((result) => {
                store.dispatch(setQuestions(result.data))
                console.log(result.data)
            })
            .then(() => api.get(`/admin/1/tag`),)
            .then((result) => {
                store.dispatch(setTags(result.data))
                console.log(result.data)
            })
            .catch((error)=> {
                console.log(error)
            })
            .finally(() => {
                store.dispatch(setLoading(false))
            });
            return next(action);
        }
        case ADD_QUESTION : {
            store.dispatch(setLoading(true));
            const {question:content, answer, tagId : tag_id} = store.getState().admin.addQuestion
            api.post(`/admin/1/question`,{
                content,
                answer,
                tag_id
            })
            .then((result) => {
                console.log(result.data)
                store.dispatch(setAddQuestionInputValue('question', ''))
                store.dispatch(setAddQuestionInputValue('answer', ''))
            })
            .catch((error)=> {
                console.log(error)
            })
            .finally(() => {
                store.dispatch(setLoading(false))
            });
            return next(action);
        }

        case UPDATE_QUESTION : {
            store.dispatch(setLoading(true));
            const {question:content, answer, tagId, questionId} = store.getState().admin.updateQuestion
            api.put(`/admin/1/question/${questionId}`,{
                content,
                answer,
                tagId,
            })
            .then((result) => {
                console.log(result.data)
                store.dispatch(setUpdateQuestionInputValue('question', ''))
                store.dispatch(setUpdateQuestionInputValue('answer', ''))
            })
            .catch((error)=> {
                console.log(error)
            })
            .finally(() => {
                store.dispatch(setLoading(false))
            });
            return next(action);
        }

        case DELETE_QUESTION: {
            store.dispatch(setLoading(true));
            const { questionId } = store.getState().admin.deleteQuestion;
            api.delete(`admin/1/question/${questionId}`)
            .then((result)=> {
                console.log(result.data)
            })
            .catch((error)=> {
                console.lof(error)
            })
            .finally(() => {
                store.dispatch(setLoading(false))
            });
            return next(action);
        }

        case ADD_TAG: {
            store.dispatch(setLoading(true));
            const { tag } = store.getState().admin.addTag;
            api.post(`admin/1/tag`,{
                tag
            })
            .then((result)=> {
                console.log(result.data)
            })
            .catch((error)=> {
                console.lof(error)
            })
            .finally(() => {
                store.dispatch(setLoading(false))
            });
            return next(action);
        }

        case UPDATE_TAG : {
            store.dispatch(setLoading(true));
            const { tag: name , tagId } = store.getState().admin.updateTag
            api.put(`/admin/1/tag/${tagId}`,{
                name,
            })
            .then((result) => {
                console.log(result.data)
                store.dispatch(setUpdateTagInputValue('tag', ''))
            })
            .catch((error)=> {
                console.log(error)
            })
            .finally(() => {
                store.dispatch(setLoading(false))
            });
            return next(action);
        }
        default:
            next(action);
    }
}

export default admin;