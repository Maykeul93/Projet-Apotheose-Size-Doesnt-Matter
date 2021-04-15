import { connect } from 'react-redux';
import Home from 'components/Home';
import { setDisplayed } from 'actions/user';

const mapStateToProps = (state) => ({
  isLogged: state.user.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  onDisplayChange: () => dispatch(setDisplayed())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
