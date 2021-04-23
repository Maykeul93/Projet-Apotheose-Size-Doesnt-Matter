import { connect } from 'react-redux';
import Chat from 'src/components/Chat';

import { chatSendMessage } from 'actions/game';

const mapStateToProps = (state) => ({
    messages: state.game.chatMessages,
    userId: state.user.id,
});

const mapDispatchStateToProps = (dispatch) => ({
    chatSendMessage: () => {

    },
});

export default connect(mapStateToProps, mapDispatchStateToProps)(Chat);