var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    troika = JSON.parse(this.responseText);
  }
};
xmlhttp.open("GET", "/_pages/troika.json", true);
xmlhttp.send();

function generate() {

  document.getElementById("charCard").style = "";
  document.getElementById("turnCard").style = "display:none";

}

function showTracker() {
  document.getElementById("turnCard").style = "";
  document.getElementById("charCard").style = "display:none";

  allColors = ["Red", "Green", "Blue", "Purple", "Yellow", "Silver", "Gold", "Orange", "Fuchsia", "Lime", "Olive", "Teal", "Maroon", "Navy", "Indigo", "Tomato", "Coral", "Tan", "Honey", "Brown"];

  allTokens = [];
  turnNumber = 0;
  degrees = 0;
  roundEnd = true;
  turnText = "";

  turns('round');

}

function turns(turnAction) {

  switch (turnAction) {
    case ("round"):

      var numPCs = document.getElementById("turnPC").value;
      var numHenchmen = document.getElementById("turnHench").value;
      var numEnemy = document.getElementById("turnEnemy").value;
      roundEnd = false;

      allTokens = [];

      var showColors = [];

      for (var i = 0; i < numPCs; i++) {
        showColors.push(allColors[i]);
        /*Add twice for each player*/
        allTokens.push(allColors[i]);
        allTokens.push(allColors[i]);
      }

      for (var i = 0; i < numHenchmen; i++) {
        allTokens.push("Henchmen");
      }

      for (var i = 0; i < numEnemy; i++) {
        allTokens.push("Enemy");
      }

      allTokens.push("End Round");

      colorText = "<p><strong>Assign each Player Character one of the following colors:</strong><br>" + showColors.join(", ") + "</p>";

      document.getElementById("tokenList").innerHTML = colorText;
      countTokens();
      flipCoin('New Round');

      break;

    case ("next"):

      if (allTokens.length <= 1 || roundEnd) {

        document.getElementById("turnList").innerHTML = "<h3 class=\"tightSpacing\">You must begin a New Round with at least one token!</h3>";

      } else {

        var currentToken = allTokens.splice(Math.floor(Math.random() * allTokens.length), 1)[0];

        flipCoin(currentToken);

        countTokens();

        if (currentToken == "End Round") {
          roundEnd = true;
        }
      }
      break;
  }
}

function flipCoin(token) {

  turnNumber = turnNumber + 1;
  turnText = document.getElementById("turnList").innerHTML;

  var coinFace = document.getElementById("tokenCoin");
  degrees = degrees + 180;
  coinFace.style.webkitTransform = "rotateY(" + degrees + "deg)";

  switch (token) {
    case ("Enemy"):
      coinFace.style.backgroundImage = "url('/images/EnemyToken.png')";
      document.getElementById("coinText").innerText = "Enemy Action";
      coinFace.style.backgroundColor = "silver";
      turnText = "<p style=\"margin: unset;\">" + turnNumber + ". Enemy Action" +
      "</p>" + turnText;

      break;

    case ("Henchmen"):
      coinFace.style.backgroundImage = "url('/images/HenchToken.png')";
      document.getElementById("coinText").innerText = "Hench -lings";
      coinFace.style.backgroundColor = "silver";
      turnText = "<p style=\"margin: unset;\">" + turnNumber + ". Henchlings" +
        "</p>" + turnText;
      break;

    case ("End Round"):
      coinFace.style.backgroundImage = "url('/images/BackToken.png')";
      document.getElementById("coinText").innerText = "End Round";
      coinFace.style.backgroundColor = "silver";
      turnText = "<p style=\"margin: unset;\">" + turnNumber + ". End Round" +
        "</p>" + turnText;
      break;

    case ("New Round"):
    turnNumber = 0;
    coinFace.style.backgroundImage = "url('/images/BackToken.png')";
    document.getElementById("coinText").innerText = "New Round";
    coinFace.style.backgroundColor = "silver";
    turnText = "<p style=\"margin: unset;\">0. New Round</p>";
    break;

    default:
      coinFace.style.backgroundImage = "url('/images/PlayerToken.png')";
      coinFace.style.backgroundColor = token;
      document.getElementById("coinText").innerText = token + " Player";
      turnText = "<p style=\"margin: unset;\">" + turnNumber + ". " + token + " Player" +
        "</p>" + turnText;
  }

  document.getElementById("turnList").innerHTML = turnText;
  degrees = degrees + 180;
  coinFace.style.webkitTransform = "rotateY(" + degrees + "deg)";
  
}

function countTokens() {

  var countPCs = 0;
  var countHenchmen = 0;
  var countEnemies = 0;
  var countEnd = 0;

  for (i in allTokens) {

    switch (allTokens[i]) {
      case ("Enemy"):
        countEnemies++;
        break;
      case ("Henchmen"):
        countHenchmen++;
        break;
      case ("End Round"):
        countEnd++;
        break;
      default:
        countPCs++;
    }
  }

  tokenText = colorText + "<h3 class=\"tightSpacing\">Tokens in Bag:</h3><p><ul>";

  if (countPCs > 0) {
    tokenText = tokenText + "<li>" + (countPCs) + " Player tokens</li>";
  }
  if (countHenchmen > 0) {
    tokenText = tokenText + "<li>" + (countHenchmen) + " Henchmen tokens</li>";
  }
  if (countEnemies > 0) {
    tokenText = tokenText + "<li>" + (countEnemies) + " Enemy tokens</li>";
  }
  if (countEnd > 0) {
    tokenText = tokenText + "<li>" + (countEnd) + " End Round tokens</li>";
  }
  document.getElementById("tokenList").innerHTML = tokenText + "</ul>";
}