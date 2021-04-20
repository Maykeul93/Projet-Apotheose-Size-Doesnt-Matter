import { connect } from 'react-redux';
import Timer from 'components/Game/Timer';
import {
    resetAllPlayersAnswers,
    setRound,
    setIsRound,
} from 'actions/gameInterface';

const mapStateToProps = (state) => ({
    isRound: state.game.isRound,
});

const mapDispatchStateToProps = (dispatch) => ({
    resetAllPlayersAnswers: () => {
        dispatch(resetAllPlayersAnswers());
    },
    setRound: () => {
        dispatch(setRound());
    },
    setIsRound: () => {
        dispatch(setIsRound());
    }
});

export default connect(mapStateToProps, mapDispatchStateToProps)(Timer);