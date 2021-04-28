import { setLoading, SUBMIT_PROFIL, setProfilSuccess, resetInput, setProfilError, REQUEST_HISTORY } from 'actions/profil';
import { DELETE_ACCOUNT, resetState, setUser, setUserHistory } from 'actions/user';
import api from 'api';

const Profil = (store) => (next) => (action) => {
    switch(action.type) {
        case SUBMIT_PROFIL: {
            store.dispatch(setLoading(true));
            const token = localStorage.getItem('token');
            const { id } = store.getState().user
            let { 
                pseudo, 
                email, 
                oldPassword : password, 
                newPassword,
                validPassword : newPassword2,
                avatar
                } = store.getState().profil;
                console.log(avatar)
            api.put(`/users/${id}`, {
                pseudo, 
                email,
                password,
                newPassword,
                newPassword2,
                avatar
            },{
                headers: {
                    "authorization" : `Bearer ${token}`
                },
            })
            .then((result) => {
                console.log(result.data)
                const infoUser = result.data.infoUser[0]
                const message = result.data.success
                return {infoUser, message}
            })
            .then(({infoUser, message} )=> {
                console.log(message, store.getState().user.role);
                store.dispatch(setProfilSuccess(message));
                store.dispatch(setUser(infoUser.id,infoUser.email, infoUser.pseudo, infoUser.avatar, store.getState().user.role));
                store.dispatch(resetInput());
            })
            .catch((error)=> {
                console.log(error.response.data.error)
                store.dispatch(setProfilError(error.response.data.error));
                store.dispatch(resetInput());
            })
            .finally(() => {
                store.dispatch(setLoading(false));
            });
            return next(action);
        }
        case DELETE_ACCOUNT: {
            store.dispatch(setLoading(true));
            const token = localStorage.getItem('token');
            const { id } = store.getState().user;
            api.delete(`/users/${id}`,{
                headers: {
                    "authorization" : `Bearer ${token}`
                },
            })
            .then(()=> {
                localStorage.removeItem('token');
                store.dispatch(resetState())
            })
            .catch((error)=> {
                console.log(error)
            })
            .finally(() => {
                store.dispatch(setLoading(false));
            });
            return next(action)
        }
        case REQUEST_HISTORY: {
            store.dispatch(setLoading(true));
            const token = localStorage.getItem('token');
            const { id } = store.getState().user;
            api.get(`/history/${id}`,{
                headers: {
                    "authorization" : `Bearer ${token}`
                },
            })
            .then((result)=> {
                console.log(result.data)
                store.dispatch(setUserHistory(result.data))
            })
            .catch((error)=> {
                console.log(error)
            })
            .finally(() => {
                store.dispatch(setLoading(false));
            });
            return next(action)
        }
        default:
            next(action);
    }
}

export default Profil;