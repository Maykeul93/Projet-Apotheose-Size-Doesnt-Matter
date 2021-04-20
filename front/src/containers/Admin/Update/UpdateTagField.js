import { connect } from 'react-redux';
import Field from 'components/Field';
import { setUpdateTagInputValue } from 'actions/admin';

const mapStateToProps = (state, ownProps) => ({
    value: state.admin.updateTag[ownProps.name],
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onChange: (value) =>  dispatch(setUpdateTagInputValue(ownProps.name, value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Field);
