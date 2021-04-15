export const SET_USER_ANSWER = 'SET_USER_ANSWER';
export const SEND_USER_ANSWER = 'SEND_USER_ANSWER';
export const VALIDATE_USER_ANSWER = 'VALIDATE_USER_ANSWER';

export const setUserAnswer = (value) => ({
    type: SET_USER_ANSWER,
    value,
});

export const sendUserAnswer = (value) => ({
    type: SEND_USER_ANSWER,
    value,
});

export const validateUserAnswer = (value) => ({
    type: VALIDATE_USER_ANSWER,
    value,
});