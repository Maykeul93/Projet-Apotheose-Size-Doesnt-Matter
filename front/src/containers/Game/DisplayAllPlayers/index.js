import { connect } from 'react-redux';
import DisplayAllPlayers from 'components/Game/DisplayAllPlayers';

const mapStateToProps = (state) => ({
    player: {
        id: state.user.id,
        pseudo: state.user.pseudo,
        answer: state.game.userAnswerValidate
    },
    otherPlayers: state.game.players.map((player) => ({
        id: player.id,
        pseudo: player.pseudo,
    })),
});

const mapDispatchStateToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchStateToProps)(DisplayAllPlayers);