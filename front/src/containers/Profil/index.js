import { connect } from 'react-redux';
import Profil from 'components/Profil';
import { requestHistory } from 'actions/profil';

const mapStateToProps = (state) => ({
  avatar: state.user.avatar
});

const mapDispatchToProps = (dispatch) => ({
  requestHistory: () => dispatch(requestHistory()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profil);
