---
layout: page
title: Monster Parts Generator
permalink: monsterparts
published: true
image: /images/monsterparts.jpg
description: >
  Generate mechanically engaging OSR monsters.
comments: true
---
![monsterparts.jpg]({{sire.url}}/images/monsterparts.jpg)

This generator aims to help Game Masters comes up with mechanically engaging OSR creatures. Use these results as a starting skeleton and flesh them out with your own descriptions and lore. Put your completed monsters in the comments so we can all enjoy them!

<button id="monsterButton" class="btn btn-primary btn-lg" onclick="monster()">Generate Monster</button>


<div id="monsterCard" class="container" style="display:none;">
  <div class="row" style="justify-content: space-around !important;">
		<div class="col-md-8 col-12 tightSpacing generatorCard">
      <h2 id="creatureTitle" class="tightSpacing">Role: Blank</h2> 
      <p id="creatureRole">This part described how the Role works and what it does</p>
      <p id="creatureType">This part described how the Role works and what it does</p>
      <h3 class="tightSpacing">Trait</h3> 
      <p id="creatureTrait">This part described how the Role works and what it does</p>
      <h3 class="tightSpacing">Flaw</h3> 
      <p id="creatureFlaw">This part described how the Role works and what it does</p>
    </div>
    <div id="infoSection" class="col-md-4 col-12 tightSpacing">
      <h3 class="tightSpacing">Stat Explanations</h3> 
      <p><small><strong>Roles</strong> determine base stats and combat behaviors.</small></p>
      <p><small><strong>Types</strong> describe weaknesses and resistances shared by this family of this creature.</small></p>
      <p><small><strong>Traits</strong> are various powers and abilities the monster uses.</small></p>   
      <p><small><strong>Flaws</strong> are things the PCs can take advantage of.</small></p>   
      <p><small><i>You can contribute to the generator by <a href="https://docs.google.com/spreadsheets/d/1W7Yw_iVHe792CmeQgMg356SoxW8LCC3_oXBr3FlRdjE/edit?usp=sharing">adding to this document</a> (or simply look at all the cool options).</i></small></p>
    </div>
	</div>
</div>

<p><small><strong>Thanks to</strong> <a href="https://www.youtube.com/channel/UCvYwePdbWSEwUa-Pk02u3Zw">Ben Milton</a> for making <a href="https://www.drivethrurpg.com/product/250888/Knave">Knave</a> and <a href="https://www.drivethrurpg.com/product/197158/Maze-Rats">Maze Rats</a>, the incredible systems that these monster ideas are based around. 
Curio Solus for inspiring this idea and doing the bulk of the work. 
<a href="http://chrispwolf.com/">Christopher P. Wolf</a> for the code that inspired these generators. 
And to the <a href="https://discord.gg/kJjMvC">OSR community</a> and <a href="https://discord.gg/hUDPZu">Knave community</a> for being such an encouraging, welcoming place. 
<a href="https://www.flickr.com/photos/britishlibrary/11300855894/">Monster Image</a> from “Historisches Festbuch zur Basler Vereinigungsfeier, 1892”</small></p>

<script>
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    monsterparts = JSON.parse(this.responseText);
  }
};
xmlhttp.open("GET", "/_pages/monsterparts.json", true);
xmlhttp.send();

function monster() {

  monsterStats();
  monsterFlaw();
  monsterTrait();

  document.getElementById("monsterCard").style = "";
}

function monsterStats() {
  var role = monsterparts.Roles[Math.floor(Math.random() * monsterparts.Roles.length)];
  /*Skip the first two things, the rest are listed*/
  var descRole = "";
  for (i=2; i<role.length; i++){
    descRole = descRole + role[i] + ", ";
  }

  var type = monsterparts.Types[Math.floor(Math.random() * monsterparts.Types.length)];
  /*Skip the first two things, the rest are listed*/
  var descType = "";
  for (i=2; i<type.length; i++){
    descType = descType + type[i] + "<br>";
  }

  document.getElementById("creatureTitle").innerHTML = role[0] + " " + type[0];
  document.getElementById("creatureRole").innerHTML = descRole;
  document.getElementById("creatureType").innerHTML = descType;
}

function monsterFlaw() {
  var flaw = monsterparts.Flaws[Math.floor(Math.random() * monsterparts.Flaws.length)];

  document.getElementById("creatureFlaw").innerHTML = flaw[0] + ": " + flaw[2];
}

function monsterTrait() {
  var trait = monsterparts.Traits[Math.floor(Math.random() * monsterparts.Traits.length)];

  document.getElementById("creatureTrait").innerHTML = trait[0] + ": " + trait[2];
}

</script>