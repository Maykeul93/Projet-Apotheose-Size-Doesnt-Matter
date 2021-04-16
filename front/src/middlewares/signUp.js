import { setLoading, setRegistered, SUBMIT_REGISTERED } from 'actions/signUp';
import api from 'api';

const signUp = (store) => (next) => (action) => {
    switch(action.type) {
        case SUBMIT_REGISTERED: {
            store.dispatch(setLoading(true));
            const {pseudo, email, password} = store.getState().signUp;
            api.post('/signup', {
            pseudo,
            email,
            password,
            })
            .then(()=> {
                store.dispatch(setRegistered(true))
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

export default signUp;