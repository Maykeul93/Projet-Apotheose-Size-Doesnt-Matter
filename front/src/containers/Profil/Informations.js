import { connect } from 'react-redux';
import Informations from 'components/Profil/Informations';
import { submitProfil } from 'actions/profil';

const mapStateToProps = (state) => ({
  pseudo:state.user.pseudo,
  email:state.user.email,
  success: state.profil.success,
  error: state.profil.error,
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit: () => dispatch(submitProfil())
});

export default connect(mapStateToProps, mapDispatchToProps)(Informations);
