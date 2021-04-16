export const SOCKET_CONNECTION = 'SOCKET_CONNECTION';
export const SET_SOCKET = 'SET_SOCKET';

export const socketConnection = () => ({
    type: SOCKET_CONNECTION,
});

export const setSocket = (socket) => ({
    type: SET_SOCKET,
    socket,
});