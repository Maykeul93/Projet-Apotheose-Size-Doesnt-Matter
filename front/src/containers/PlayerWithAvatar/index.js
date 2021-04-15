import { connect } from 'react-redux';
import PlayerWithAvatar from 'components/PlayerWithAvatar';

const mapStateToProps = (state) => ({
    user: {
        pseudo: state.user.pseudo,
        avatar: 'avatar.png',
    }
});

const mapDispatchStateToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchStateToProps)(PlayerWithAvatar);