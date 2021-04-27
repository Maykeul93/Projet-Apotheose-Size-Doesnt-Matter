import { connect } from 'react-redux';
import Admin from 'components/Admin';
import { setAdmin } from 'actions/admin';

const mapStateToProps = (state) => ({
  questions: state.admin.questions,
  role: state.user.role
});

const mapDispatchToProps = (dispatch) => ({
  setAdmin: () => dispatch(setAdmin())
});

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
