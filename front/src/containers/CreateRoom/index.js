import { connect } from 'react-redux';

import CreateRoom from 'components/CreateRoom';

const mapStateToProps = (state) => ({
    room: state.room.room,
});

const mapDispatchStateToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchStateToProps)(CreateRoom);
