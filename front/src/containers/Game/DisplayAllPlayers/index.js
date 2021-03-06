import { connect } from 'react-redux';
import DisplayAllPlayers from 'components/Game/DisplayAllPlayers';

const mapStateToProps = (state) => ({
    player: {
        id: state.user.id,
        pseudo: state.user.pseudo,
        answer: state.game.userAnswerValidate,
        avatar: state.user.avatar,
    },
    otherPlayers: state.game.players,
    exactAnswer: state.game.exactAnswer,
});

const mapDispatchStateToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchStateToProps)(DisplayAllPlayers);