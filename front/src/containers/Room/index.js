import { connect } from 'react-redux';
import Room from 'components/Room';
import {
    setLaunchGame,
} from 'actions/game';

const mapStateToProps = (state) => ({
    otherPlayers: state.game.players,
    room: state.room.room,
    isLaunch: state.room.isLaunch,
    isCreator: state.room.isCreator,
});

const mapDispatchStateToProps = (dispatch) => ({
    launchGame: () => {
        dispatch(setLaunchGame());
    },
});

export default connect(mapStateToProps, mapDispatchStateToProps)(Room);