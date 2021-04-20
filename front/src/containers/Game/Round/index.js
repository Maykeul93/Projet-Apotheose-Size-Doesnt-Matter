import { connect } from 'react-redux';
import Round from 'components/Game/Round';
import { setGameIsOver } from 'actions/gameInterface';

const mapStateToProps = (state) => ({
    round: state.game.round,
    numberOfRounds: state.game.questions.length,
});

const mapDispatchStateToProps = (dispatch) => ({
    setIsOver: () => {
        dispatch(setGameIsOver());
    }
});

export default connect(mapStateToProps, mapDispatchStateToProps)(Round);