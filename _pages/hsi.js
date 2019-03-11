/**
 * 
 * TODO: 
 * Enable more rolling whenever the tables call for it (Fighting*)
 * Add motivations to the UI
 * Parse the 3d6+3 stuff
 * Add all the images
 * Clean up the UI for mobile and such
 * 
 */

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

      var number = "1";
      if (type == "Beast") {
        number = threedsix(hsi.Beast.NumberOf);
      }

      if (number == "1") {
        overlandHTML = "<h2 class=\"tightSpacing\">" + number + " " + creature + "</h2>";
      } else {
        overlandHTML = "<h2 class=\"tightSpacing\">" + number + " " + creature + "s</h2>";
      }

      overlandHTML = overlandHTML + "<p>" + hsi.creatureDetails[creature] + "</p>";
      overlandImages = overlandImages + "<img src=\"/images/HSI/" + creature + ".png\">";
  }

  document.getElementById("overland").innerHTML = overlandHTML;
  document.getElementById("images").innerHTML = overlandImages;
  document.getElementById("locationCard").style = "";
}

function mappedLocations(mapName) {

  console.log("Happening: " + threedsix(hsi.mapLocations[mapName].Happening));

  for (var area in hsi.mapLocations[mapName].Areas) {
    console.log("Area: " + area);
    console.log("Encounter: " + threedsix(hsi.mapLocations[mapName].Encounter));
    console.log("Motivation: " + threedsix(hsi.mapLocations[mapName].Motivation));
  }
}