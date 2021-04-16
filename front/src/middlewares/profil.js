import { setLoading, SUBMIT_PROFIL } from 'actions/profil';
import { setUser } from 'actions/user';
import api from 'api';

const Profil = (store) => (next) => (action) => {
    switch(action.type) {
        case SUBMIT_PROFIL: {
            store.dispatch(setLoading(true));
            const { id } = store.getState().user
            const {pseudo, email, oldPassword, newPassword, validPassword } = store.getState().profil;
            api.post(`/users/${id}`, {
            pseudo,
            email,
            oldPassword,
            newPassword,
            validPassword
            })
            .then(()=> {
                setUser(id, pseudo, email)
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