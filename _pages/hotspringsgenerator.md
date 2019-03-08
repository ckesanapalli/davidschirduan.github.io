---
layout: page
title: Hot Springs Generator
permalink: hotspringsgenerator
published: false
image: /images/stygiangenerator.png
description: >
  A mobile-friendly generator for the Stygian Library.
---

<div class="row">
  <div class="col-md-3 col-6 tightSpacing buttonWrapper"><button class="btn btn-primary btn-lg" onclick="Overland('Mountainous')">Mountainous</button></div>
</div>

<div class="container generatorCard" id="Mountainous" style="margin-bottom: 30px;display:none;">

  <div class="tab">
    <button class="tablinks" onclick="openTab(event, 'location')" id="defaultOpen">Overland</button>
    <button class="tablinks" onclick="openTab(event, 'detail')">Detail</button>
    <button class="tablinks" onclick="openTab(event, 'past')">Past Visited</button>
    <button class="tablinks" onclick="openTab(event, 'past')">Past Visited</button>
  </div>

  <div id="location" class="tabcontent">
    <div class="tightSpacing h3" id="encounterTitle">The Stygian Library</div>
    <p id="encounterDesc"></p>
  </div>

  <div id="detail" class="tabcontent">
    <div class="tightSpacing h3" id="detailTitle"><a href="https://www.drivethrurpg.com/product/257113/The-Stygian-Library">Buy
        it here</a></div>
    <p id="detailDesc"></p>
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

<script>
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    hsi = JSON.parse(this.responseText);
  }
};
xmlhttp.open("GET", "/_pages/hsi.json", true);
xmlhttp.send();

function threedsix (jsonList){
  /*We don't add +1 because we'll be referencing tables, which start at 0*/
  var diceSum = Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6);

  result = jsonList[diceSum];
  if (Array.isArray(result)) {
    result = threedsix(result);
  }

  return result;
}

function Overland(regionName) {

  console.log("Region: " + regionName);

  document.getElementById("Mountainous").style = "";

  type = threedsix(hsi.regionTables[regionName]);

  console.log("Type: " + type);

  creature = threedsix(hsi[type][regionName]);

  console.log("Creature: " + creature);

 switch (creature) {
    case ("Adventurer"):
      console.log("Name: " + hsi.Intelligent[creature][Math.floor(Math.random() * hsi.Intelligent[creature].length)];
      break;
    case ("Fuegonauts"):
    case ("Night Axe"):
    case ("Lizardmen"):
    case ("Nereid"):
    case ("Vyderac"):
      var diceSum = Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6);
      for (units in hsi.Intelligent[creature]){
        console.log("Name: " + units);
        console.log("Number: " + hsi.Intelligent[creature][units][diceSum]);
      }
      break;
    default:
      creatureInfo = hsi.creatureDetails[creature];
      console.log("Name: " + creature);
      console.log("Info: " + creatureInfo);

 }


}





</script>