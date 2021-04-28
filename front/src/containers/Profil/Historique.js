import { connect } from 'react-redux';
import Historique from 'components/Profil/Historique';

const mapStateToProps = (state) => ({
    numberOfGame: state.user.history.numberOfGame,
    lastGamePlayed: state.user.history.lastGamePlayed,
    firstPlace: state.user.history.firstPlace,
    secondPlace: state.user.history.secondPlace,
    thirdPlace: state.user.history.thirdPlace,
    exactAnswer: state.user.history.exactAnswer
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Historique);
