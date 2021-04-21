
// Convert the player answer into a percent to display progressBar
export const getPercentOfProgressBar = (answer, exactAnswer) => {
    
    if (!isNaN(answer)){
        const percent = (answer * 100) / exactAnswer;

        return {
            height: percent.toFixed(2) + '%',
        };

    }
    else {
        return {
            height: '0%',
        };
    }
};

export const placeUserintoTheMiddleOfOtherPlayers = (player, otherPlayers) => {
    // Display user in the middle

    // Get the length of the array to insert a new element in the middle
    const middleOfPlayers = Math.round(otherPlayers.length / 2);

    // Insert the user into the other players in the middle
    const displayedPlayers = [...otherPlayers];
    displayedPlayers.splice(middleOfPlayers, 0, player);

    return displayedPlayers;
}

export const attributePointsAtTheEndOfARound = (player, otherPlayers, exactAnswer, score) => {
    const players = [...otherPlayers, player].map((player) => ({
        ...player,
        answer: Number(player.answer),
    }));
    
    const sortedPlayers = players.sort((a, b) => {
        return a.answer > b.answer;
    });

    // trier le tableau dans l'ordre croissant
    // sort() + focntion de comparaison
    // push tout ça au state
    // return le tableau des scores.
}