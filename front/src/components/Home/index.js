//Import images from carousel
import { Link } from 'react-router-dom';
import Slides from './Slides';
import { ToastContainer, toast } from 'react-toastify';
// Import styles 
import './styles.scss';
import { useEffect } from 'react';

//Create Home component
const Home = ({isLogged, onDisplayChange, isRegistered, setRegistered}) => {
    console.log(isRegistered)
    useEffect(()=> {
        if(isRegistered){
            console.log("go")
            toast.success("Inscription réussi")
            setRegistered(false)
        }
    })
    const handleConnect = () => {
        onDisplayChange();
        toast.error("Veuillez vous connectez")
    }
    return(
        <main className="home page__main">
            <h2 className="home__title" >Bienvenue !</h2>
            <div className="home__content">
                <p className="home__description">
                    <span>Size Doesn't Matter</span> est un jeu multijoueur en ligne.<br />
                    <br></br>
                    Il s'agit d'un quiz où vous et vos amis auront à répondre à différentes questions,
                    plus votre réponse est proche de la réponse exacte plus vous gagnez de points.<br />
                    <br></br>
                    Vous êtes prêt? <br /> 
                    <br></br>
                    Inscrivez-vous, invitez vos amis et <span>Jouez</span> ! <br />
                    <br></br>
                    <span className="indication"> * Les résultats aux questions ne sont en aucun cas des résultats affirmatifs et vérifiés scientifiquement</span>
                </p>
                <Slides />
                <ToastContainer position="top-center"/>
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
                        onClick={handleConnect}
                    > Jouer</button>
                )
            }
        </main>
    )
};

//Export Home component
export default Home;
