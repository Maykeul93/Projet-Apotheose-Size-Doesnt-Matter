
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
    const newScore = [...score];
    const players = [player, ...otherPlayers].map((player) => ({
        ...player,
        answer: Number(player.answer),
    }));
    console.log(players);

    let count = 0;
    // Stock the 3 players who are the closest to the exact answer
    const winners = [];

    while (count < 2 || count < players.length) {
        // Math.abs return absolute value of the soustraction
        // Here, if a is closest than b of the exact Answer, return a. Otherwise return b
        const playerItem = players.reduce((a, b) => {
            return Math.abs(a.answer - exactAnswer) < Math.abs(b.answer - exactAnswer) ? a : b;
        });
        winners.push(playerItem);
        // Find the index of the closest player
        const indexPlayer = players.findIndex((item) => item.id === playerItem.id);
        // REmove the closest player of the array to avoid to select him again
        players.splice(indexPlayer, 1);
        count++;
    }

    winners.forEach((element, index) => {
        const numberMaxOfPoints = 15;
        // Find the index of the player into the score array
        const scoreIndex = newScore.findIndex((item) => element.id === item.id)

        // Attributes points in term of player's position
        newScore[scoreIndex].score+= Math.round(numberMaxOfPoints / (index + 1));

        // Gives to the player who guess the exact answer a bonus of points + increments the counter
        if (element.answer === exactAnswer) {
            newScore[scoreIndex].score += (numberMaxOfPoints * 2);
            newScore[scoreIndex].exactAnswer_count+=1;
        }
    });
    return newScore;
}