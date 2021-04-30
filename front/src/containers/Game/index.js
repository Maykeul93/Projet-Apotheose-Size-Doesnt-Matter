import { connect } from 'react-redux';
import Game from 'components/Game';

const mapStateToProps = (state) => ({
    isOver: state.game.isOver,
    isLaunch: state.room.isLaunch,
    messages: state.game.chatMessages,
});

const mapDispatchStateToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchStateToProps)(Game);