import { connect } from 'react-redux';
import Form from 'components/Admin/Form';

const mapStateToProps = (state) => ({
  option: state.admin.option
});

const mapDispatchToProps = () => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);