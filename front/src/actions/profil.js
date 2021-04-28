export const SET_PROFIL_INPUT_VALUE = 'SET_PROFIL_INPUT_VALUE';

export const setProfilInputValue = (name, value) => ({
    type: SET_PROFIL_INPUT_VALUE,
    name,
    value,
  });

export const SET_LOADING = 'SET_LOADING';

export const setLoading = (value) => ({
    type: SET_LOADING,
    value
  });
  
export const SUBMIT_PROFIL = 'SUBMIT_PROFIL';

export const submitProfil = () => ({
    type: SUBMIT_PROFIL,
  });

export const SET_PROFIL_SUCCESS = 'SET_PROFIL_SUCCESS';

export const setProfilSuccess = (value) => ({
    type: SET_PROFIL_SUCCESS,
    value
  });

export const SET_PROFIL_ERROR = 'SET_PROFIL_ERROR';

export const setProfilError = (value) => ({
    type: SET_PROFIL_ERROR,
    value
  });

export const RESET_INPUT = 'RESET_INPUT';

export const resetInput = () => ({
    type: RESET_INPUT,
  });

export const SET_AVATAR_CHANGE = 'SET_AVATAR_CHANGE';

export const setAvatarChange = (value) => ({
    type: SET_AVATAR_CHANGE,
    value
  });
  
export const REQUEST_HISTORY = 'REQUEST_HISTORY';

export const requestHistory = () => ({
    type: REQUEST_HISTORY,
  });
