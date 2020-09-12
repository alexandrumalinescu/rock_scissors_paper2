var getRandomInt = function (max) {
  return Math.floor(Math.random() * max);
};
var userScore = 0;
var computerScore = 0;

var playGame = function (event)
 {
  var actions = ["Scissors", "Paper", "Rock"];
  var computer = actions[getRandomInt(3)];
  
  var user = document.querySelector("#user-choice").value;
  var result = "";

  if (computer === user) {
    result = "It's a Tie";
  } else if (
    (computer === "Paper" && user === "Rock") ||
    (computer === "Rock" && user === "Scissors") ||
    (computer === "Scissors" && user === "Paper")
  ) {
    result = "Computer wins";
    computerScore += 1;
    if (computerScore === 5)
    {alert("computer won")
    };
  } else {
    result = "User wins";
    userScore += 1;
    if (userScore === 5 )
    {alert("Yeeei you won, you reached 5 points")
    };
  }

  document.getElementById("player-score").innerText = userScore;
  document.getElementById("computer-score").innerText = computerScore;
  document.getElementById("computer-choice").innerText = computer;
  document.querySelector("#result").innerText = result;
  document.querySelector("div").style.display = "block";

};

var resetGame = function (event){
    userScore = 0;
    computerScore = 0 ;
    document.querySelector("div").style.display = "none";
}

var check = function(event){
  var actions = ["Scissors", "Paper", "Rock"];
  var user = document.querySelector("#user-choice").value;
  user = user[0].toUpperCase() + user.substring(1).toLowerCase(); 
  if (actions.includes(user)) {
     return playGame();
    }
    else {
      console.log(user);
      return alert ('Type: Rock, Scissores or Paper!');
    }
}

var playBtn = document.getElementById("play");
playBtn.addEventListener("click", check);
var resetBtn = document.getElementById("reset");
resetBtn.addEventListener("click", resetGame);

console.log(playBtn);

