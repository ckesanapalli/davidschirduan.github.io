---
layout: page
title: Gardens of Ynn Generator
permalink: ynngenerator
published: true
image: /images/ynngenerator.png
---
<div class="row">
  <div class="col-xl-3 col-md-6 tightSpacing buttonWrapper"><button class="btn btn-primary btn-lg" onclick="buttonDeeper()">Go Deeper</button></div>
  <div class="col-xl-3 col-md-6 tightSpacing buttonWrapper"><button class="btn btn-primary btn-lg" onclick="dayEvent()">Day Event</button></div>
  <div class="col-xl-3 col-md-6 tightSpacing buttonWrapper"><button class="btn btn-primary btn-lg" onclick="nightEvent()">Night Event</button></div>
  <div class="col-xl-3 col-md-6 tightSpacing buttonWrapper"><button class="btn btn-primary btn-lg" onclick="buttonFlee()">Flee Danger!</button></div>
</div>

<p class="tightSpacing" id="eventText"></p>

<div class="container generatorCard">
  <div class="row pastRecords">
    <div class="col-xl-12 col-md-12 h4 tightSpacing" id="pastLocations"></div>
  </div>
  <div class="row">
    <div class="col-xl-6 col-md-12" style="border-right: 1px solid var(--border-color);">
      <div class="tightSpacing h3" id="locationTitle">Gardens of Ynn</div>
      <p id="locationDesc">Ynn is a perpendicular world. It appears as a vast garden, now untended, overrun, and fallen into ruin. Once, this place was a realm of rarefied luxury, but its masters are long dead and the machinery that maintained it has fallen into disrepair.</p>
    </div>
    <div class="col-xl-6 col-md-12">
      <div class="tightSpacing h3" id="detailTitle"><a href="https://www.drivethrurpg.com/product/237544/The-Gardens-Of-Ynn">Buy it here</a></div>
      <p id="detailDesc">Created by Emmy Allen, the book is beautifully written and criminally underpriced. After you've bought a copy of the book, you can use the buttons above to generate locations and events.</p>
    </div>
  </div>
</div>

<div class="row buttonWrapper" style="margin: 12px;">
  <div class="col-xl-3 col-md-12 buttonWrapper"><button class="btn btn-primary btn-lg" onclick="searchBody()">Search Body</button></div>
  <div class="col-xl-6 col-md-12 buttonWrapper"><button class="btn btn-primary btn-lg" onclick="searchFlowerbed()">Search Flowerbed</button></div>
  <div class="col-xl-3 col-md-12 buttonWrapper"><button class="btn btn-primary btn-lg" onclick="findTreasure()">Treasure!</button></div>
</div>

<div class="container generatorCard">
  <div class="row">
    <div class="col tightSpacing h4" id="lootBox">Click the buttons to generate some loot.</div>
  </div>
</div>

<small>Thanks to <a href="https://www.patreon.com/EmmyCavegirlAllen/overview/">Emmy Allen</a> for making such a beautiful world and to <a href="http://chrispwolf.com/">Christopher P. Wolf</a> for the code!</small>

<script>

var currentLayer = -1;
var ynn;

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    ynn = JSON.parse(this.responseText);
  }
};
xmlhttp.open("GET", "/ynn.json", true);
xmlhttp.send(); 

function buttonDeeper(){
  currentLayer++;
  document.getElementById("pastLocations").innerHTML = document.getElementById("pastLocations").innerHTML + document.getElementById("locationTitle").innerHTML + ", " + document.getElementById("detailTitle").innerHTML + "<br>";
  goDeeper();
}

function buttonFlee(){
  currentLayer = currentLayer + Math.floor(Math.random() * 4);
  document.getElementById("pastLocations").innerHTML = document.getElementById("pastLocations").innerHTML + document.getElementById("locationTitle").innerHTML + ", " + document.getElementById("detailTitle").innerHTML + "<br>?. The PCs fled, they are lost<br>";
  goDeeper();
}

function goDeeper() {
  /*increase to the next Layer*/
  var nextLocation = Math.floor(Math.random() * 20) + currentLayer;
  var nextDetail = Math.floor(Math.random() * 20) + currentLayer;

  /*var nextLocation = currentLayer;
  var nextDetail = currentLayer;
  Add to the list of past locations*/


  document.getElementById("eventText").innerHTML = "";

  switch (true) {
    case (nextLocation >= 34):
      nextLocation = 34;
      document.getElementById("locationDesc").innerHTML = ynn.locations[nextLocation].description;
      break;
    default:
      document.getElementById("locationDesc").innerHTML = ynn.locations[nextLocation].description;
  }

  switch (true) {
    case (nextDetail >= 34):
      nextDetail = 34;
      document.getElementById("locationDesc").innerHTML = ynn.details[nextDetail].description;
      break;
    default:
      document.getElementById("detailDesc").innerHTML = ynn.details[nextDetail].description;
  }

  document.getElementById("locationTitle").innerHTML = currentLayer + ". " + ynn.locations[nextLocation].title + " <small>pg " + ynn.locations[nextLocation].page + "</small>";
  document.getElementById("detailTitle").innerHTML = ynn.details[nextDetail].title + " <small>pg " + ynn.details[nextDetail].page + "</small>";
}

function dayEvent() {
  var nextEvent = Math.floor(Math.random() * ynn.events.length);
  var eventDescription = ynn.events[nextEvent].description;
  var encounters = "<br>";

  for (i = 0; i < ynn.events[nextEvent].encounters; i++) {
    var depth20 = Math.floor(Math.random() * 20) + currentLayer;

    if (depth20 >= 35) {
      var depth20 = Math.floor(Math.random() * 20) + Math.floor(Math.random() * 10) + 1 + Math.floor(Math.random() * 6) - 2;
    }

    var nextEncounter = ynn.dayEncounters[depth20];

    encounters = encounters + "<br><strong>" +
      nextEncounter.title + " </strong> <small>pg " + nextEncounter.page + "</small> <br> " +
      nextEncounter.description + " <br> <i>" + nextEncounter.stats + "</i><br>";
  }

  document.getElementById("eventText").innerHTML = "<hr class=\"tightSpacing\"><h3  class=\"tightSpacing\">Day Event</h3>" + eventDescription + encounters;
}

function nightEvent() {
  var nextEvent = Math.floor(Math.random() * ynn.events.length);
  var eventDescription = ynn.events[nextEvent].description;
  var encounters = "<br>";

  for (i = 0; i < ynn.events[nextEvent].encounters; i++) {
    var depth20 = Math.floor(Math.random() * 20) + currentLayer;

    if (depth20 >= 34) {
      var depth20 = Math.floor(Math.random() * 20) + Math.floor(Math.random() * 10) + 1 + Math.floor(Math.random() * 6) - 2;
    }

    var nextEncounter = ynn.nightEncounters[depth20];

    encounters = encounters + "<br><strong>" +
      nextEncounter.title + " </strong> <small>pg " + nextEncounter.page + "</small> <br> " +
      nextEncounter.description + " <br> <i>" + nextEncounter.stats + "</i><br>";
  }

  document.getElementById("eventText").innerHTML = "<hr class=\"tightSpacing\"><h3  class=\"tightSpacing\">Night Event</h3>" + eventDescription + encounters;
}

function searchBody() {
  document.getElementById("lootBox").innerHTML = ynn.searchBody[Math.floor(Math.random() * ynn.searchBody.length)];
}

function searchFlowerbed() {
  document.getElementById("lootBox").innerHTML = ynn.searchFlowerbed[Math.floor(Math.random() * ynn.searchFlowerbed.length)];
}

function findTreasure() {
  var treasureRoll = Math.floor(Math.random() * 20) + currentLayer;
  switch (true) {
    case (treasureRoll < 0):
      document.getElementById("lootBox").innerHTML = ynn.treasure[0];
    break;
    case (treasureRoll >= 34):
      document.getElementById("lootBox").innerHTML = ynn.treasure[Math.floor(Math.random() * 20) + Math.floor(Math.random() * 10) + 1 + Math.floor(Math.random() * 6) - 2] + "<br>" + ynn.treasure[Math.floor(Math.random() * 20) + Math.floor(Math.random() * 10) + 1 + Math.floor(Math.random() * 6) - 2] + "<br>" + ynn.treasure[Math.floor(Math.random() * 20) + Math.floor(Math.random() * 10) + 1 + Math.floor(Math.random() * 6) - 2];
      break;
    default:
      document.getElementById("lootBox").innerHTML = ynn.treasure[treasureRoll];
  }
}

</script>