import { connect } from 'react-redux';
import Field from 'components/Field';
import {
  setSignUpInputValue,
} from 'actions/signUp';

const mapStateToProps = (state, ownProps) => ({
  value: state.signUp[ownProps.name],
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onChange: (value) => dispatch(setSignUpInputValue(ownProps.name, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Field);