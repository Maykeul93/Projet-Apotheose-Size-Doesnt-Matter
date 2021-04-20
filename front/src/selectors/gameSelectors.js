
// Convert the player answer into a percent to display progressBar
export const getPercentOfProgressBar = (answer, exactAnswer) => {
    const playerAnswer = Number(answer);

    if (!isNaN(playerAnswer)){
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