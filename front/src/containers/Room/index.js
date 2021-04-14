import { connect } from 'react-redux';
import Room from 'components/Room';
import {
    launchNewGame,
} from 'actions/game';

const mapStateToProps = (state) => ({
    otherPlayers: state.game.players,
    player: state.user.pseudo,
    room: state.game.room,
    isLaunch: state.game.isLaunch,
});

const mapDispatchStateToProps = (dispatch) => ({
    launchGame: () => {
        dispatch(launchNewGame());
    },
});

export default connect(mapStateToProps, mapDispatchStateToProps)(Room);