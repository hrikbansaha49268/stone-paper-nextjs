function winLogic(x, y) {
    if (x == 'Rock' && y == 'Scissors') {
        setPlayerPoints(playerPoints + 1);
    } else if (x == 'Scissors' && y == 'Rock') {
        setComPoints(comPoints + 1);
    } else if (x == 'Paper' && y == 'Rock') {
        setPlayerPoints(playerPoints + 1);
    } else if (x == 'Rock' && y == 'Paper') {
        setComPoints(comPoints + 1);
    } else if (x == 'Paper' && y == 'Scissors') {
        setComPoints(comPoints + 1);
    } else if (x == 'Scissors' && y == 'Paper') {
        setPlayerPoints(playerPoints + 1);
    } else if (x && y == 'Paper' || x && y == 'Rock' || x && y == 'Paper') {
        setComPoints(comPoints);
        setPlayerPoints(playerPoints);
    }
}