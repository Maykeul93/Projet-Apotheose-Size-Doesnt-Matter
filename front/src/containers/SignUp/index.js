import { connect } from 'react-redux';
import SignUp from 'components/SignUp';
import { submitRegistered } from 'actions/signUp';

const mapStateToProps = (state) => ({
  loading: state.signUp.loading,
  isRegistered : state.signUp.isRegistered,
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit: () => dispatch(submitRegistered())
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
