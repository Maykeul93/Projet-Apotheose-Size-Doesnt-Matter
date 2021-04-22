import { connect } from 'react-redux';
import Admin from 'components/Admin';
import { setAdmin } from 'actions/admin';

const mapStateToProps = (state) => ({
  questions: state.admin.questions
});

const mapDispatchToProps = (dispatch) => ({
  setAdmin: () => dispatch(setAdmin())
});

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
