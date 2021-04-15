function Rules() {
    return (
        <div className="rules">
            <h2 className="rules__h2">Règles du jeu:</h2>
            <ul className="rules__list">
                <li className="rules__item">Le but du jeu est de se rapprocher au plus de la réponse réelle de la question.</li>
                <li className="rules__item">Plus vous êtes proche, plus vous marquez de points!</li>
                <li className="rules__item">Si vous trouvez la réponse exacte, vous gagnerez un bonus de points!</li>
            </ul>
            <p className="rules__footer">Amusez vous bien !!! :D</p>
        </div>
    );
}

export default Rules;