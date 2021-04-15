import api from 'api';

import {
    SUBMIT_LOGIN,
    setPseudo,
    setLoadingState,
    setLogged,
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
            .then(({pseudo}) => {
                store.dispatch(setPseudo(pseudo));
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