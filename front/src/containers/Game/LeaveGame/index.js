import { connect } from 'react-redux';
import LeaveGame from 'components/Game/LeaveGame';

import { leaveGame } from 'actions/gameInterface';

const mapStateToProps = (state) => ({});

const mapDispatchStateToProps = (dispatch) => ({
    leaveGame: (page=null) => {
        dispatch(leaveGame(page));
    },
});

export default connect(mapStateToProps, mapDispatchStateToProps)(LeaveGame);