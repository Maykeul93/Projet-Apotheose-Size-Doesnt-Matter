import { connect } from 'react-redux';
import Profil from 'components/Profil';

const mapStateToProps = (state) => ({
  avatar: state.user.avatar
});

const mapDispatchToProps = () => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(Profil);
