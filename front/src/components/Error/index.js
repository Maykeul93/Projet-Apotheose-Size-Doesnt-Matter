import React from 'react';
import './style.scss';
import toto from 'styles/images/404/serpent.png';

function Error() {
    return (
        
        
        <main className="main">
    	    <div className="main__image">
              <img src= {toto} className="image"/>
              <h2 className="error">Error 404</h2>
              <button className="button">retour accueil</button>
            </div> 
            
        </main> 
        
        
            
    );

}



export default Error;