import { setOption } from 'actions/admin';
import { connect } from 'react-redux';
import Question from 'components/Admin/Question';

const mapStateToProps = (state) => ({
  
});

const mapDispatchToProps = (dispatch) => ({
  setOption : (value) => dispatch(setOption(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Question);
