//Import images from carousel
import { Link } from 'react-router-dom';
import Slides from './Slides';

// Import styles 
import './styles.scss';

//Create Home component
const Home = ({isLogged, onDisplayChange, isRegistered}) => {
    return(
        <main className="home page__main">
            {
                isRegistered && (
                    <p>Inscription Réussi</p>
                )
            }
            <h2 className="home__title" >Bienvenue !</h2>
            <p className="home__description">
                <span>Size Doesn't Matter</span> est un jeu multijoueur en ligne.<br />
                <br></br>
                Il s'agit d'un quizz ou vous et vos amis auront a repondre a differentes question,
                plus votre reponse est proche de la reponse exact plus vous gagnez de point.<br />
                <br></br>
                <br></br>
                Vous etes pret? <br /> 
                <br></br>
                Inscrivez vous, invitez vos amis et <span>Jouez</span> !
            </p>
            <Slides />
            {
                isLogged ? (
                <Link to='/page/createRoom'>
                    <button 
                        className="home__play-button" 
                        type="button"
                    > Jouer</button>
                </Link>
                ) : (
                    <button 
                        className="home__play-button" 
                        type="button"
                        onClick={onDisplayChange}
                    > Jouer</button>
                )
            }
        </main>
    )
};

//Export Home component
export default Home;
