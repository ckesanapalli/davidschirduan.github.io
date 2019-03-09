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

  result = jsonList[diceSum];
  if (Array.isArray(result)) {
    result = threedsix(result);
  }
  return result;
}

function Overland(regionName) {

  var overlandHTML = "";
  var overlandImages = "";

  type = threedsix(hsi.regionTables[regionName]);
  creature = threedsix(hsi[type][regionName]);

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
      overlandHTML = "<h2 class=\"tightSpacing\">" + creature + "</h2>";
      overlandHTML = overlandHTML + "<p>" + hsi.creatureDetails[creature] + "</p>";

      overlandImages = overlandImages + "<img src=\"/images/HSI/" + creature + ".png\">";
  }

  document.getElementById("overland").innerHTML = overlandHTML;
  document.getElementById("images").innerHTML = overlandImages;

  mappedLocations(regionName);

  document.getElementById("locationCard").style = "";

}

function mappedLocations(regionName){

  var tabs = document.getElementById("tabs").innerHTML;
  var boxes = document.getElementById("tabBoxes").innerHTML;


  console.log(tabs);
  console.log(boxes);

  for (i = 0; i < hsi.mapLocations[regionName].length; i++){

    var location = hsi.mapLocations[regionName][i]
    console.log(location);

    tabs = tabs + "<button class=\"tablinks\" onclick=\"openTab(event, '" + location + "')\">" + location + "</button>";

    boxes = boxes + "<div id=\"" + location + "\" class=\"tabcontent\"></div>";
  }

  console.log(tabs);
  console.log(boxes);

  document.getElementById("tabs").innerHTML = tabs;
  document.getElementById("tabBoxes").innerHTML = boxes;

}