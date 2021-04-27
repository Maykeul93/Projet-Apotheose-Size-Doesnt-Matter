import { connect } from 'react-redux';

import CreateRoom from 'components/CreateRoom';
import { socketConnection } from 'actions/socket';

const mapStateToProps = (state) => ({
    room: state.room.room,
    socket: state.user.socket,
});

const mapDispatchStateToProps = (dispatch) => ({
    setSocket: () => {
        dispatch(socketConnection());
    },
});

export default connect(mapStateToProps, mapDispatchStateToProps)(CreateRoom);
