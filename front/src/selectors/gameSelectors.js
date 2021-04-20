
// Convert the player answer into a percent to display progressBar
export const getPercentOfProgressBar = (answer, exactAnswer) => {
    const playerAnswer = Number(answer);
    console.log('exactAnswer', exactAnswer);
    if (!isNaN(playerAnswer)){
        console.log('playerAnswer', playerAnswer);
        const percent = (playerAnswer * 100) / exactAnswer;
        console.log('je calcule les % de la progress bar ', percent, ' %');
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