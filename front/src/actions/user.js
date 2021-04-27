export const SET_EMAIL_INPUT_VALUE = 'SET_EMAIL_INPUT_VALUE';
export const SET_PASSWORD_INPUT_VALUE = 'SET_PASSWORD_INPUT_VALUE';
export const SET_LOADING_STATE = 'SET_LOADING_STATE';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const SET_LOGGED = 'SET_LOGGED';
export const SET_DISPLAYED = 'SET_DISPLAYED';
export const SET_USER= 'SET_USER';
export const SET_LOGOUT = 'SET_LOGOUT';
export const SET_USER_AVATAR = 'SET_USER_AVATAR';

export const setEmailInputValue = (value) => ({
  type: SET_EMAIL_INPUT_VALUE,
  value,
});

export const setPasswordInputValue = (value) => ({
  type: SET_PASSWORD_INPUT_VALUE,
  value,
});

export const setLoadingState = (loading) => ({
  type: SET_LOADING_STATE,
  loading,
});

export const submitLogin = () => ({
  type: SUBMIT_LOGIN,
});

export const setLogged = (value) => ({
  type: SET_LOGGED,
  value,
});

export const setDisplayed = (value = null) => ({
  type: SET_DISPLAYED,
  value,
});

export const setUser = (id, email, pseudo, avatar) => ({
  type: SET_USER,
  id,
  email,
  pseudo,
  avatar,
});

export const setLogout = () => ({
  type: SET_LOGOUT,
});

export const setUserAvatar = (avatar) => ({
  type: SET_USER_AVATAR,
  avatar,
});