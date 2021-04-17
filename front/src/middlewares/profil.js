import { setLoading, SUBMIT_PROFIL, setMessage } from 'actions/profil';
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
                oldPassword, 
                newPassword, 
                validPassword 
                } = store.getState().profil;

            console.log(pseudo)
            api.put(`/users/${id}`, {
                pseudo, 
                email, 
                oldPassword, 
                newPassword, 
                validPassword 
            })
            .then((result) => result.data)
            .then(({id, pseudo, email })=> {
                console.log('hello')
                store.dispatch(setMessage('Changement effectué'));
                store.dispatch(setUser(id,pseudo, email));
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