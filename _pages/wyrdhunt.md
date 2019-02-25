---
layout: page
title: Wyrd Hunt Generator
permalink: wyrdhuntgenerator
published: true
image: /images/wyrdhuntgenerator.png
---
![wyrdhuntgenerator.png]({{site.url}}/images/wyrdhuntgenerator.png)

<p class="tightSpacing" id="huntText"></p>

<div class="row" id="newButtons">
  <div class="col-md-6 col-6 tightSpacing buttonWrapper"><button id="start" class="btn btn-primary btn-lg" onclick="startHunt()">Start Hunt</button></div>
</div>

<div class="tightSpacing" id="encounterText"></div>

<div class="container generatorCard" style="margin-bottom: 30px;">
  <div class="tightSpacing h3" id="locationTitle">Wyrd and Wild</div>
  <p id="locationDesc">Into the Wyrd and Wild is a book for those seeking to incorporate a weird and terrifying wilderness into their game.<br><br>Created by Charles B.F. Avery, this book is gorgeously illustration and PACKED with cool ideas for wanting a dark forest adventure. After you <a href="http://google.com">BUY IT HERE</a> you can use this page to generate quick hunts.<br><br><strong>The woods do not care for you. Never forget that.</strong>
  </p>
  <hr class="tightSpacing">
  <p id="pathsText"></p>
</div>

<div class="row">
  <div class="col-md-6 col-6 tightSpacing buttonWrapper"><button class="btn-wide btn btn-primary btn-lg" onclick="searchBody()">Search Body</button></div>
  <div class="col-md-6 col-6 tightSpacing buttonWrapper"><button class="btn-wide btn btn-primary btn-lg" onclick="spell()">Spell</button></div>
  <div class="col-md-6 col-6 tightSpacing buttonWrapper"><button class="btn-wide btn btn-primary btn-lg" onclick="artifact()">Artifact</button></div>
  <div class="col-md-6 col-6 tightSpacing buttonWrapper"><button class="btn-wide btn btn-primary btn-lg" onclick="mutation()">Wild Mutation</button></div>
</div>

<div class="container generatorCard">
  <div class="row">
    <div class="col tightSpacing" id="lootBox">Click the buttons to generate some loot.</div>
  </div>
</div>

<small>Thanks to <a href="https://twitter.com/CharlieFergaves">Charles Avery</a> for making such a terrifying world and to <a href="http://chrispwolf.com/">Christopher P. Wolf</a> for the code!</small>

<script>
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
    document.getElementById("newButtons").innerHTML =  "<div class=\"col-md-6 col-6 tightSpacing buttonWrapper\"><button id=\"start\" class=\"btn btn-primary btn-lg\" onclick=\"startHunt()\">Next Location</button></div><div class=\"col-md-6 col-6 tightSpacing buttonWrapper\"><button id=\"start\" class=\"btn btn-primary btn-lg\" onclick=\"nextEncounter()\">Random Encounter</button></div>";
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
  var numPaths = Math.floor(Math.random() * 3) + 1;
  var pathsText = "<strong>Several paths lead away from this place:</strong><br>• The path you came from.";

  for (i = 0; i < numPaths; i++) {
    pathsText = pathsText + "<br><br>• " + wyrd.paths[Math.floor(Math.random() * wyrd.paths.length)] + 
    " " + wyrd.woods[Math.floor(Math.random() * wyrd.woods.length)] + 
    " " + wyrd.scenes[Math.floor(Math.random() * wyrd.scenes.length)] + 
    " " + wyrd.senses[Math.floor(Math.random() * wyrd.senses.length)];
  }

  document.getElementById("pathsText").innerHTML = pathsText + "</p>";
}

function nextEncounter() {
  if (huntStarted) {
    var percentage = Math.floor(Math.random() * 100);
    var encounterText = "<hr class=\"tightSpacing\">";

    switch (true) {
      case (percentage <= 20):
        var plant = wyrd.plants[Math.floor(Math.random() * wyrd.plants.length)];
        encounterText = encounterText + "<h3 class=\"tightSpacing\">" + plant.name + "</h3>" + plant.description +
          "<br><strong>Uses:</strong> " + plant.uses;
        break;
      case (percentage > 20 && percentage <= 40):
        var trap = wyrd.traps[Math.floor(Math.random() * wyrd.traps.length)];
        encounterText = encounterText + "<h3 class=\"tightSpacing\">" + trap.name + "</h3>" + trap.description +
          "<br><strong>Detect:</strong> " + trap.detect + 
          "<br><strong>Effect:</strong> " + trap.effect + 
          "<br><strong>Disable/Avoid:</strong> " + trap.disable;          
        break;
      case (percentage > 40 && percentage <= 80):
        var creature = wyrd.creatures[Math.floor(Math.random() * wyrd.creatures.length)];
        encounterText = encounterText +  "<h3 class=\"tightSpacing\">" + creature.name + " <i>(pg. " + creature.page + ")</i></h3>" +
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
document.getElementById("encounterText").innerHTML = encounterText;

  } else {
    startHunt();
  }

}

function dailyProgress() {

}

function searchBody() {
  document.getElementById("lootBox").innerHTML = wyrd.searchBody[Math.floor(Math.random() * wyrd.searchBody.length)] + "<br>" + wyrd.searchBody[Math.floor(Math.random() * wyrd.searchBody.length)] + "<br>" + wyrd.searchBody[Math.floor(Math.random() * wyrd.searchBody.length)];
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
</script>

