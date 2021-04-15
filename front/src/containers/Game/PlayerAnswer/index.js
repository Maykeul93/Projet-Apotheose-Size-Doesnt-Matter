import { connect } from 'react-redux';
import PlayerAnswer from 'components/Game/PlayerAnswer';
import {
    setUserAnswer,
    sendUserAnswer,
} from 'actions/gameInterface';

const mapStateToProps = (state) => ({
    inputValue: state.game.userAnswer,
});

const mapDispatchStateToProps = (dispatch) => ({
    changeInputValue: (value) => {
        dispatch(setUserAnswer(value));
    },
    sendResponse: (value) => {
        dispatch(sendUserAnswer(value));
    },
});

export default connect(mapStateToProps, mapDispatchStateToProps)(PlayerAnswer);