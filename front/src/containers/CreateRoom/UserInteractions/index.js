import { connect } from 'react-redux';
import UserInteractions from 'components/CreateRoom/UserInteractions';

import {
    setCodeRoomInput,
    createNewGame,
    joinNewGame,
    resetRoomError,
} from 'actions/game';

const mapStateToProps = (state) => ({
    inputValue: state.room.codeRoomInput,
    roomError: state.room.error,
});

const mapDispatchStateToProps = (dispatch) => ({
    setInputValue: (value) => {
        dispatch(setCodeRoomInput(value));
    },
    createGame: () => {
        dispatch(createNewGame());
    },
    joinGame: (roomCode) => {
        dispatch(joinNewGame(roomCode));
    },
    resetRoomError: () => {
        dispatch(resetRoomError());
    },
});

export default connect(mapStateToProps, mapDispatchStateToProps)(UserInteractions);