import { connect } from 'react-redux';
import PlayerDisplay from 'components/Game/PlayerDisplay';

const mapStateToProps = (state) => ({
    userId: state.user.id,
});

const mapDispatchStateToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchStateToProps)(PlayerDisplay);