---
layout: page
title: Stygian Library Generator
permalink: stygiangenerator
published: true
image: /images/ynngenerator.png
---
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
    <div class="tightSpacing h3" id="locationTitle">The Stygian Library</div>
    <p id="locationDesc">Books are condensed collections of knowledge, and knowledge is power. As any physicist will tell you, power is a function of energy, and energy and mass are interchangeable, and enough mass warps space time. Knowledge is power. Power corrupts. The more power, the more it corrupts. Sufficient knowledge twists the world around it into strange shapes.<br>Put enough books in one place, and they distort the world. Space bends in on itself, forming a sort of wormhole, linking the library to other libraries likewise afflicted. The space between is a sort of pocket realm, budded off from reality, maintained by the sheer power of books.</p>
  </div>

  <div id="detail" class="tabcontent">
    <div class="tightSpacing h3" id="detailTitle"><a href="https://www.drivethrurpg.com/product/257113/The-Stygian-Library">Buy
        it here</a></div>
    <p id="detailDesc">Created by Emmy Allen, the book is beautifully written and criminally underpriced. After you've bought a copy of the book, you can use the buttons above to generate locations and events.<br><br><i>I....I like this one better than <a href="/david/extremely-interesting-adventures#gardens-of-ynn">Ynn</a>. I just do. No reason....</i></p>
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
  <div class="col-md-4 col-6 tightSpacing buttonWrapper"><button class="btn-wide btn btn-primary btn-lg" onclick="books()">5 Books</button></div>
  <div class="col-md-4 col-6 tightSpacing buttonWrapper"><button class="btn-wide btn btn-primary btn-lg" onclick="findTreasure()">Treasure!</button></div>
  <div class="col-md-4 col-6 tightSpacing buttonWrapper"><button class="btn-wide btn btn-primary btn-lg" onclick="searchRoom()">Search Room</button></div>
  <div class="col-md-8 col-12 tightSpacing buttonWrapper"><button class="btn-wide btn btn-primary btn-lg" onclick="extraBooks()">Extraordinary Book</button></div>
</div>

<div class="container generatorCard">
  <div class="row">
    <div class="col tightSpacing h4" id="lootBox">Click the buttons to generate some loot.</div>
  </div>
</div>

<small>Thanks to <a href="https://www.patreon.com/EmmyCavegirlAllen/overview/">Emmy Allen</a> for making such a beautiful world and to <a href="http://chrispwolf.com/">Christopher P. Wolf</a> for the code!</small>

<script>
var currentLayer = -1;
var stygian;
var visitor = true;

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    stygian = JSON.parse(this.responseText);
  }
};
xmlhttp.open("GET", "/stygian.json", true);
xmlhttp.send();

function buttonDeeper() {
  document.getElementById("pastLocations").innerHTML = document.getElementById("pastLocations").innerHTML + document.getElementById("locationTitle").innerHTML + ", " + document.getElementById("detailTitle").innerHTML + "<br>";
  library("deeper");
}

function buttonHigher() {
  document.getElementById("pastLocations").innerHTML = document.getElementById("pastLocations").innerHTML + document.getElementById("locationTitle").innerHTML + ", " + document.getElementById("detailTitle").innerHTML + "<br>";
  library("higher");
}

function library(direction) {
  /*increase to the next Layer*/

  var nextLocation = Math.floor(Math.random() * 20) + currentLayer;
  var nextDetail = Math.floor(Math.random() * 20) + currentLayer;

  document.getElementById("eventText").innerHTML = "";

  switch (true) {
    case (nextLocation >= 34):
      nextLocation = Math.floor(Math.random() * 20) + Math.floor(Math.random() * 12) + 1 + 2;
      document.getElementById("locationDesc").innerHTML = stygian.locations[nextLocation].description;
      break;
    default:
      document.getElementById("locationDesc").innerHTML = stygian.locations[nextLocation].description;
  }

  switch (true) {
    case (nextDetail >= 34):
      nextDetail = 34;
      document.getElementById("locationDesc").innerHTML = stygian.details[nextDetail].description;
      break;
    default:
      document.getElementById("detailDesc").innerHTML = stygian.details[nextDetail].description;
  }

	/*Need to adjust current layer AFTER calculations*/
  if (direction == "higher"){
    currentLayer--;
  if (currentLayer < 0){
  currentLayer = 0;
  }
  } else {
  currentLayer++;
  }
  
  document.getElementById("locationTitle").innerHTML = currentLayer + ". " + stygian.locations[nextLocation].title + " <small>pg " + stygian.locations[nextLocation].page + "</small>";
  document.getElementById("detailTitle").innerHTML = stygian.details[nextDetail].title + " <small>pg " + stygian.details[nextDetail].page + "</small>";
}

function d12Button() {
  newEvent(12, visitor);
  visitor = !visitor;
}

function d20Button() {
  newEvent(20, visitor);
  visitor = !visitor;
}
function newEvent(dice, visitor) {
  var nextEvent = Math.floor(Math.random() * dice);
  var eventDescription = stygian.events[nextEvent].description;
  var encounters = "<br>";
  var nextEncounter;

  for (i = 0; i < stygian.events[nextEvent].encounters; i++) {
    var depth20 = Math.floor(Math.random() * 20) + currentLayer;

    if (depth20 >= 34) {
      var depth20 = Math.floor(Math.random() * 20) + Math.floor(Math.random() * 10) + 1 + Math.floor(Math.random() * 6) - 2;
    }

    if (visitor) {
      nextEncounter = stygian.visitorEncounters[depth20];
    } else {
      nextEncounter = stygian.intruderEncounters[depth20];
    }
    
    encounters = encounters + "<br><h3 class=\"tightSpacing\">" +
    nextEncounter.title + "<small> pg " + nextEncounter.page + "</small></h3> <i>" + nextEncounter.stats + "</i><br><br> " + nextEncounter.description + " <br>";
  }

  if (visitor) {
      document.getElementById("eventText").innerHTML = "<hr class=\"tightSpacing\"><h2 class=\"tightSpacing\"> Visitor Event <small>(Re-roll for an Intruder event)</small></h2>" + eventDescription + encounters;
    } else {
      document.getElementById("eventText").innerHTML = "<hr class=\"tightSpacing\"><h2 class=\"tightSpacing\"> Intruder Event <small>(Re-roll for a Visitor event)</small></h2>" + eventDescription + encounters;
    }
}

function searchBody() {
  document.getElementById("lootBox").innerHTML = stygian.searchBody[Math.floor(Math.random() * stygian.searchBody.length)] + "<br>" + stygian.searchBody[Math.floor(Math.random() * stygian.searchBody.length)] + "<br>" + stygian.searchBody[Math.floor(Math.random() * stygian.searchBody.length)]
}

function searchRoom() {
  document.getElementById("lootBox").innerHTML = stygian.searchRoom[Math.floor(Math.random() * stygian.searchRoom.length)];
}

function findTreasure() {
  var treasureRoll = Math.floor(Math.random() * 20) + currentLayer;
  switch (true) {
    case (treasureRoll < 0):
      document.getElementById("lootBox").innerHTML = stygian.treasure[0];
      break;
    case (treasureRoll >= 34):
      document.getElementById("lootBox").innerHTML = stygian.treasure[Math.floor(Math.random() * 20) + Math.floor(Math.random() * 10) + 1 + Math.floor(Math.random() * 6) - 2] + "<br>" + stygian.treasure[Math.floor(Math.random() * 20) + Math.floor(Math.random() * 10) + 1 + Math.floor(Math.random() * 6) - 2] + "<br>" + stygian.treasure[Math.floor(Math.random() * 20) + Math.floor(Math.random() * 10) + 1 + Math.floor(Math.random() * 6) - 2];
      break;
    default:
      document.getElementById("lootBox").innerHTML = stygian.treasure[treasureRoll];
  }
}

function books() {
  document.getElementById("lootBox").innerHTML = stygian.books[Math.floor(Math.random() * stygian.books.length)] + ", " + stygian.books[Math.floor(Math.random() * stygian.books.length)] + ", " + stygian.books[Math.floor(Math.random() * stygian.books.length)] + ", " + stygian.books[Math.floor(Math.random() * stygian.books.length)] + ", " + stygian.books[Math.floor(Math.random() * stygian.books.length)];
}

function extraBooks() {
  document.getElementById("lootBox").innerHTML = stygian.extraordinaryBooks[Math.floor(Math.random() * stygian.extraordinaryBooks.length)];
}
</script>