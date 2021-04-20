import { connect } from 'react-redux';
import Ranking from 'components/Game/Ranking';

const mapStateToProps = (state) => ({
    player: {
        id: state.user.id,
        pseudo: state.user.pseudo,
    },
    otherPlayers: state.game.players,
});

const mapDispatchStateToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchStateToProps)(Ranking);