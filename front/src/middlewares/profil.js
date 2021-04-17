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

            console.log(password,newPassword, newPassword2)
            api.put(`/users/${id}`, {
                pseudo, 
                email, 
                password, 
                newPassword, 
                newPassword2 
            })
            .then((result) => result.data[0])
            .then(({id, pseudo, email })=> {
                store.dispatch(setMessage('Changement effectué'));
                store.dispatch(setUser(id,email, pseudo));
                store.dispatch(resetInput());
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

export default Profil;