import { connect } from 'react-redux';
import Game from 'components/Game';

const mapStateToProps = (state) => ({
    player: {
        pseudo: state.user.pseudo,
        answer: state.game.userAnswerValidate,
    }, // temporary
    otherPlayers: state.game.players,
});

const mapDispatchStateToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchStateToProps)(Game);