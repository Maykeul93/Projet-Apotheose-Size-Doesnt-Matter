import { setOption } from 'actions/admin';
import { connect } from 'react-redux';
import Tag from 'components/Admin/Tag';

const mapStateToProps = (state) => ({
  
});

const mapDispatchToProps = (dispatch) => ({
  setOption : (value) => dispatch(setOption(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Tag);
