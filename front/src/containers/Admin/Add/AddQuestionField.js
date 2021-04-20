import { connect } from 'react-redux';
import Field from 'components/Field';
import { setAddQuestionInputValue } from 'actions/admin';

const mapStateToProps = (state, ownProps) => ({
    value: state.admin.addQuestion[ownProps.name],
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onChange: (value) =>  dispatch(setAddQuestionInputValue(ownProps.name, value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Field);
