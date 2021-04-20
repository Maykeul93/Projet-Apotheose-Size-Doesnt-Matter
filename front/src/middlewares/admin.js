import { 
    setLoading,
    setQuestions, 
    setTags, 
    SET_ADMIN,
    ADD_QUESTION,
    setAddQuestionInputValue,
 } from "actions/admin";
import api from "api";

const admin = (store) => (next) => (action) => {
    switch(action.type) {
        case SET_ADMIN: {
            store.dispatch(setLoading(true));
            api.get(`/admin/question`,)
            .then((result) => {
                store.dispatch(setQuestions(result.data))
                console.log(result.data)
            })
            .then(() => api.get(`/admin/tag`),)
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
            api.post(`/admin/question`,{
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
        default:
            next(action);
    }
}

export default admin;