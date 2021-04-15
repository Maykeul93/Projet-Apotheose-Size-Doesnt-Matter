import { connect } from 'react-redux';
import UserInteractions from 'components/CreateRoom/UserInteractions';

import {
    setCodeRoomInput,
    createNewGame,
    joinNewGame,
} from 'actions/game';

const mapStateToProps = (state) => ({
    inputValue: state.room.codeRoomInput,
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

export default connect(mapStateToProps, mapDispatchStateToProps)(UserInteractions);