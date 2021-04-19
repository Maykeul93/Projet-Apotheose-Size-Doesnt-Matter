import { setQuestion, setTag, SET_ADMIN } from "actions/admin";
import api from "api";

const admin = (store) => (next) => (action) => {
    switch(action.type) {
        case SET_ADMIN: {
            //store.dispatch(setLoading(true));
            api.get(`/admin/question`,)
            .then((result) => {
                store.dispatch(setQuestion(result.data))
                console.log(result.data)
            })
            .then(() => api.get(`/admin/tag`),)
            .then((result) => {
                store.dispatch(setTag(result.data))
                console.log(result.data)
            })
            .catch((error)=> {
                console.log(error)
            })
            .finally(() => {
                //store.dispatch(setLoading(false))
            });
            return next(action);
        }
        default:
            next(action);
    }
}

export default admin;