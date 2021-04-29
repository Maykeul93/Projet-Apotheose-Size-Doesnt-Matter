import { connect } from 'react-redux';
import Ranking from 'components/Game/Ranking';

import { setScore } from 'actions/gameInterface';

const mapStateToProps = (state) => ({
    player: {
        id: state.user.id,
        pseudo: state.user.pseudo,
        answer: state.game.userAnswerValidate,
        avatar: state.user.avatar,
    },
    otherPlayers: state.game.players,
    exactAnswer: state.game.exactAnswer,
    isRound: state.game.isRound,
    round: state.game.round,
    score: state.game.score,
});

const mapDispatchStateToProps = (dispatch) => ({
    setScore: (score) => {
        dispatch(setScore(score));
    },
});

export default connect(mapStateToProps, mapDispatchStateToProps)(Ranking);