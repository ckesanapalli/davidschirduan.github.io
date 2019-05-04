
var huntStarted = false;

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    wyrd = JSON.parse(this.responseText);
  }
};
xmlhttp.open("GET", "/_pages/wyrdhunt.json", true);
xmlhttp.send();

function startHunt() {
  if (huntStarted) {
    nextLocation();
    nextPaths();

  } else {
    /*generate the hunt name and hook*/
    var target = wyrd.creatures[Math.floor(Math.random() * wyrd.creatures.length)];
    document.getElementById("huntText").innerHTML = "Within the <strong>" + wyrd.names.prefix[Math.floor(Math.random() * wyrd.names.prefix.length)] + " Of " + wyrd.names.suffix[Math.floor(Math.random() * wyrd.names.suffix.length)] + "</strong> there is rumored to be " + wyrd.secrets[Math.floor(Math.random() * wyrd.secrets.length)] + " But beware! " + wyrd.dangers[Math.floor(Math.random() * wyrd.dangers.length)] + "<br><br> You are hunting one or more <strong>" + target.name + "</strong> (pg. " + target.page + ") for fortune, fame, flesh, or some other reason altogether. You will need <strong>" + target.marks + " Marks</strong> to complete the hunt.";

    /*set started to false and change the button text*/
    document.getElementById("newButtons").innerHTML = "<div class=\"col-md-6 col-12\">"+
    "<button class=\"btn wyrd-btn\" onclick=\"startHunt()\">"+
    "<h3>Next Location</h3></button></div><div class=\"col-md-6 col-12\"><button  class=\"btn wyrd-btn\" onclick=\"nextEncounter()\"><h3>Random Encounter</h3></button></div>";
    
    huntStarted = true;
    startHunt();
  }
}

function nextLocation() {
  /*Generate location*/
  var nextLocation = wyrd.locations[Math.floor(Math.random() * wyrd.locations.length)];
  document.getElementById("locationTitle").innerHTML = nextLocation.name;
  document.getElementById("locationDesc").innerHTML = nextLocation.description;
  document.getElementById("encounterText").innerHTML = "";

}
function nextPaths() {
  var numPaths = Math.floor(Math.random() * 4);

  var directions = ["North", "East", "West", "South", "North-East", "South-West", "South-East", "North-West"];

  var pathsText = "<p><strong>Paths leading away from this place:</strong><ul><li><strong>" + directions.splice(Math.floor(Math.random()*directions.length), 1) + "</strong>: The path you came from.</li>";

  for (i = 0; i < numPaths; i++) {
    if (Math.floor(Math.random() * 100) <= 50) {
      pathsText = pathsText + "<li><strong>" + directions.splice(Math.floor(Math.random() * directions.length), 1) + "</strong>: " + wyrd.paths[Math.floor(Math.random() * wyrd.paths.length)] + " " + wyrd.senses[Math.floor(Math.random() * wyrd.senses.length)] + "</li>";
      } else {
        pathsText = pathsText + "<li><strong>" + directions.splice(Math.floor(Math.random()*directions.length), 1) + "</strong>: " + wyrd.scenes[Math.floor(Math.random() * wyrd.scenes.length)] + " " + wyrd.woods[Math.floor(Math.random() * wyrd.woods.length)] + " " + wyrd.senses[Math.floor(Math.random() * wyrd.senses.length)] + "</li>";
      }
    }

    document.getElementById("pathsText").innerHTML = pathsText + "</ul></p>";
  }

function nextEncounter() {
  if (huntStarted) {
    var percentage = Math.floor(Math.random() * 100);
    var encounterText = "<hr class=\"tightSpacing\">";

    switch (true) {
      case (percentage <= 20):
        var plant = wyrd.plants[Math.floor(Math.random() * wyrd.plants.length)];
        encounterText = encounterText + "<h3 class=\"tightSpacing\">Plant: " + plant.name + "</h3>" + plant.description +
          "<br><strong>Uses:</strong> " + plant.uses;
        break;
      case (percentage > 20 && percentage <= 40):
        var trap = wyrd.traps[Math.floor(Math.random() * wyrd.traps.length)];
        encounterText = encounterText + "<h3 class=\"tightSpacing\">Trap: " + trap.name + "</h3>" + trap.description +
          "<br><strong>Detect:</strong> " + trap.detect + 
          "<br><strong>Effect:</strong> " + trap.effect + 
          "<br><strong>Disable/Avoid:</strong> " + trap.disable;          
        break;
      case (percentage > 40 && percentage <= 80):
        var creature = wyrd.creatures[Math.floor(Math.random() * wyrd.creatures.length)];
        encounterText = encounterText +  "<h3 class=\"tightSpacing\">Creature: " + creature.name + " <i>(pg. " + creature.page + ")</i></h3>" +
          "<strong>Quantity:</strong> " + creature.quantity +
          "<br><strong>Armor Class:</strong> " + creature.ac +
          "<br><strong>Hit Dice:</strong> " + creature.hd +
          "<br><strong>Hit Points:</strong> " + creature.hp +
          "<br><strong>Move:</strong> " + creature.move +
          "<br><strong>Damage:</strong> " + creature.damage +
          "<br><strong>XP:</strong> " + creature.XP +
          "<br>" + creature.extra;
        break;
      default:
        encounterText = encounterText +  "No Encounter. Just an empty, restless silence.";
    }
document.getElementById("encounterText").innerHTML = encounterText + "<hr class=\"tightSpacing\">";

  } else {
    startHunt();
  }

}

function searchBody() {
  document.getElementById("lootBox").innerHTML = wyrd.searchBody[Math.floor(Math.random() * wyrd.searchBody.length)];
}

function artifact() {
  var artifact = wyrd.artifacts[Math.floor(Math.random() * wyrd.artifacts.length)];
  document.getElementById("lootBox").innerHTML = "<h3 class=\"tightSpacing\">" + artifact.name + "</h3>" + artifact.description;
  }

function spell() {
  var spell = wyrd.spells[Math.floor(Math.random() * wyrd.spells.length)];
  var spellText = "<h3 class=\"tightSpacing\">" + spell.name + "</h3>" +
    "<strong>Spell Level:</strong> " + spell.level +
    "<br><strong>Casting Time:</strong> " + spell.castingTime +
    "<br><strong>Range:</strong> " + spell.range +
    "<br><strong>Duration:</strong> " + spell.duration;

  if (spell.material != "") {
    spellText = spellText + "<br><strong>Material Component:</strong> " + spell.material;
  }

  if (spell.higher != "") {
    spellText = spellText + "<br><strong>At Higher Levels:</strong> " + spell.higher;
  }

  spellText = spellText + "<br><br>" + spell.effect;
  document.getElementById("lootBox").innerHTML = spellText;
}

function mutation() {
  document.getElementById("lootBox").innerHTML = wyrd.mutations[Math.floor(Math.random() * wyrd.mutations.length)];
}

