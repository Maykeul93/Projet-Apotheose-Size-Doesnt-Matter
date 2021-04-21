import { setOption } from 'actions/admin';
import { connect } from 'react-redux';
import User from 'components/Admin/User';

const mapStateToProps = (state) => ({
  
});

const mapDispatchToProps = (dispatch) => ({
  setOption : (value) => dispatch(setOption(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(User);
