import { connect } from 'react-redux';
import Connexion from 'components/Header/Connexion';
import { 
  setEmailInputValue, 
  setPasswordInputValue, 
  submitLogin, 
  setDisplayed 
} from 'actions/user';

const mapStateToProps = (state) => ({
  emailValue: state.user.email,
  passwordValue: state.user.password,
  isDisplayed: state.user.isDisplayed
});

const mapDispatchToProps = (dispatch) => ({
  onEmailInputChange : (value) => dispatch(setEmailInputValue(value)),
  onPasswordInputChange : (value) => dispatch(setPasswordInputValue(value)),
  onLogin: () => {
    dispatch(submitLogin())
    dispatch(setPasswordInputValue(''))
    dispatch(setEmailInputValue(''))
  },
  onDisplayChange: () => dispatch(setDisplayed())
});

export default connect(mapStateToProps, mapDispatchToProps)(Connexion);
