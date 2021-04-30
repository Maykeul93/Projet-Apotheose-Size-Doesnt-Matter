import { connect } from 'react-redux';
import Room from 'components/Room';
import {
    setLaunchGame,
    sendIsReady,
} from 'actions/game';

const mapStateToProps = (state) => ({
    otherPlayers: state.game.players,
    room: state.room.room,
    isLaunch: state.room.isLaunch,
    isCreator: state.room.isCreator,
    isReady: state.room.isReady,
    messages: state.game.chatMessages,
});

const mapDispatchStateToProps = (dispatch) => ({
    launchGame: () => {
        dispatch(setLaunchGame());
    },
    sendIsReady: () => {
        dispatch(sendIsReady());
    }
});

export default connect(mapStateToProps, mapDispatchStateToProps)(Room);