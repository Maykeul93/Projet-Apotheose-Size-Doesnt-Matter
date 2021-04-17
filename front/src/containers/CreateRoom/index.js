import { connect } from 'react-redux';

import CreateRoom from 'components/CreateRoom';

const mapStateToProps = (state) => ({
    room: state.room.room,
    user: {
        pseudo: state.user.pseudo,
        id: state.user.id,
    }
});

const mapDispatchStateToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchStateToProps)(CreateRoom);
