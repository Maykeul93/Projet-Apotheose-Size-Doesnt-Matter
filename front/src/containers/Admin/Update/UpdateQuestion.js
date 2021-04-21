import { connect } from 'react-redux';
import UpdateQuestion from 'components/Admin/Update/UpdateQuestion';
import { setUpdateQuestionSelectQuestionValue, setUpdateQuestionSelectTagValue, updateQuestion } from 'actions/admin';

const mapStateToProps = (state) => ({
    questions: state.admin.questions,
    tags: state.admin.tags,
    questionId: state.admin.updateQuestion.questionId,
    tagId: state.admin.updateQuestion.tagId,
});

const mapDispatchToProps = (dispatch) => ({
  onSelectQuestionChange: (value) =>  dispatch(setUpdateQuestionSelectQuestionValue(value)),
  onSelectTagChange: (value) =>  dispatch(setUpdateQuestionSelectTagValue(value)),
  onSubmit: () =>  dispatch(updateQuestion())
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateQuestion);
