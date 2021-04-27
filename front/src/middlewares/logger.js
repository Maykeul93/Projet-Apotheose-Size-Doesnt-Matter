import api from 'api';

import {
    SUBMIT_LOGIN,
    setLoadingState,
    setLogged,
    setUser,
    setDisplayed,
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
            .then(({id, email, pseudo, avatar, token, role}) => {
                localStorage.setItem('token', token);
                store.dispatch(setUser(id, email, pseudo, avatar, role));
                store.dispatch(setLogged(true));
                store.dispatch(socketConnection());
                store.dispatch(setDisplayed(false));
            })
            .finally(() => {
                store.dispatch(setLoadingState(false));
            });
            //! Ajouter un .catch pour gérer les erreurs de connexion!
            return next(action);
        }
        default:
            next(action);
    }
}

export default logger