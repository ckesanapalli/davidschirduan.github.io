---
layout: page
title: Gardens of Ynn Generator
permalink: ynngenerator
published: true
image: /images/ynngenerator.png
---
<div class="buttonWrapper">
  <button class="btn btn-primary" onclick="buttonDeeper()">Go Deeper</button>
  <button class="btn btn-primary" onclick="buttonDanger()">Flee Danger!</button>
</div>
<p style="text-align: right;font-style: italic;"><small>Scroll down for encounters and loot tables.</small></p>

<div class="container generatorCard">
  <div class="row pastRecords">
    <div class="col-xl-6 col-md-12 tightSpacing h3" id="pastLocations"></div>
    <div class="col-xl-6 col-md-12 tightSpacing h3" id="pastDetails"><a href="https://www.drivethrurpg.com/product/237544/The-Gardens-Of-Ynn"></a></div>
  </div>
  <div class="row">
    <div class="col-xl-6 col-md-12 tightSpacing h2" id="locationTitle">Gardens of Ynn</div>
    <div class="col-xl-6 col-md-12 tightSpacing h2" id="detailTitle"><a href="https://www.drivethrurpg.com/product/237544/The-Gardens-Of-Ynn">Buy it here</a></div>
  </div>
  <div class="row">
    <div id="locationDesc" class="col-xl-6 col-md-12" style="border-right: 1px solid var(--border-color);">
    Ynn is a perpendicular world. It appears as a vast garden, now untended, overrun, and fallen into ruin. Once, this place was a realm of rarefied luxury, but its masters are long dead and the machinery that maintained it has fallen into disrepair.
    </div>
    <div id="detailDesc" class="col-xl-6 col-md-12">
    Created by Emmy Allen, the book is beautifully written and criminally underpriced. After you've bought a copy of the book, you can use the buttons above to generate locations and events.
    </div>
	</div>
</div>

<div class="buttonWrapper">
  <button class="btn btn-primary" onclick="buttonDay()">Day Event</button>
  <button class="btn btn-primary" onclick="buttonNight()">Night Event</button>
</div>

<div class="container generatorCard">
  <div class="row" id="eventText">
	</div>
</div>

<div class="buttonWrapper">
  <button class="btn btn-primary" onclick="buttonBody()">Search Body</button>
  <button class="btn btn-primary" onclick="buttonFlower()">Search Flowerbed</button>
  <button class="btn btn-primary" onclick="buttonTreasure()">Treasure!</button>
</div>

<div class="container generatorCard">
  <div class="row">
    <div class="col tightSpacing h3" id="generatorTitle">Click the buttons to generate some loot.</div>
  </div>
</div>

<small>Thanks to <a href="https://www.patreon.com/EmmyCavegirlAllen/overview/">Emmy Allen</a> for making such a beautiful world and to <a href="http://chrispwolf.com/">Christopher P. Wolf</a> for the code!</small>

<script>
var currentLayer = -1;

function buttonDeeper() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      goDeeper(JSON.parse(this.responseText));
    }
  };
  xmlhttp.open("GET", "ynn.json", true);
  xmlhttp.send();
}

function buttonDay() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      dayEvent(JSON.parse(this.responseText));
    }
  };
  xmlhttp.open("GET", "ynn.json", true);
  xmlhttp.send();
}

function goDeeper(ynn) {
  //Add to the list of past locations
  document.getElementById("pastLocations").innerHTML = document.getElementById("pastLocations").innerHTML + document.getElementById("locationTitle").innerHTML + "<br>";

  document.getElementById("pastDetails").innerHTML = document.getElementById("pastDetails").innerHTML + document.getElementById("detailTitle").innerHTML + "<br>";

  //increase to the next Layer
  currentLayer++;
  var nextLocation = Math.floor(Math.random() * 20) + currentLayer;
  var nextDetail = Math.floor(Math.random() * 20) + currentLayer;

  document.getElementById("locationTitle").innerHTML = currentLayer + ". " + ynn.locations[currentLayer].title + " <small>pg " + ynn.locations[currentLayer].page + "</small>";

  document.getElementById("detailTitle").innerHTML = currentLayer + ". " + ynn.details[currentLayer].title + " <small>pg " + ynn.details[currentLayer].page + "</small>";

  document.getElementById("locationDesc").innerHTML = ynn.locations[currentLayer].description;
  document.getElementById("detailDesc").innerHTML = ynn.details[currentLayer].description;
}

function dayEvent(ynn) {
  var nextEvent = Math.floor(Math.random() * ynn.events.length);
  var eventDescription = ynn.events[nextEvent].description;
  var encounters = "";

  for (i = 0; i < ynn.events[nextEvent].encounters; i++) {
    var nextEncounter = ynn.dayEncounters[Math.floor(Math.random() * ynn.dayEncounters.length)];

    encounters = "<hr class=\"tightSpacing\"><strong>" + encounters +
      nextEncounter.title + " <small>pg " + nextEncounter.page + "</small><br>" +
      nextEncounter.description + "<br><i>" + nextEncounter.stats + "</i>";
  }

  document.getElementById("eventText").innerHTML = eventDescription + encounters;
}

</script>