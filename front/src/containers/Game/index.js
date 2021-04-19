import { connect } from 'react-redux';
import Game from 'components/Game';
import { resetAllPlayersAnswer } from 'actions/gameInterface';

const mapStateToProps = (state) => ({
    player: {
        pseudo: state.user.pseudo,
        answer: state.game.userAnswerValidate,
        id: state.user.id,
    },
    otherPlayers: state.game.players,
    questions: state.game.questions,
    isLaunch: state.room.isLaunch,
});

const mapDispatchStateToProps = (dispatch) => ({
    resetAllPlayersAnswers: () => {
        dispatch(resetAllPlayersAnswer());
    }
});

export default connect(mapStateToProps, mapDispatchStateToProps)(Game);