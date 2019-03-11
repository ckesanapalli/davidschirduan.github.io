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
  type = threedsix(hsi.regionTables[regionName]);

  /*Some of the step 1 table results are factions*/
  if (type == "Fuegonauts" || type == "Night Axe") {
    creature = type;
  } else {
    creature = threedsix(hsi[type][regionName]);
  }

  switch (creature) {
    case ("Adventurer"):
      var motivation = threedsix(hsi.Intelligent.Motivations);
      overlandHTML = "<h2 class=\"tightSpacing\">" + hsi.Intelligent[creature][Math.floor(Math.random() * hsi.Intelligent[creature].length)] + " (<i>" + motivation + ")</i></h2>";
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
        var motivation = threedsix(hsi.Intelligent.Motivations);

        if (hsi.Intelligent[creature][unit][diceSum] == 1) {
          overlandHTML = overlandHTML + "<h2 class=\"tightSpacing\">" + hsi.Intelligent[creature][unit][diceSum] + " " + unit + " (<i>" + motivation + ")</i></h2 > ";
          overlandHTML = overlandHTML + "<p>" + hsi.creatureDetails[unit] + "</p>";

          overlandHTML = overlandHTML + "<img src=\"/images/HSI/" + unit + ".png\">";

        } else if (hsi.Intelligent[creature][unit][diceSum] > 1) {
          overlandHTML = overlandHTML + "<h2 class=\"tightSpacing\">" + hsi.Intelligent[creature][unit][diceSum] + " " + unit + "s (<i>" + motivation + ")</i></h2 > ";
          overlandHTML = overlandHTML + "<p>" + hsi.creatureDetails[unit] + "</p>";

          overlandHTML = overlandHTML + "<img src=\"/images/HSI/" + unit + ".png\">";
        }
      }
      break;
    default:

      var number = "1";
      var motivation = threedsix(hsi.Elemental.Motivations);
      if (type == "Beast") {
        number = threedsix(hsi.Beast.NumberOf);
        motivation = threedsix(hsi.Beast.Motivations)
      }

      if (number == "1") {
        overlandHTML = "<h2 class=\"tightSpacing\">" + number + " " + creature + " (<i>" + motivation + ")</i></h2 > ";
      } else {
        overlandHTML = "<h2 class=\"tightSpacing\">" + number + " " + creature + "s (<i>" + motivation + ")</i></h2 > ";
      }

      overlandHTML = overlandHTML + "<p>" + hsi.creatureDetails[creature] + "</p>";
      overlandHTML = overlandHTML + "<img src=\"/images/HSI/" + creature + ".png\">";
  }

  document.getElementById("overland").innerHTML = overlandHTML;
  document.getElementById("defaultOpen").innerHTML = regionName;

}

function Locations(mapName) {

  console.log(threedsix(hsi.mapLocations[mapName].Happening));
  console.log(hsi.mapLocations[mapName].Areas.length);

  var locationStuff = "<h3 class=\"tightSpacing\">" + threedsix(hsi.mapLocations[mapName].Happening) + "</h3>";

  for (var i = 0; i < hsi.mapLocations[mapName].Areas.length; i++) {
    locationStuff = locationStuff + "<h2 class=\"tightSpacing\">" + hsi.mapLocations[mapName].Areas[i] + "</h2>";
    locationStuff = locationStuff + "<p style=\"padding-left:20px;\">" + threedsix(hsi.mapLocations[mapName].Encounter) + " <i>(" + threedsix(hsi.mapLocations[mapName].Motivation) + ")</i></p>";
  }

  document.getElementById("locationData").innerHTML = locationStuff;

}

function showCard(card) {

  if (card == "overlandCard") {
    document.getElementById("overlandCard").style = "margin-bottom: 30px;";
    document.getElementById("locationCard").style = "margin-bottom: 30px;display:none;";
    Overland('Light');
  } else {
    document.getElementById("overlandCard").style = "margin-bottom: 30px;display:none;";
    document.getElementById("locationCard").style = "margin-bottom: 30px;";
    Locations('Ashfire Mine');
  }

}