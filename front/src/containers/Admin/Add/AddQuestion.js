import { connect } from 'react-redux';
import AddQuestion from 'components/Admin/Add/AddQuestion';
import { addQuestion, setAddQuestionSelectValue } from 'actions/admin';

const mapStateToProps = (state) => ({
  tags: state.admin.tags,
  tagId: state.admin.addQuestion.tagId,
});

const mapDispatchToProps = (dispatch) => ({
  onSelectChange: (value) =>  dispatch(setAddQuestionSelectValue(value)),
  onSubmit: () =>  dispatch(addQuestion())
});

export default connect(mapStateToProps, mapDispatchToProps)(AddQuestion);
