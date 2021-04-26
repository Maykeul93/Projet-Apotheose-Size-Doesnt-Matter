import { connect } from 'react-redux';
import DeleteTag from 'components/Admin/Delete/DeleteTag';
import {deleteTag, setDeleteTagSelectTagValue} from 'actions/admin'
const mapStateToProps = (state) => ({
  tags: state.admin.tags,
  tagId: state.admin.deleteTag.tagId
});

const mapDispatchToProps = (dispatch) => ({
  onSelectChange: (value) =>  dispatch(setDeleteTagSelectTagValue(value)),
  onSubmit: () =>  dispatch(deleteTag())
});

export default connect(mapStateToProps, mapDispatchToProps)(DeleteTag);
