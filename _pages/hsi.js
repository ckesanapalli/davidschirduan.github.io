/** TODO: 
 * Enable more rolling whenever the tables call for it (Fighting*)
 * Parse the 3d6+3 stuff
 * Add all the images
 * Expand the text descriptions of each creature
 * Make it look more like the book (add skull/spear imagery)
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

      var advs = Object.keys(hsi.Intelligent.Adventurers);
      var adv = advs[Math.floor(Math.random() * advs.length)];

      console.log(adv);

      overlandHTML = "<h2 class=\"tightSpacing\">" + adv + " (<i>" + motivation + ")</i></h2><p>" + hsi.Intelligent.Adventurers[adv] + "</p>";
      break;
    case ("Fuegonauts"):
    case ("Night Axe"):
    case ("Lizardmen"):
    case ("Nereid"):
    case ("Vyderac"):
      /*Dont' add +1 to each dice roll because we need to reference a table anyway*/
      var diceSum = Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6);

      for (unit in hsi.Intelligent[creature]) {
        var motivation = threedsix(hsi.Intelligent.Motivations);

        if (hsi.Intelligent[creature][unit][diceSum] == 1) {
          overlandHTML = overlandHTML + "<h2 class=\"tightSpacing\">" + 
          hsi.Intelligent[creature][unit][diceSum] + " " + unit + 
          " <i>(" + motivation + ")</i></h2>";

          overlandHTML = overlandHTML + "<p>" + hsi.creatureDetails[unit] + "<br><a href=\"/images/HSI/" + unit + ".png\" target=\"_blank\">SHOW IMAGE</a></p>";
        } else if (hsi.Intelligent[creature][unit][diceSum] > 1) {
          overlandHTML = overlandHTML + "<h2 class=\"tightSpacing\">" +
          hsi.Intelligent[creature][unit][diceSum] + " " + unit + 
          "s <i>(" + motivation + ")</i></h2>";

          overlandHTML = overlandHTML + "<p>" + hsi.creatureDetails[unit] + "<br><a href=\"/images/HSI/" + unit + ".png\" target=\"_blank\">SHOW IMAGE</a></p>";
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
        overlandHTML = "<h2 class=\"tightSpacing\">" + number + " " + creature + " <i>(" + motivation + ")</i></h2>";
      } else {
        overlandHTML = "<h2 class=\"tightSpacing\">" + number + " " + creature + "s <i>(" + motivation + ")</i></h2>";
      }

      overlandHTML = overlandHTML + "<p>" + hsi.creatureDetails[creature] + "<br><a href=\"/images/HSI/" + creature + ".png\" target=\"_blank\">SHOW IMAGE</a></p>";
  }


  document.getElementById("overland").innerHTML = overlandHTML;

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

function HotSpringsCity() {

  var cityStuff = "";

  for (var area in hsi['Hot Springs City']) {
    console.log(area);

    if (area != "Tables"){
      cityStuff = cityStuff + "<h2 class=\"tightSpacing\">" + area + "</h2>" +
      "<p><ul>";

      for (var i=0; i < 3; i++) {

        cityStuff = cityStuff + "<li>" +
          "A <strong>" + hsi["Hot Springs City"][area].Building[Math.floor(Math.random() * 6)] +
          "</strong> built from <strong>" + hsi["Hot Springs City"][area].Material[Math.floor(Math.random() * 6)] +
          "</strong>. It was a <strong>" + hsi["Hot Springs City"][area].Was[Math.floor(Math.random() * 6)] +
          "</strong> and now <strong>" + hsi["Hot Springs City"][area].Now[Math.floor(Math.random() * 6)] +
          "</strong>. Hidden inside are <strong>" + hsi["Hot Springs City"][area].Hides[Math.floor(Math.random() * 6)] +
          "</strong>. Unfortunately guarded by <strong>" + hsi["Hot Springs City"][area].Guarded[Math.floor(Math.random() * 6)] +
          "</strong>, you may also encounter <strong>" + hsi["Hot Springs City"][area].Encounter[Math.floor(Math.random() * 6)] +
          "</strong>.</li>";

      }
      cityStuff = cityStuff + "</ul></p>";
    }
  }

  document.getElementById("locationData").innerHTML = cityStuff;
}

function showCard(card) {

  if (card == "overlandCard") {
    document.getElementById("overlandCard").style = "margin-bottom: 30px;";
    document.getElementById("locationCard").style = "margin-bottom: 30px;display:none;";
  } else {
    document.getElementById("overlandCard").style = "margin-bottom: 30px;display:none;";
    document.getElementById("locationCard").style = "margin-bottom: 30px;";
  }

}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function treasure(){
  /*
  0-49: Fuegonauts
  50-99: Ancient
  100-149: Night Axe
  150-199: Nereid
  200-249: Elven
  250-299: Lizardmen
   */
  var treasureText = "<div class=\"row\">";
  var num = 300;

  var factionTables = [
    ["Fuegonauts", 0, 49],
    ["Ancient", 50, 99],
    ["Night Axe", 100, 149],
    ["Nereid", 150, 199],
    ["Elven", 200, 249],
    ["Lizardmen", 250, 299]
  ];

  for (i = 0; i < factionTables.length; i++){

    num = getRndInteger(factionTables[i][1], factionTables[i][2]);
    var name = Object.keys(hsi.Treasure)[num];
    var desc = hsi.Treasure[name];
    treasureText = treasureText + "<div class=\"col-md-6 col-12\"><h2 class=\"tightSpacing\">" + 
    factionTables[i][0] + "</h2>" +
    "<p><strong>" + name + "</strong><br>" + desc + "<p></div>";

  }
  var treasureText = treasureText + "</div>";

  document.getElementById("extraData").innerHTML = treasureText;
  document.getElementById("extraCard").style = "margin-bottom: 30px;";
}

function rumors() {

  document.getElementById("extraData").innerHTML = "<p>" +
    hsi.Rumors[Math.floor(Math.random() * hsi.Rumors.length)] +
  "</p>" + "<hr><p>" +
    hsi.Rumors[Math.floor(Math.random() * hsi.Rumors.length)] +
  "</p>" + "<hr><p>" +
    hsi.Rumors[Math.floor(Math.random() * hsi.Rumors.length)] +
    "</p>";

  document.getElementById("extraCard").style = "margin-bottom: 30px;";

}

function golems(){

  golemText = "<h2 class=\"tightSpacing\">Three Random Golems</h2>";

  for (i=0;i<2;i++){

    golemText = golemText + "<p>" +
      hsi.Golems.Sound[Math.floor(Math.random() * hsi.Golems.Sound.length)] + "<br>" +
      hsi.Golems.Shape[Math.floor(Math.random() * hsi.Golems.Shape.length)] + "<br>" +
      hsi.Golems.Substance[Math.floor(Math.random() * hsi.Golems.Substance.length)] + "<br>" +
      hsi.Golems.Does[Math.floor(Math.random() * hsi.Golems.Does.length)] + "<br>" +
      hsi.Golems.But[Math.floor(Math.random() * hsi.Golems.But.length)] + "<br>" + 
      "<i>Contains a chime made of " + 
      hsi.Golems.Material[Math.floor(Math.random() * hsi.Golems.Material.length)] +
      ", engraved with " + 
      hsi.Golems.Engraved[Math.floor(Math.random() * hsi.Golems.Engraved.length)] +
      ". " +
      hsi.Golems.Effect[Math.floor(Math.random() * hsi.Golems.Effect.length)] + "</i></p><hr>";
  }
  /*Split up to get rid of that stupid hanging HR*/
  golemText = golemText + "<p>" +
    hsi.Golems.Sound[Math.floor(Math.random() * hsi.Golems.Sound.length)] + "<br>" +
    hsi.Golems.Shape[Math.floor(Math.random() * hsi.Golems.Shape.length)] + "<br>" +
    hsi.Golems.Substance[Math.floor(Math.random() * hsi.Golems.Substance.length)] + "<br>" +
    hsi.Golems.Does[Math.floor(Math.random() * hsi.Golems.Does.length)] + "<br>" +
    hsi.Golems.But[Math.floor(Math.random() * hsi.Golems.But.length)] + "<br>" +
    "<i>Contains a chime made of " +
    hsi.Golems.Material[Math.floor(Math.random() * hsi.Golems.Material.length)] +
    ", engraved with " +
    hsi.Golems.Engraved[Math.floor(Math.random() * hsi.Golems.Engraved.length)] +
    ". " +
    hsi.Golems.Effect[Math.floor(Math.random() * hsi.Golems.Effect.length)] + "</i></p>";

  document.getElementById("extraData").innerHTML = golemText;
  document.getElementById("extraCard").style = "margin-bottom: 30px;";
}