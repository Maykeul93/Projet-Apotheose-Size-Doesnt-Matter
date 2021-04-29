import { connect } from 'react-redux';
import Home from 'components/Home';
import { setDisplayed } from 'actions/user';
import { setRegistered } from 'actions/signUp';

const mapStateToProps = (state) => ({
  isLogged: state.user.isLogged,
  isRegistered: state.signUp.isRegistered,
});

const mapDispatchToProps = (dispatch) => ({
  onDisplayChange: () => dispatch(setDisplayed()),
  setRegistered: (value) => dispatch(setRegistered(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
