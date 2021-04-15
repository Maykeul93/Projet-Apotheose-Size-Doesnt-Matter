import api from 'api';

import {
    SUBMIT_LOGIN,
    setLoadingState,
    setLogged,
    setUser,
  } from 'actions/user';

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
            .then(({id, email, pseudo}) => {
                store.dispatch(setUser(id, email, pseudo));
                store.dispatch(setLogged(true));
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