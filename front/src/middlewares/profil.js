import { setLoading, SUBMIT_PROFIL, setProfilSuccess, resetInput, setProfilError } from 'actions/profil';
import { setUser } from 'actions/user';
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
                } = store.getState().profil;

            api.put(`/users/${id}`, {
                pseudo, 
                email, 
                password, 
                newPassword, 
                newPassword2 
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
        default:
            next(action);
    }
}

export default Profil;