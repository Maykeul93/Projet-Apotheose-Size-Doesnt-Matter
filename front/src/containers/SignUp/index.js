import { connect } from 'react-redux';
import SignUp from 'components/SignUp';
import { submitRegistered } from 'actions/signUp';
import { setDisplayed } from 'actions/user';

const mapStateToProps = (state) => ({
  loading: state.signUp.loading,
  isRegistered : state.signUp.isRegistered,
  error: state.signUp.error
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit: () => dispatch(submitRegistered()),
  setConnexionDisplayed: (bool) => dispatch(setDisplayed(bool)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
