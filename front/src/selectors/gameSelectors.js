
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

export const selectClosestPlayersAtTheEndOfARound = (player, otherPlayers, exactAnswer) => {
    const players = [...otherPlayers, player].map((player) => ({
        ...player,
        answer: Number(player.answer),
    }));

    let count = 0;
    // Stock the 3 players who are the closest to the exact answer
    const winners = [];
    if (players.length > 1) {
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
        return winners;
    }
    else {
        return [...winners, player];
    }
}

export const setScoreAtTheEndOfARound = (winners, oldScore, exactAnswer) => {
    const score = oldScore.map((score) => ({ ...score }));
    const numberMaxOfPoints = 15;

    winners.forEach((element, index) => {
        // Find the index of the player into the score array
        const scoreIndex = score.findIndex((item) => element.id === item.id)
        const points = Math.round(numberMaxOfPoints / (index + 1));
        // Attributes points in term of player's position
        score[scoreIndex].score+= points;
        console.log('points', points);
        // Gives to the player who guess the exact answer a bonus of points + increments the counter
        if (Number(element.answer) === exactAnswer) {
            console.log('je veux attribuer le bonus')
            score[scoreIndex].score += (numberMaxOfPoints * 2);
            score[scoreIndex].exactAnswer_count += 1;
        }
        });
    
    return score;
}

export const transformExactAnswerIntoExploitableAnswer = (answer) => {
    if (answer && answer.length > 0) {
        // remove all the spaces into the string answer & transform the string into an array
        const removeSpaces = answer.split(' ');

        // Concate the array without spaces
        const rebuildIntoStr = removeSpaces.join('');

        // Convert the string into a number
        const numericAnswer = Number(rebuildIntoStr);
        if (!isNaN(numericAnswer)){
            return numericAnswer;
        }
        else {
            return 0;
        }
    }
    else {
        console.log(answer);
    }
}

export const findIndexOfUserAvatar = (user, avatars) => {
    const index = avatars.findIndex((avatar) => avatar.name === user.avatar);
    return (index !== -1 ? index : 0);
}