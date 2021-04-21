import { connect } from 'react-redux';
import Field from 'components/Field';
import { setUpdateQuestionInputValue } from 'actions/admin';

const mapStateToProps = (state, ownProps) => ({
    value: state.admin.updateQuestion[ownProps.name],
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onChange: (value) =>  dispatch(setUpdateQuestionInputValue(ownProps.name, value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Field);
