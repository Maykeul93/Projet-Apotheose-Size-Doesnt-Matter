import { connect } from 'react-redux';
import Field from 'components/Field';
import {
  setProfilInputValue,
} from 'actions/profil';

const mapStateToProps = (state, ownProps) => ({
  value: state.profil[ownProps.name],
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onChange: (value) => dispatch(setProfilInputValue(ownProps.name, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Field);