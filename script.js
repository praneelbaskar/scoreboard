

javascript
let runs = 156;
let wickets = 4;

let balls = 2;
let currentBallResults = ["1", "4", "W", "2", "6", "0"];

function updateScore() {
    document.getElementById("score").textContent =
        `${runs}/${wickets}`;

    let completedOvers = Math.floor(balls / 6);
    let remainingBalls = balls % 6;

    document.getElementById("overs").textContent =
        `${completedOvers}.${remainingBalls}`;
}

function addRun(value) {
    runs += value;
    balls++;

    currentBallResults.push(value);

    if (currentBallResults.length > 6) {
        currentBallResults.shift();
    }

    updateBalls();
    updateScore();
}

function addWicket() {
    if (wickets < 10) {
        wickets++;
        balls++;

        currentBallResults.push("W");

        if (currentBallResults.length > 6) {
            currentBallResults.shift();
        }

        updateBalls();
        updateScore();
    }
}

function updateBalls() {
    const ballsContainer = document.getElementById("balls");

    ballsContainer.innerHTML = "";

    currentBallResults.forEach(result => {
        const ball = document.createElement("span");

        ball.textContent = result;

        if (result === "W") {
            ball.style.background = "#e34b4b";
        } 
        else if (result === "4" || result === "6") {
            ball.style.background = "#16a85e";
        }

        ballsContainer.appendChild(ball);
    });
}
