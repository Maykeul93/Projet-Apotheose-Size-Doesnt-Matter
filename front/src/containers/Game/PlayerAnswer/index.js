import { connect } from 'react-redux';
import PlayerAnswer from 'components/Game/PlayerAnswer';
import {
    setUserAnswer,
    sendUserAnswer,
} from 'actions/gameInterface';

const mapStateToProps = (state) => ({});

const mapDispatchStateToProps = (dispatch) => ({
    sendResponse: (value) => {
        dispatch(sendUserAnswer(value));
    },
});

export default connect(mapStateToProps, mapDispatchStateToProps)(PlayerAnswer);