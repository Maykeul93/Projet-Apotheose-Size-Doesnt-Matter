import { connect } from 'react-redux';
import Timer from 'components/Game/Timer';
import {
    resetAllPlayersAnswers,
    setRound,
} from 'actions/gameInterface';

const mapStateToProps = (state) => ({});

const mapDispatchStateToProps = (dispatch) => ({
    resetAllPlayersAnswers: () => {
        dispatch(resetAllPlayersAnswers());
    },
    setRound: () => {
        dispatch(setRound());
    },
});

export default connect(mapStateToProps, mapDispatchStateToProps)(Timer);