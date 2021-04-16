import { connect } from 'react-redux';
import Profil from 'components/Profil';

const mapStateToProps = (state) => ({
  pseudo: state.user.pseudo,
  email: state.user.email,
});

const mapDispatchToProps = () => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(Profil);
