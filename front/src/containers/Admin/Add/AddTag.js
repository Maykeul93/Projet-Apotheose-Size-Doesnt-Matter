import { connect } from 'react-redux';
import AddTag from 'components/Admin/Add/AddTag';
import { addTag } from 'actions/admin';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  onSubmit: () =>  dispatch(addTag())
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTag);
