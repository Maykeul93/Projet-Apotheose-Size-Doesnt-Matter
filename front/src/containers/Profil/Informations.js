import { connect } from 'react-redux';
import Informations from 'components/Profil/Informations';
import { setAvatarChange, submitProfil } from 'actions/profil';
import { deleteAccount } from 'actions/user';

const mapStateToProps = (state) => ({
  pseudo:state.user.pseudo,
  email:state.user.email,
  success: state.profil.success,
  error: state.profil.error,
  changeAvatar : state.profil.avatar
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit: () => dispatch(submitProfil()),
  deleteAccount: () => dispatch(deleteAccount()),
  setChangeAvatar: (value) => dispatch(setAvatarChange(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Informations);
