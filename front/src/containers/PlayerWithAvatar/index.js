import { connect } from 'react-redux';
import PlayerWithAvatar from 'components/PlayerWithAvatar';
import {
    setUserAvatar,
} from 'actions/user';

const mapStateToProps = (state) => ({
    user: {
        pseudo: state.user.pseudo,
        id: state.user.id,
        avatar: state.user.avatar,
    }
});

const mapDispatchStateToProps = (dispatch) => ({
    setAvatar: (avatar) => {
        dispatch(setUserAvatar(avatar));
    },
});

export default connect(mapStateToProps, mapDispatchStateToProps)(PlayerWithAvatar);