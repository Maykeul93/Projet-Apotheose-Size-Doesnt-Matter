export const SEND_USER_ANSWER = 'SEND_USER_ANSWER';
export const VALIDATE_USER_ANSWER = 'VALIDATE_USER_ANSWER';
export const LEAVE_GAME = 'LEAVE_GAME';
export const SET_OTHER_PLAYER_ANSWER = 'SET_OTHER_PLAYER_ANSWER';
export const RESET_ALL_PLAYERS_ANSWER = 'RESET_ALL_PLAYERS_ANSWER';
export const SET_GAME_QUESTIONS = 'SET_GAME_QUESTIONS';
export const RESET_GAME_STATE = 'RESET_GAME_STATE';
export const SET_PLAYER_LEAVE_GAME = 'SET_PLAYER_LEAVE_GAME';
export const SET_ROUND = 'SET_ROUND';
export const SET_IS_ROUND = 'SET_IS_ROUND';
export const SET_GAME_IS_OVER = 'SET_GAME_IS_OVER';
export const SET_SCORE = 'SET_SCORE';
export const SEND_SCORE_TO_DB = 'SEND_SCORE_TO_DB';
export const SET_OTHER_PLAYER_READY = 'SET_OTHER_PLAYER_READY';

export const sendUserAnswer = (value) => ({
    type: SEND_USER_ANSWER,
    value,
});

export const validateUserAnswer = (value) => ({
    type: VALIDATE_USER_ANSWER,
    value,
});

export const leaveGame = (page) => ({
    type: LEAVE_GAME,
    page,
});

export const setOtherPlayerAnswer = (id, answer) => ({
    type: SET_OTHER_PLAYER_ANSWER,
    id,
    answer,
});

export const resetAllPlayersAnswers = () => ({
    type: RESET_ALL_PLAYERS_ANSWER,
});

export const setGameQuestions = (questions, idGame) => ({
    type: SET_GAME_QUESTIONS,
    questions,
    idGame,
});

export const resetGameState = () => ({
    type: RESET_GAME_STATE,
});

export const setPlayerLeaveGame = (id) => ({
    type: SET_PLAYER_LEAVE_GAME,
    id,
});

export const setRound = () => ({
    type: SET_ROUND,
});

export const setIsRound = () => ({
    type: SET_IS_ROUND,
});

export const setGameIsOver = () => ({
    type: SET_GAME_IS_OVER,
});

export const setScore = (score) => ({
    type: SET_SCORE,
    score,
});

export const sendScoreToDB = () => ({
    type: SEND_SCORE_TO_DB,
});

export const setOtherPlayerReady = (id, isReady) => ({
    type: SET_OTHER_PLAYER_READY,
    id,
    isReady,
});