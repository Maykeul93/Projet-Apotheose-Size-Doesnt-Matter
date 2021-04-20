import { connect } from 'react-redux';
import Question from 'components/Game/Question';

const mapStateToProps = (state) => ({
    isRound: state.game.isRound,
    questions: state.game.questions,
    round: state.game.round,
});

const mapDispatchStateToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchStateToProps)(Question);