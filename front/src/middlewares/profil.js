import { setLoading, SUBMIT_PROFIL, setMessage, resetInput } from 'actions/profil';
import { setUser } from 'actions/user';
import api from 'api';

const Profil = (store) => (next) => (action) => {
    switch(action.type) {
        case SUBMIT_PROFIL: {
            store.dispatch(setLoading(true));
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
            })
            .then((result) => {
                console.log(result.data)
                const infoUser = result.data.infoUser[0]
                const message = result.data.tab[0]
                return {infoUser, message}
            })
            .then(({infoUser, message} )=> {
                console.log(infoUser);
                store.dispatch(setMessage(message.succes));
                store.dispatch(setUser(infoUser.id,infoUser.email, infoUser.pseudo));
                store.dispatch(resetInput());
            })
            .catch((error)=> {
                console.log(error);
                store.dispatch(setMessage('Une erreur c\'est produite, veuillez réessayer'));
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