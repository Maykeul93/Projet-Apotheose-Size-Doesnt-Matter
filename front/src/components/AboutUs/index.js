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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum ex    sed    mi auctor, eget maximus neque lacinia. Phasellus cursus maximus odio,    nec  dapibus metus accumsan ac. Cras a dui cursus ex mollis vulputate. Donec    ac dui   vel lectus imperdiet sagittis sed ut massa. Nam nec erat quis nulla    aliquet   finibus. Proin at urna commodo, euismod nisl sit amet, maximus    est. Suspendisse   vel maximus ex. Cras accumsan dignissim tempus.
                </p>
                <div className="aboutUs__pictures imgright">
                    <img src={Nicolas} />
                </div>
                <h2 className="aboutUs__name right">Nicolas M</h2>
                <h3 className="aboutUs__type right">Lead Dev Front</h3>
                <p className="aboutUs__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum ex sed    mi auctor, eget maximus neque lacinia. Phasellus cursus maximus odio, nec  dapibus metus accumsan ac. Cras a dui cursus ex mollis vulputate. Donec ac dui   vel lectus imperdiet sagittis sed ut massa. Nam nec erat quis nulla aliquet   finibus. Proin at urna commodo, euismod nisl sit amet, maximus est. Suspendisse   vel maximus ex. Cras accumsan dignissim tempus.
                </p>
                <div className="aboutUs__pictures">
                    <img src={Michael} />
                </div>
                <h2 className="aboutUs__name">Michaêl M</h2>
                <h3 className="aboutUs__type">Scrum Master & Dev Front</h3>
                <p className="aboutUs__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum ex sed    mi auctor, eget maximus neque lacinia. Phasellus cursus maximus odio, nec  dapibus metus accumsan ac. Cras a dui cursus ex mollis vulputate. Donec ac dui   vel lectus imperdiet sagittis sed ut massa. Nam nec erat quis nulla aliquet   finibus. Proin at urna commodo, euismod nisl sit amet, maximus est. Suspendisse   vel maximus ex. Cras accumsan dignissim tempus.
                </p>
                <div className="aboutUs__pictures">
                    <img src={Alexandre} />
                </div>
                <h2 className="aboutUs__name right">Alexandre B</h2>
                <h3 className="aboutUs__type right">Git Master & Dev Back</h3>
                <p className="aboutUs__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum ex sed    mi auctor, eget maximus neque lacinia. Phasellus cursus maximus odio, nec  dapibus metus accumsan ac. Cras a dui cursus ex mollis vulputate. Donec ac dui   vel lectus imperdiet sagittis sed ut massa. Nam nec erat quis nulla aliquet   finibus. Proin at urna commodo, euismod nisl sit amet, maximus est. Suspendisse   vel maximus ex. Cras accumsan dignissim tempus.
                </p>
            </div>
            
        </main>
    );
}

export default AboutUs;