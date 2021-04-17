export const SET_CODE_ROOM_INPUT = 'SET_CODE_ROOM_INPUT';
export const CREATE_NEW_GAME = 'CREATE_NEW_GAME';
export const JOIN_NEW_GAME = 'JOIN_NEW_GAME';
export const STOCK_ROOM = 'STOCK_ROOM';
export const LAUNCH_GAME = 'LAUNCH_GAME';
export const SET_LAUNCH_GAME = 'SET_LAUNCH_GAME';

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
})

export const launchNewGame = () => ({
    type: LAUNCH_GAME,
});

export const setLaunchGame = () => ({
    type: SET_LAUNCH_GAME,
});