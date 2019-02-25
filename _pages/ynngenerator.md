---
layout: page
title: Gardens of Ynn Generator
permalink: ynngenerator
published: true
image: /images/ynngenerator.png
description: >
  A mobile-friendly generator for the Gardens of Ynn.
---
![ynngenerator.png]({{site.url}}/images/ynngenerator.png)

<div class="row">
  <div class="col-md-3 col-6 tightSpacing buttonWrapper"><button class="btn btn-primary btn-lg" onclick="buttonDeeper()">Go
      Deeper</button></div>
  <div class="col-md-3 col-6 tightSpacing buttonWrapper"><button class="btn btn-primary btn-lg" onclick="buttonHigher()">Higher</button></div>
  <div class="col-md-3 col-6 tightSpacing buttonWrapper"><button class="btn btn-primary btn-lg" onclick="d12Button()">d12 Event</button></div>
  <div class="col-md-3 col-6 tightSpacing buttonWrapper"><button class="btn btn-primary btn-lg" onclick="d20Button()">d20 Event</button></div>
</div>

<p class="tightSpacing" id="eventText"></p>

<div class="container generatorCard" style="margin-bottom: 30px;">

  <div class="tab">
    <button class="tablinks" onclick="openTab(event, 'location')" id="defaultOpen">Location</button>
    <button class="tablinks" onclick="openTab(event, 'detail')">Detail</button>
    <button class="tablinks" onclick="openTab(event, 'past')">Past Visited</button>
  </div>

  <div id="location" class="tabcontent">
    <div class="tightSpacing h3" id="locationTitle">Gardens of Ynn</div>
    <p id="locationDesc"><a href="/david/extremely-interesting-adventures#gardens-of-ynn">Ynn</a> is a perpendicular world. It appears as a vast garden, now untended, overrun, and fallen into ruin. Once, this place was a realm of rarefied luxury, but its masters are long dead and the machinery that maintained it has fallen into disrepair.</p>
  </div>

  <div id="detail" class="tabcontent">
    <div class="tightSpacing h3" id="detailTitle"><a href="https://www.drivethrurpg.com/product/237544/The-Gardens-Of-Ynn">Buy
        it here</a></div>
    <p id="detailDesc">Created by Emmy Allen, the book is beautifully written and criminally underpriced. After you've bought a copy of the book, you can use the buttons above to generate locations and events.</p>
  </div>

  <div id="past" class="tabcontent">
    <div class="col-lg-12 h4 tightSpacing" id="pastLocations"></div>
  </div>

</div>

<script>
document.getElementById("defaultOpen").click();

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

</script>

<div class="row">
  <div class="col-md-4 col-6 tightSpacing buttonWrapper"><button class="btn-wide btn btn-primary btn-lg" onclick="searchBody()">Search Body</button></div>
  <div class="col-md-4 col-6 tightSpacing buttonWrapper"><button class="btn-wide btn btn-primary btn-lg" onclick="searchFlowerbed()">Search Flowerbed</button></div>
  <div class="col-md-4 col-12 tightSpacing buttonWrapper"><button class="btn-wide btn btn-primary btn-lg" onclick="findTreasure()">Treasure!</button></div>
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
var day = true;

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    ynn = JSON.parse(this.responseText);
  }
};
xmlhttp.open("GET", "/_pages/ynn.json", true);
xmlhttp.send();

function buttonDeeper() {
  document.getElementById("pastLocations").innerHTML = document.getElementById("pastLocations").innerHTML + document.getElementById("locationTitle").innerHTML + ", " + document.getElementById("detailTitle").innerHTML + "<br>";
  garden("deeper");
}

function buttonHigher() {
  document.getElementById("pastLocations").innerHTML = document.getElementById("pastLocations").innerHTML + document.getElementById("locationTitle").innerHTML + ", " + document.getElementById("detailTitle").innerHTML + "<br>";
  garden("higher");
}

function garden(direction) {
  /*increase to the next Layer*/

  var nextLocation = Math.floor(Math.random() * 20) + currentLayer;
  var nextDetail = Math.floor(Math.random() * 20) + currentLayer;

  /*var nextLocation = currentLayer;
  var nextDetail = currentLayer;
  //Add to the list of past locations*/

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

	/*Need to adjust current layer AFTER calculations*/
  if (direction == "higher") {
    currentLayer--;
    if (currentLayer < 0) {
      currentLayer = 0;
    }
  } else {
    currentLayer++;
  }
  
  document.getElementById("locationTitle").innerHTML = currentLayer + ". " + ynn.locations[nextLocation].title + " <small>pg " + ynn.locations[nextLocation].page + "</small>";
  document.getElementById("detailTitle").innerHTML = ynn.details[nextDetail].title + " <small>pg " + ynn.details[nextDetail].page + "</small>";
}

function d12Button() {
  newEvent(12, day);
  day = !day;
}

function d20Button() {
  newEvent(20, day);
  day = !day;
}
function newEvent(dice, day) {
  var nextEvent = Math.floor(Math.random() * dice);
  var eventDescription = ynn.events[nextEvent].description;
  var encounters = "<br>";
  var nextEncounter;

  for (i = 0; i < ynn.events[nextEvent].encounters; i++) {
    var depth20 = Math.floor(Math.random() * 20) + currentLayer;

    if (depth20 >= 34) {
      var depth20 = Math.floor(Math.random() * 20) + Math.floor(Math.random() * 10) + 1 + Math.floor(Math.random() * 6) - 2;
    }

    if (day) {
      nextEncounter = ynn.dayEncounters[depth20];
    } else {
      nextEncounter = ynn.nightEncounters[depth20];
    }
    
    encounters = encounters + "<br><h3 class=\"tightSpacing\">" +
    nextEncounter.title + "<small> pg " + nextEncounter.page + "</small></h3> <i>" + nextEncounter.stats + "</i><br><br> " + nextEncounter.description + " <br>";
  }

  if (day) {
      document.getElementById("eventText").innerHTML = "<hr class=\"tightSpacing\"><h2 class=\"tightSpacing\"> Day Event <small>(Re-roll for a Night event)</small></h2>" + eventDescription + encounters;
    } else {
      document.getElementById("eventText").innerHTML = "<hr class=\"tightSpacing\"><h2 class=\"tightSpacing\"> Night Event <small>(Re-roll for a Day event)</small></h2>" + eventDescription + encounters;
    }
}

function searchBody() {
  document.getElementById("lootBox").innerHTML = ynn.searchBody[Math.floor(Math.random() * ynn.searchBody.length)] + "<br>" + ynn.searchBody[Math.floor(Math.random() * ynn.searchBody.length)] + "<br>" + ynn.searchBody[Math.floor(Math.random() * ynn.searchBody.length)]
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
