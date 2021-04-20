import { connect } from 'react-redux';
import UpdateTag from 'components/Admin/Update/UpdateTag';
import { setUpdateTagSelectTagValue, updateTag } from 'actions/admin';

const mapStateToProps = (state) => ({
    tags: state.admin.tags,
    tagId: state.admin.updateTag.tagId,
});

const mapDispatchToProps = (dispatch) => ({
  onSelectTagChange: (value) =>  dispatch(setUpdateTagSelectTagValue(value)),
  onSubmit: () =>  dispatch(updateTag())
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateTag);
