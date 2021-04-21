import { connect } from 'react-redux';
import Role from 'components/Admin/User/Role';
import { setRoleSelectValue, changeRole } from 'actions/admin';

const mapStateToProps = (state) => ({
    users: state.admin.users,
    userId: state.admin.user.userId,
});

const mapDispatchToProps = (dispatch) => ({
    onSelectChange: (value) => dispatch(setRoleSelectValue(value)),
    onSubmit: () => dispatch(changeRole())
});

export default connect(mapStateToProps, mapDispatchToProps)(Role);
