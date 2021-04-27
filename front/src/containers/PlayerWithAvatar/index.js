import { connect } from 'react-redux';
import PlayerWithAvatar from 'components/PlayerWithAvatar';
import {
    setUserAvatar,
} from 'actions/user';

import {
    sendAvatarToServ,
} from 'actions/game';

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
    sendAvatarToServ: (avatar) => {
        dispatch(sendAvatarToServ(avatar));
    },
});

export default connect(mapStateToProps, mapDispatchStateToProps)(PlayerWithAvatar);