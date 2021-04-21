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
    DELETE_TAG,
    setUsers,
    CHANGE_ROLE,
 } from "actions/admin";
import api from "api";

const admin = (store) => (next) => (action) => {
    switch(action.type) {
        case SET_ADMIN: {
            store.dispatch(setLoading(true));
            const token = localStorage.getItem('token');
            api.get(`/admin/8/question`,{
                headers: {
                    "authorization" : `Bearer ${token}`
                },
            })
            .then((result) => {
                store.dispatch(setQuestions(result.data))
                console.log(result.data)
            })
            .then(() => api.get(`/admin/8/tag`,{
                headers: {
                    "authorization" : `Bearer ${token}`
                },
            }))
            .then((result) => {
                store.dispatch(setTags(result.data))
                console.log(result.data)
            })
            .then(() => api.get(`/users`,{
                headers: {
                    "authorization" : `Bearer ${token}`
                },
            }))
            .then((result) => {
                store.dispatch(setUsers(result.data))
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
            const token = localStorage.getItem('token');
            const {question:content, answer, tagId} = store.getState().admin.addQuestion
            console.log(content, answer, tagId)
            api.post(`/admin/8/question`,{
                content,
                answer,
                tagId
            },{
                headers: {
                    "authorization" : `Bearer ${token}`
                },
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
            const token = localStorage.getItem('token');
            const {question:content, answer, tagId, questionId} = store.getState().admin.updateQuestion
            api.put(`/admin/8/question/${questionId}`,{
                content,
                answer,
                tagId,
            },{
                headers: {
                    "authorization" : `Bearer ${token}`
                },
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
            const token = localStorage.getItem('token');
            const { questionId } = store.getState().admin.deleteQuestion;
            api.delete(`/admin/8/question/${questionId}`,{
                headers: {
                    "authorization" : `Bearer ${token}`
                },
            })
            .then((result)=> {
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

        case ADD_TAG: {
            store.dispatch(setLoading(true));
            const token = localStorage.getItem('token');
            const { tag } = store.getState().admin.addTag;
            console.log('tag: ',tag)
            api.post(`/admin/8/tag`,{
                tag,
            },{
                headers: {
                    "authorization" : `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
            })
            .then((result)=> {
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

        case UPDATE_TAG : {
            store.dispatch(setLoading(true));
            const token = localStorage.getItem('token');
            const { tag: name , tagId } = store.getState().admin.updateTag
            api.put(`/admin/8/tag/${tagId}`,{
                name,
            },{
                headers: {
                    "authorization" : `Bearer ${token}`
                },
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

        case DELETE_TAG: {
            store.dispatch(setLoading(true));
            const { tagId } = store.getState().admin.deleteTag;
            const token = localStorage.getItem('token');
            console.log(token)
            api.delete(`/admin/8/tag/${tagId}`,{
                headers: {
                    "authorization" : `Bearer ${token}`
                }
            })
            .then((result)=> {
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

        case CHANGE_ROLE:{
            store.dispatch(setLoading(true));
            const { userId } = store.getState().admin.user.userId;
            const token = localStorage.getItem('token');
            console.log(token)
            api.post(`/admin/8/role`,{
                userId
            },{
                headers: {
                    "authorization" : `Bearer ${token}`
                },
            })
            .then((result)=> {
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
        default:
            next(action);
    }
}

export default admin;