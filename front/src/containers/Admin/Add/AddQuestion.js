import { connect } from 'react-redux';
import AddQuestion from 'components/Admin/Add/AddQuestion';

const mapStateToProps = (state) => ({
  tags: state.admin.tag
});

const mapDispatchToProps = () => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(AddQuestion);
