import { connect } from 'react-redux';
import Game from 'components/Game';
import { setRound } from 'actions/gameInterface';

const mapStateToProps = (state) => ({
    player: {
        pseudo: state.user.pseudo,
        answer: state.game.userAnswerValidate,
        id: state.user.id,
    },
    otherPlayers: state.game.players,
    isRound: state.game.isRound,
});

const mapDispatchStateToProps = (dispatch) => ({
    setRound: () => {
        dispatch(setRound());
    }
});

export default connect(mapStateToProps, mapDispatchStateToProps)(Game);