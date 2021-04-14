import { connect } from 'react-redux';
import Connexion from 'components/Header/Connexion';
import { setEmailInputValue, setPasswordInputValue, submitLogin } from 'actions/user';

const mapStateToProps = (state) => ({
  emailValue: state.user.email,
  passwordValue: state.user.password,
});

const mapDispatchToProps = (dispatch) => ({
  onEmailInputChange : (value) => dispatch(setEmailInputValue(value)),
  onPasswordInputChange : (value) => dispatch(setPasswordInputValue(value)),
  onLogin: () => dispatch(submitLogin())
});

export default connect(mapStateToProps, mapDispatchToProps)(Connexion);
