import { connect } from 'react-redux';
import Round from 'components/Game/Round';
import { sendScoreToDB } from 'actions/gameInterface';

const mapStateToProps = (state) => ({
    round: state.game.round,
    numberOfRounds: state.game.questions.length,
});

const mapDispatchStateToProps = (dispatch) => ({
    sendScore: () => {
        dispatch(sendScoreToDB());
    }
});

export default connect(mapStateToProps, mapDispatchStateToProps)(Round);