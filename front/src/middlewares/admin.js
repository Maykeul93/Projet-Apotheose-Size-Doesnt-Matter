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
    BAN_USER,
    setAdmin,
 } from "actions/admin";
import api from "api";

const admin = (store) => (next) => (action) => {
    switch(action.type) {
        case SET_ADMIN: {
            store.dispatch(setLoading(true));
            const token = localStorage.getItem('token');
            const adminId = store.getState().user.id
            api.get(`/admin/${adminId}/question`,{
                headers: {
                    "authorization" : `Bearer ${token}`
                },
            })
            .then((result) => {
                store.dispatch(setQuestions(result.data))
                console.log(result.data)
            })
            .then(() => api.get(`/admin/${adminId}/tag`,{
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
            const adminId = store.getState().user.id
            console.log(content, answer, tagId)
            api.post(`/admin/${adminId}/question`,{
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
                store.dispatch(setAdmin())
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
            const adminId = store.getState().user.id
            api.put(`/admin/${adminId}/question/${questionId}`,{
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
                store.dispatch(setAdmin())
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
            const adminId = store.getState().user.id
            api.delete(`/admin/${adminId}/question/${questionId}`,{
                headers: {
                    "authorization" : `Bearer ${token}`
                },
            })
            .then((result)=> {
                console.log(result.data)
                store.dispatch(setAdmin())
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
            const adminId = store.getState().user.id
            console.log('tag: ',tag)
            api.post(`/admin/${adminId}/tag`,{
                tag,
            },{
                headers: {
                    "authorization" : `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
            })
            .then((result)=> {
                console.log(result.data)
                store.dispatch(setAdmin())
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
            const adminId = store.getState().user.id
            api.put(`/admin/${adminId}/tag/${tagId}`,{
                name,
            },{
                headers: {
                    "authorization" : `Bearer ${token}`
                },
            })
            .then((result) => {
                console.log(result.data)
                store.dispatch(setUpdateTagInputValue('tag', ''))
                store.dispatch(setAdmin())
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
            const adminId = store.getState().user.id
            console.log(token)
            api.delete(`/admin/${adminId}/tag/${tagId}`,{
                headers: {
                    "authorization" : `Bearer ${token}`
                }
            })
            .then((result)=> {
                console.log(result.data)
                store.dispatch(setAdmin())
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
            const { userId } = store.getState().admin.role;
            const token = localStorage.getItem('token');
            const adminId = store.getState().user.id
            console.log(userId)
            console.log(token)
            api.put(`/admin/${adminId}/role`,{
                userId
            },{
                headers: {
                    "authorization" : `Bearer ${token}`
                },
            })
            .then((result)=> {
                console.log(result.data)
                store.dispatch(setAdmin())
            })
            .catch((error)=> {
                console.log(error.response)
            })
            .finally(() => {
                store.dispatch(setLoading(false))
            });
            return next(action);
        }

        case BAN_USER:{
            store.dispatch(setLoading(true));
            const { userId } = store.getState().admin.ban;
            const token = localStorage.getItem('token');
            const adminId = store.getState().user.id
            console.log(userId)
            console.log(token)
            api.delete(`/admin/${adminId}/role/${userId}`,{
                headers: {
                    "authorization" : `Bearer ${token}`
                },
            })
            .then((result)=> {
                console.log(result.data)
                store.dispatch(setAdmin())
            })
            .catch((error)=> {
                console.log(error.response)
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