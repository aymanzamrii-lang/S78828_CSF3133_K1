// Global Variables
let wins = 0;
let losses = 0;
let draws = 0;
let round = 0;
let results = [];
let gameStarted = false;

// Start Game Function
function startGame() {

    let name = document.getElementById("playerName").value.trim();

    if (name === "") {
        alert("Please enter your name.");
        return;
    }

    gameStarted = true;

    document.getElementById("welcome").innerHTML =
        "Welcome, " + name + "!";

    document.getElementById("startTime").innerHTML =
        "Start Time: " + new Date();

}

// Get Random Computer Choice
function getComputerChoice() {

    let choices = ["rock", "paper", "scissors"];

    let randomIndex = Math.floor(Math.random() * 3);

    return choices[randomIndex];

}

// Play Game Function
function playRound(playerChoice) {

    if (!gameStarted) {
        alert("Click Start Game first.");
        return;
    }

    let computerChoice = getComputerChoice();

    let result;

    round++;

    if (playerChoice === computerChoice) {

        result = "Draw";
        draws++;

    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "scissors" && computerChoice === "paper") ||
        (playerChoice === "paper" && computerChoice === "rock")
    ) {

        result = "Win";
        wins++;

    } else {

        result = "Lose";
        losses++;

    }

    // Change Player Image
    document.getElementById("playerImg").src =
        playerChoice + ".png";

    // Change Computer Image
    document.getElementById("computerImg").src =
        computerChoice + ".png";

    // Display Result
    document.getElementById("result").innerHTML =
        "You: " + playerChoice +
        " | Computer: " + computerChoice +
        " | Result: " + result;

    // Change Result Colour
    if (result === "Win") {
        document.getElementById("result").style.color = "green";
    } else if (result === "Lose") {
        document.getElementById("result").style.color = "red";
    } else {
        document.getElementById("result").style.color = "grey";
    }

    // Update Scoreboard
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("draws").innerHTML = draws;

    // Store Result
    results.push(result);

    // Add History
    document.getElementById("history").innerHTML +=
        "<tr>" +
        "<td>" + round + "</td>" +
        "<td>" + playerChoice + "</td>" +
        "<td>" + computerChoice + "</td>" +
        "<td>" + result + "</td>" +
        "</tr>";

}

// Show Summary Function
function showSummary() {

    let totalRounds = results.length;
    let totalWins = 0;

    for (let i = 0; i < results.length; i++) {

        if (results[i] === "Win") {
            totalWins++;
        }

    }

    let percentage = 0;

    if (totalRounds > 0) {
        percentage = Math.round((totalWins / totalRounds) * 100);
    }

    document.getElementById("summary").innerHTML =
        "You played " + totalRounds +
        " rounds and won " + percentage + "%.";

}

// Reset Game Function
function resetGame() {

    wins = 0;
    losses = 0;
    draws = 0;
    round = 0;

    results = [];

    gameStarted = false;

    document.getElementById("wins").innerHTML = 0;
    document.getElementById("losses").innerHTML = 0;
    document.getElementById("draws").innerHTML = 0;

    document.getElementById("result").innerHTML = "";
    document.getElementById("summary").innerHTML = "";
    document.getElementById("welcome").innerHTML = "";
    document.getElementById("startTime").innerHTML = "";

    document.getElementById("playerName").value = "";

    document.getElementById("playerImg").src = "rock.png";
    document.getElementById("computerImg").src = "rock.png";

    document.getElementById("history").innerHTML =
        "<tr>" +
        "<th>Round</th>" +
        "<th>You</th>" +
        "<th>Computer</th>" +
        "<th>Result</th>" +
        "</tr>";

}