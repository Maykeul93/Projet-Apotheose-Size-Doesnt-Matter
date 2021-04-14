import { connect } from 'react-redux';
import Game from 'components/Game';

const mapStateToProps = (state) => ({
    player: state.user.pseudo, // temporary
    otherPlayers: state.game.players,
});

const mapDispatchStateToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchStateToProps)(Game);