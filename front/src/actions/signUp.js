export const SET_SIGN_UP_INPUT_VALUE = 'SET_SIGN_UP_INPUT_VALUE';

export const setSignUpInputValue = (name, value) => ({
    type: SET_SIGN_UP_INPUT_VALUE,
    name,
    value,
  });

export const SET_LOADING = 'SET_LOADING';

export const setLoading = (value) => ({
    type: SET_LOADING,
    value
  });

export const SUBMIT_REGISTERED = 'SUBMIT_REGISTERED';

export const submitRegistered = () => ({
    type: SUBMIT_REGISTERED,
});

export const SET_REGISTERED = 'SET_REGISTERED';

export const setRegistered = () => ({
    type: SET_REGISTERED,
});