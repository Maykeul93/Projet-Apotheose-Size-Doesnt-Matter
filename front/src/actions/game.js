export const SET_CODE_ROOM_INPUT = 'SET_CODE_ROOM_INPUT';
export const CREATE_NEW_GAME = 'CREATE_NEW_GAME';
export const JOIN_NEW_GAME = 'JOIN_NEW_GAME';
export const STOCK_ROOM = 'STOCK_ROOM';
export const RESET_ROOM = 'RESET_ROOM';
export const LAUNCH_GAME = 'LAUNCH_GAME';
export const SET_LAUNCH_GAME = 'SET_LAUNCH_GAME';
export const SET_OTHER_PLAYERS = 'SET_OTHER_PLAYERS';
export const CHAT_SEND_MESSAGE = 'CHAT_SEND_MESSAGE';
export const CHAT_RECEIVE_MESSAGE = 'CHAT_RECEIVE_MESSAGE';
export const SET_ROOM_ERROR = 'SET_ROOM_ERROR';
export const RESET_ROOM_ERROR = 'RESET_ROOM_ERROR';
export const SEND_AVATAR_TO_SERV = 'SEND_AVATAR_TO_SERV';

export const setCodeRoomInput = (value) => ({
    type: SET_CODE_ROOM_INPUT,
    value,
});

export const createNewGame = () => ({
    type: CREATE_NEW_GAME,
});

export const joinNewGame = (roomCode) => ({
    type: JOIN_NEW_GAME,
    roomCode,
});

export const stockRoomIntoState = (roomCode) => ({
    type: STOCK_ROOM,
    roomCode,
});

export const resetRoom = () => ({
    type: RESET_ROOM,
});

export const launchNewGame = () => ({
    type: LAUNCH_GAME,
});

export const setLaunchGame = () => ({
    type: SET_LAUNCH_GAME,
});

export const setOtherPlayers = (players) => ({
    type: SET_OTHER_PLAYERS,
    players,
});

export const chatSendMessage = (message) => ({
    type: CHAT_SEND_MESSAGE,
    message,
});

export const chatReceiveMessage = (message) => ({
    type: CHAT_RECEIVE_MESSAGE,
    message,
});

export const setRoomError = (error) => ({
    type: SET_ROOM_ERROR,
    error,
});

export const resetRoomError = () => ({
    type: RESET_ROOM_ERROR,
});

export const sendAvatarToServ = (avatar) => ({
    type: SEND_AVATAR_TO_SERV,
    avatar,
});