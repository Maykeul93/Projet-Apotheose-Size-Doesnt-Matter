import React from 'react';

import slide1 from './slide.jpg';

import './styles.scss';

const Home = () => (
    <div className="home">
        <p className="home__description">
            Bienvenue, Size Doesn't Matter est un jeu multijoueur en ligne.<br />
            Il s'agit d'un quizz où vous et vos amis auront à répondre a différentes question,<br />
            plus votre réponse est proche de la réponse éxact plus vous gagnez de point.<br />
            Vous etes prêt? <br /> 
            Inscrivez vous, invitez vos amis et jouez !
        </p>
        <img className="home__slide" src={slide1} alt="slide1" />
        <p className="home__carousel">ici choix des photos</p>
        <button className="home__play-button" type="button"> Jouer</button>
    </div>
);

export default Home;
