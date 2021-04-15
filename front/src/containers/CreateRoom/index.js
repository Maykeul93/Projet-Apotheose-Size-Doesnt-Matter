import { connect } from 'react-redux';

import CreateRoom from 'components/CreateRoom';
import {
    setCodeRoomInput,
    createNewGame,
    joinNewGame,
} from 'actions/game';

const mapStateToProps = (state) => ({
    inputValue: state.room.codeRoomInput,
    room: state.room.room,
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
    }
});

export default connect(mapStateToProps, mapDispatchStateToProps)(CreateRoom);
