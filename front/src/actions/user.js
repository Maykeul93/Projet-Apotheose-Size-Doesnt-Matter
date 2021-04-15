export const SET_EMAIL_INPUT_VALUE = 'SET_EMAIL_INPUT_VALUE';

export const setEmailInputValue = (value) => ({
  type: SET_EMAIL_INPUT_VALUE,
  value,
});

export const SET_PASSWORD_INPUT_VALUE = 'SET_PASSWORD_INPUT_VALUE';

export const setPasswordInputValue = (value) => ({
  type: SET_PASSWORD_INPUT_VALUE,
  value,
});

export const SET_LOADING_STATE = 'SET_LOADING_STATE';

export const setLoadingState = (loading) => ({
  type: SET_LOADING_STATE,
  loading,
});

export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';

export const submitLogin = () => ({
  type: SUBMIT_LOGIN,
});

export const SET_LOGGED = 'SET_LOGGED';

export const setLogged = (value) => ({
  type: SET_LOGGED,
  value,
});

export const SET_DISPLAYED = 'SET_DISPLAYED';

export const setDisplayed = (value) => ({
  type: SET_DISPLAYED,
});

export const SET_USER= 'SET_USER';

export const setUser = (id, email, pseudo) => ({
  type: SET_USER,
  id,
  email,
  pseudo,
});