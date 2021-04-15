import { connect } from 'react-redux';
import LeaveGame from 'components/Game/LeaveGame';

import { leaveGame } from 'actions/gameInterface';

const mapStateToProps = (state) => ({});

const mapDispatchStateToProps = (dispatch) => ({
    leaveGame: () => {
        dispatch(leaveGame());
    },
});

export default connect(mapStateToProps, mapDispatchStateToProps)(LeaveGame);