import { connect } from 'react-redux';

import CreateRoom from 'components/CreateRoom';
import {
    setCodeRoomInput,
    createNewGame,
} from 'actions/game';

const mapStateToProps = (state) => ({
    inputValue: state.game.codeRoomInput,
});

const mapDispatchStateToProps = (dispatch) => ({
    setInputValue: (value) => {
        dispatch(setCodeRoomInput(value));
    },
    createGame: () => {
        dispatch(createNewGame());
    },
});

export default connect(mapStateToProps, mapDispatchStateToProps)(CreateRoom);
