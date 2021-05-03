import React from 'react';
import './style.scss';
import Arnaud from '../../styles/images/aboutUs/Arnaud.png'
import Nicolas from '../../styles/images/aboutUs/Nicolas.png'
import Michael from '../../styles/images/aboutUs/Michael.png'
import Alexandre from '../../styles/images/aboutUs/Alexandre.png'

function AboutUs() {
    return (
        <main className="page__main">
            <h1 className="title">Qui sommes-nous ?</h1>
            <div className="aboutUs">
                <div className="aboutUs__pictures">
                    <img src={Arnaud} />
                </div>
                <h2 className="aboutUs__name">Arnaud G</h2>
                <h3 className="aboutUs__type">Product Owner & Lead Dev Back</h3>
                <p className="aboutUs__description">
                “Aranud” ou “JCV” pour les intimes (longue histoire) . Créateur de Size Doesn’t Matter, il fallait avoir une idée pour le projet de fin d’année d’O’clock, à ce moment nous avions travaillé en classe sur un système de quiz, j’ai donc eu l’idée de reprendre ce principe puis de le modifier avec des questions d’ordre de grandeur pour le côté fun, challengeant et car cela fait toujours des petites infos à ressortir à ces potes (ou pas).
                </p>
                <div className="aboutUs__pictures imgright">
                    <img src={Nicolas} />
                </div>
                <h2 className="aboutUs__name right">Nicolas M</h2>
                <h3 className="aboutUs__type right">Lead Dev Front</h3>
                <p className="aboutUs__description">
                Certains le crient haut et fort dans les cours de récré, d'autres le murmurent lors de conversations en petit comité avec leurs amis proches. On en parle en repas de famille, à l'école, à la faculté ou bien même en maison de retraite. On se charrie avec, ou on se réconforte. Pour certains, la taille compte. Pour d'autres, elle n'a aucune importance. Sujet tabou, sensible ou usuel. Sujet varié qui cible tout un tas de choses, que ce soit au premier degré ou second, tiers voir plus! On l'adore, on en est fier!
                On vous le promet, avec 'Size doesn't matter', vous pourrez toujours continuer à comparer entre vous tous les sujets de comparaison possibles en cour de récré. Mais maintenant, ce qui va compter en plus, c'est la taille ... de votre réponse! :)
                </p>
                <div className="aboutUs__pictures">
                    <img src={Michael} />
                </div>
                <h2 className="aboutUs__name">Michaêl M</h2>
                <h3 className="aboutUs__type">Scrum Master & Dev Front</h3>
                <p className="aboutUs__description">
                Hey! Moi c’est Michael, j’ai été très emballée par le projet Size Doesn’t Matter, qui m’a permis d’appliquer mes connaissances acquises lors de ma formation à O’clock.
                J'espère que vous passerez de bons moments sur notre jeu.
                </p>
                <div className="aboutUs__pictures">
                    <img src={Alexandre} />
                </div>
                <h2 className="aboutUs__name right">Alexandre B</h2>
                <h3 className="aboutUs__type right">Git Master & Dev Back</h3>
                <p className="aboutUs__description">
                Moi c’est Alexandre aka “Bob” . J’ai rejoint l’équipe car le projet était ce qu’il me correspondait le mieux. Je me suis occupé de développer le côté back avec JCV , j'ai également été le charmeur de git pour l'équipe et j'ai réussi à mettre sous hypnose les conflits afin de le rendre plus docile pour tous.
                </p>
            </div>
            
        </main>
    );
}

export default AboutUs;