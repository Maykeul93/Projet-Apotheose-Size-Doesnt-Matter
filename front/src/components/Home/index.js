//Import images from carousel
import { Link } from 'react-router-dom';
import slide from './slide.jpg';

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
            <p className="home__description">
                Bienvenue, Size Doesn't Matter est un jeu multijoueur en ligne.<br />
                Il s'agit d'un quizz où vous et vos amis auront à répondre a différentes question,<br />
                plus votre réponse est proche de la réponse éxact plus vous gagnez de point.<br />
                Vous etes prêt? <br /> 
                Inscrivez vous, invitez vos amis et jouez !
            </p>
            <div className="home__carousel">
                <img className="home__carousel-image" src={slide} alt="slide1" />
                <p className="home__carousel-select">ici choix des photos</p>
            </div>
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
