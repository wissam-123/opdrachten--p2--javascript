let gameStarted = false;
let startTime, endTime;

function startGame() {
    gameStarted = true;
    document.getElementById('goButton').style.display = 'none';
    document.getElementById('gameScreen').style.display = 'block';
    document.getElementById('gameScreen').classList.remove('green');
    
    setTimeout(() => {
        document.getElementById('gameScreen').classList.add('green');
        startTime = new Date();
    }, Math.random() * 10000);
}

function endGame() {
    if (gameStarted) {
        endTime = new Date();
        const reactionTime = endTime - startTime;
        document.getElementById('result').innerText = `Je reactietijd is ${reactionTime} milliseconden`;
        document.getElementById('goButton').style.display = 'block';
        document.getElementById('gameScreen').style.display = 'none';
        gameStarted = false;
    }
}
