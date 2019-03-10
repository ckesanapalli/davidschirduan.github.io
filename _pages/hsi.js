function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    hsi = JSON.parse(this.responseText);
  }
};
xmlhttp.open("GET", "/_pages/hsi.json", true);
xmlhttp.send();

function threedsix(jsonList) {
  /*We don't add +1 because we'll be referencing tables, which start at 0*/
  var diceSum = Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6);

  return jsonList[diceSum];
}

function Overland(regionName) {

  var overlandHTML = "";
  var overlandImages = "";

  type = threedsix(hsi.regionTables[regionName]);

  /*Some of the step 1 table results are factions*/
  if (type == "Fuegonauts" || type == "Night Axe") {
    creature = type;
  } else {
    creature = threedsix(hsi[type][regionName]);
  }

  console.log("Region: " + regionName);
  console.log("Type: " + type);
  console.log("Creature: " + creature);

  switch (creature) {
    case ("Adventurer"):
      overlandHTML = "<h2 class=\"tightSpacing\">" + hsi.Intelligent[creature][Math.floor(Math.random() * hsi.Intelligent[creature].length)] + "</h2>";
      break;
    case ("Fuegonauts"):
    case ("Night Axe"):
    case ("Lizardmen"):
    case ("Nereid"):
    case ("Vyderac"):
      /*Dont' add +1 to each dice roll because we need to reference a table anyway*/
      var diceSum = Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6);
      for (unit in hsi.Intelligent[creature]) {

        console.log("Unit + " + unit);

        if (hsi.Intelligent[creature][unit][diceSum] == 1) {
          overlandHTML = overlandHTML + "<h2 class=\"tightSpacing\">" + hsi.Intelligent[creature][unit][diceSum] + " " + unit + "</h2>";
          overlandHTML = overlandHTML + "<p>" + hsi.creatureDetails[unit] + "</p>";

          overlandImages = overlandImages + "<img src=\"/images/HSI/" + unit + ".png\">";

        } else if (hsi.Intelligent[creature][unit][diceSum] > 1) {
          overlandHTML = overlandHTML + "<h2 class=\"tightSpacing\">" + hsi.Intelligent[creature][unit][diceSum] + " " + unit + "s</h2>";
          overlandHTML = overlandHTML + "<p>" + hsi.creatureDetails[unit] + "</p>";

          overlandImages = overlandImages + "<img src=\"/images/HSI/" + unit + ".png\">";
        }
      }
      break;
    default:

      if (type == "Beast") {
        var number = "";
        var diceSum = Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6) + 3;

        switch (diceSum) {
          case (3):
          case (4):
          case (5):
            number = 1;
            break;
          case (6):
          case (7):
          case (8):
          case (9):
            number = 2;
            break;
          case (10):
          case (11):
            number = Math.floor(Math.random() * 4) + 1;
            break;
          case (12):
          case (13):
            number = Math.floor(Math.random() * 4) + 2;
            break;
          case (14):
            number = Math.floor(Math.random() * 6) + 1;
            break;
          case (15):
            number = Math.floor(Math.random() * 6) + 2;
            break;
          case (16):
            number = Math.floor(Math.random() * 8) + 3;
            break;
          case (17):
            number = Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6) + 2;
            break;
          case (18):
            number = Math.floor(Math.random() * 4) + Math.floor(Math.random() * 4) + Math.floor(Math.random() * 4) + 3;
            break;
        }

        console.log("Number: " + number);

        if (number == 1) {
          overlandHTML = "<h2 class=\"tightSpacing\">" + number + " " + creature + "</h2>";
        } else {
          overlandHTML = "<h2 class=\"tightSpacing\">" + number + " " + creature + "s</h2>";
        }
        overlandHTML = overlandHTML + "<p>" + hsi.creatureDetails[creature] + "</p>";
        overlandImages = overlandImages + "<img src=\"/images/HSI/" + creature + ".png\">";
      } else {
        overlandHTML = "<h2 class=\"tightSpacing\">1 " + creature + "</h2>";
        overlandHTML = overlandHTML + "<p>" + hsi.creatureDetails[creature] + "</p>";
        overlandImages = overlandImages + "<img src=\"/images/HSI/" + creature + ".png\">";
      }
  }

  document.getElementById("overland").innerHTML = overlandHTML;
  document.getElementById("images").innerHTML = overlandImages;
  document.getElementById("locationCard").style = "";
}

function mappedLocations(mapName) {

  console.log(mapName);

}