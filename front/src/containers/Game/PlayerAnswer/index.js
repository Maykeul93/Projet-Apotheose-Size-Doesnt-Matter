import { connect } from 'react-redux';
import PlayerAnswer from 'components/Game/PlayerAnswer';
import {
    sendUserAnswer,
} from 'actions/gameInterface';

const mapStateToProps = (state) => ({
    isRound: state.game.isRound,
    user: {
        avatar: state.user.avatar,
    }
});

const mapDispatchStateToProps = (dispatch) => ({
    sendResponse: (value) => {
        dispatch(sendUserAnswer(value));
    },
});

export default connect(mapStateToProps, mapDispatchStateToProps)(PlayerAnswer);