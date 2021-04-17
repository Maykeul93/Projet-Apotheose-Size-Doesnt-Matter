import { connect } from 'react-redux';
import Room from 'components/Room';
import {
    setLaunchGame,
} from 'actions/game';

const mapStateToProps = (state) => ({
    otherPlayers: state.game.players,
    room: state.room.room,
    isLaunch: state.room.isLaunch,
    user: {
        pseudo: state.user.pseudo,
        id: state.user.id,
    }
});

const mapDispatchStateToProps = (dispatch) => ({
    launchGame: () => {
        dispatch(setLaunchGame());
    },
});

export default connect(mapStateToProps, mapDispatchStateToProps)(Room);