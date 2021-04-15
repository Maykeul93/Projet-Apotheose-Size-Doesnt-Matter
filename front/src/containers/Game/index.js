import { connect } from 'react-redux';
import Game from 'components/Game';
import {
    setUserAnswer,
    sendUserAnswer,
} from 'actions/gameInterface';

const mapStateToProps = (state) => ({
    player: {
        pseudo: state.user.pseudo,
        answer: state.game.userAnswerValidate,
    }, // temporary
    otherPlayers: state.game.players,
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

export default connect(mapStateToProps, mapDispatchStateToProps)(Game);