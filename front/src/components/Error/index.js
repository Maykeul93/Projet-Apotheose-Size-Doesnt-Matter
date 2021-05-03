import { useHistory } from 'react-router-dom';
import './style.scss';
import toto from 'styles/images/404/serpent.png';

function Error() {
    let history = useHistory();
    const handleClick = () => {
        history.push('/');
    };
    return (
        <main className="main">
    	    <div className="main__image">
              <img src= {toto} className="image" alt="404Error"/>
              <h2 className="error">Error 404</h2>
              <button
                className="button"
                onClick={handleClick}
              >
                  retour accueil
              </button>
            </div> 
            
        </main> 
        
        
            
    );

}



export default Error;