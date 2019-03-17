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

  skill = Math.floor(Math.random() * 3) + 4;
  stamina = Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6) + 14;
  luck = Math.floor(Math.random() * 6) + 7;

  background = ((Math.floor(Math.random() * 6) + 1) * 10) +
    (Math.floor(Math.random() * 6) + 1);

  provisions = ["2d6 Silver Pence", "Knife", "Lantern & flask of oil", "Rucksack", "6 Provisions"];

  document.getElementById("charClass").innerHTML = background + ". " + troika.Backgrounds[background].Name;

  document.getElementById("charStamina").innerHTML = "Skill: " + skill;
  document.getElementById("charSkill").innerHTML = "Stamina: " + stamina;
  document.getElementById("charLuck").innerHTML = "Luck: " + luck;

  descrip = "<h3 class=\"tightSpacing\">Description</h3>" + troika.Backgrounds[background].Text;
  if (troika.Backgrounds[background].Special != "") {
    descrip = descrip + "<h3 class=\"tightSpacing\">Special</h3><p>" + troika.Backgrounds[background].Special + "</p>";
  }
  document.getElementById("descr").innerHTML = descrip;

  poss = troika.Backgrounds[background].Posessions;
  provisions = poss.concat(provisions);

  startingItems = "<h3 class=\"tightSpacing\">Starting Items</h3><p><small>You can choose from <strong> any or all</strong> of the items below to fill your inventory slots.</small></p><ul>";

  for (p in provisions) {
    startingItems = startingItems + "<li>" + provisions[p] + "</li>"
  }
  startingItems = startingItems + "</ul>";

  document.getElementById("poss").innerHTML = startingItems;

}

function showTracker() {
  document.getElementById("turnCard").style = "";
  document.getElementById("charCard").style = "display:none";

  allColors = ["Crimson", "Green", "Blue", "Purple", "Yellow", "Silver", "Gold", "Orange", "Fuchsia", "Lime", "Olive", "Teal", "Maroon", "Navy", "Indigo", "Tomato", "Coral", "Tan", "Honey", "Brown"];

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

      colorText = "<h3 class=\"tightSpacing\"><strong>Player Colors:</strong><br>" + showColors.join(", ") + "</p>";

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
  var bgImage, coinTxt, bgColor;


  switch (token) {
    case ("Enemy"):
      bgImage = "url('/images/EnemyToken.png')";
      coinTxt = "Enemy Action";
      bgColor = "silver";
      turnText = "<p style=\"margin: unset;\">" + turnNumber + ". Enemy Action" +
        "</p>" + turnText;

      break;

    case ("Henchmen"):
      bgImage = "url('/images/HenchToken.png')";
      coinTxt = "Hench -lings";
      bgColor = "silver";
      turnText = "<p style=\"margin: unset;\">" + turnNumber + ". Henchlings" +
        "</p>" + turnText;
      break;

    case ("End Round"):
      bgImage = "url('/images/BackToken.png')";
      coinTxt = "End Round";
      bgColor = "silver";
      turnText = "<p style=\"margin: unset;\">" + turnNumber + ". End Round" +
        "</p>" + turnText;
      break;

    case ("New Round"):
      turnNumber = 0;
      bgImage = "url('/images/BackToken.png')";
      coinTxt = "New Round";
      bgColor = "silver";
      turnText = "<p style=\"margin: unset;\"><strong>0. New Round</strong></p>";
      break;

    default:
      bgImage = "url('/images/PlayerToken.png')";
      coinFace.style.backgroundColor = token;
      coinTxt = token + " Player";
      bgColor = token;
      turnText = "<p style=\"margin: unset;\">" + turnNumber + ". " + token + " Player" +
        "</p>" + turnText;
  }

  document.getElementById("turnList").innerHTML = turnText;
  degrees = degrees + 180;
  coinFace.style.webkitTransform = "rotateY(" + degrees + "deg)";
  coinFace.style.backgroundImage = bgImage;
  document.getElementById("coinText").innerText = coinTxt;
  coinFace.style.backgroundColor = bgColor;

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