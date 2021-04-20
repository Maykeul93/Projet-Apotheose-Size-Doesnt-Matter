export const SET_CODE_ROOM_INPUT = 'SET_CODE_ROOM_INPUT';
export const CREATE_NEW_GAME = 'CREATE_NEW_GAME';
export const JOIN_NEW_GAME = 'JOIN_NEW_GAME';
export const STOCK_ROOM = 'STOCK_ROOM';
export const RESET_ROOM = 'RESET_ROOM';
export const LAUNCH_GAME = 'LAUNCH_GAME';
export const SET_LAUNCH_GAME = 'SET_LAUNCH_GAME';
export const SET_OTHER_PLAYERS = 'SET_OTHER_PLAYERS';

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

export const launchNewGame = (id) => ({
    type: LAUNCH_GAME,
    id,
});

export const setLaunchGame = () => ({
    type: SET_LAUNCH_GAME,
});

export const setOtherPlayers = (players) => ({
    type: SET_OTHER_PLAYERS,
    players,
});