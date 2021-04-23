import api from 'api';

import {
    SUBMIT_LOGIN,
    setLoadingState,
    setLogged,
    setUser,
} from 'actions/user';

import { socketConnection } from 'actions/socket';

const logger = (store) => (next) => (action) => {
    switch(action.type) {
        case SUBMIT_LOGIN: {
            store.dispatch(setLoadingState(true));
            const {email, password } = store.getState().user;
            api.post('/signin', {
                email,
                password,
            })
            .then((result) => result.data)
            .then(({id, email, pseudo, avatar, token}) => {
                localStorage.setItem('token', token);
                store.dispatch(setUser(id, email, pseudo, avatar));
                store.dispatch(setLogged(true));
                store.dispatch(socketConnection());
            })
            .finally(() => {
                store.dispatch(setLoadingState(false));
            });
            return next(action);
        }
        default:
            next(action);
    }
}

export default logger