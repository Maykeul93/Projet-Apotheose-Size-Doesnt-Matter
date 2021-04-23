import { connect } from 'react-redux';
import Chat from 'src/components/Chat';

import { chatSendMessage } from 'actions/game';

const mapStateToProps = (state) => ({
    messages: state.game.chatMessages,
});

const mapDispatchStateToProps = (dispatch) => ({
    chatSendMessage: () => {

    },
});

export default connect(mapStateToProps, mapDispatchStateToProps)(Chat);