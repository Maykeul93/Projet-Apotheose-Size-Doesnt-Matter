import { connect } from 'react-redux';
import Ranking from 'components/Game/Ranking';

const mapStateToProps = (state) => ({
    player: {
        id: state.user.id,
        pseudo: state.user.pseudo,
        answer: state.game.userAnswerValidate,
    },
    otherPlayers: state.game.players,
    questions: state.game.questions,
    exactAnswer: state.game.exactAnswer,
    isRound: state.game.isRound,
    round: state.game.round,
});

const mapDispatchStateToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchStateToProps)(Ranking);