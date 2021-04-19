export const SET_USER_ANSWER = 'SET_USER_ANSWER';
export const SEND_USER_ANSWER = 'SEND_USER_ANSWER';
export const VALIDATE_USER_ANSWER = 'VALIDATE_USER_ANSWER';
export const LEAVE_GAME = 'LEAVE_GAME';
export const SET_OTHER_PLAYER_ANSWER = 'SET_OTHER_PLAYER_ANSWER';
export const SET_GAME_QUESTIONS = 'SET_GAME_QUESTIONS';
export const RESET_GAME_STATE = 'RESET_GAME_STATE';
export const SET_PLAYER_LEAVE_GAME = 'SET_PLAYER_LEAVE_GAME';

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

export const setOtherPlayerAnswer = (id, answer) => ({
    type: SET_OTHER_PLAYER_ANSWER,
    id,
    answer,
});

export const setGameQuestions = (questions) => ({
    type: SET_GAME_QUESTIONS,
    questions,
});

export const resetGameState = () => ({
    type: RESET_GAME_STATE,
});

export const setPlayerLeaveGame = (id) => ({
    type: SET_PLAYER_LEAVE_GAME,
    id,
});