export const SET_USER_ANSWER = 'SET_USER_ANSWER';
export const SEND_USER_ANSWER = 'SEND_USER_ANSWER';
export const VALIDATE_USER_ANSWER = 'VALIDATE_USER_ANSWER';
export const LEAVE_GAME = 'LEAVE_GAME';
export const SET_ROUND = 'SET_ROUND';
export const SET_OTHER_PLAYER_ANSWER = 'SET_OTHER_PLAYER_ANSWER';

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

export const leaveGame = () => ({
    type: LEAVE_GAME,
});

export const setRound = () => ({
    type: SET_ROUND,
});

export const setOtherPlayerAnswer = (id, answer) => ({
    type: SET_OTHER_PLAYER_ANSWER,
    id,
    answer,
});