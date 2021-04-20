import { connect } from 'react-redux';
import DeleteQuestion from 'components/Admin/Delete/DeleteQuestion';
import { setDeleteQuestionSelectQuestionValue, deleteQuestion } from 'actions/admin';

const mapStateToProps = (state) => ({
  questions: state.admin.questions,
  questionId: state.admin.deleteQuestion.questionId
});

const mapDispatchToProps = (dispatch) => ({
  onSelectChange: (value) =>  dispatch(setDeleteQuestionSelectQuestionValue(value)),
  onSubmit: () =>  dispatch(deleteQuestion())
});

export default connect(mapStateToProps, mapDispatchToProps)(DeleteQuestion);
