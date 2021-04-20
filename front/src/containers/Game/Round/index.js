import { connect } from 'react-redux';
import Round from 'components/Game/Round';

const mapStateToProps = (state) => ({
    round: state.game.round,
    numberOfRounds: state.game.questions.length,
});

const mapDispatchStateToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchStateToProps)(Round);