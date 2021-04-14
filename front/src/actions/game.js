export const SET_CODE_ROOM_INPUT = 'SET_CODE_ROOM_INPUT';
export const CREATE_NEW_GAME = 'CREATE_NEW_GAME';

export const setCodeRoomInput = (value) => ({
    type: SET_CODE_ROOM_INPUT,
    value,
});

export const createNewGame = () => ({
    type: CREATE_NEW_GAME,
});