import { connect } from 'react-redux';
import Role from 'components/Admin/User/Ban';
import { banUser, setBanUserSelectValue } from 'actions/admin';

const mapStateToProps = (state) => ({
    users: state.admin.users,
    userId: state.admin.ban.userId,
});

const mapDispatchToProps = (dispatch) => ({
    onSelectChange: (value) => dispatch(setBanUserSelectValue(value)),
    onSubmit: () => dispatch(banUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(Role);
