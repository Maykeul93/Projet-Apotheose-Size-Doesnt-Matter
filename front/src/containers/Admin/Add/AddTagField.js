import { connect } from 'react-redux';
import Field from 'components/Field';
import { setAddTagInputValue } from 'actions/admin';

const mapStateToProps = (state, ownProps) => ({
    value: state.admin.addTag[ownProps.name],
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onChange: (value) =>  dispatch(setAddTagInputValue(ownProps.name, value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Field);
