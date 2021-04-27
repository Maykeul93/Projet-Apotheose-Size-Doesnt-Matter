import { connect } from 'react-redux';
import Menu from 'components/Menu';

const mapStateToProps = (state) => ({
  role: state.user.role,
});

const mapDispatchToProps = () => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
