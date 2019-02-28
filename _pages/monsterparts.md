---
layout: page
title: Monster Parts Generator
permalink: monsterparts
published: true
image: /images/monsterparts.jpg
description: >
  Generates mechanically engaging OSR monster encounters.
comments: true
---
![monsterparts.jpg]({{sire.url}}/images/monsterparts.jpg)

This generator aims to help Game Masters comes up with mechanically engaging OSR monster encounters. Use these results as a starting skeleton and flesh them out with your own descriptions and lore. Put your completed monsters in the comments so we can all enjoy them!

You can contribute to the generator by [adding to this document](https://docs.google.com/spreadsheets/d/1W7Yw_iVHe792CmeQgMg356SoxW8LCC3_oXBr3FlRdjE/edit?usp=sharing) _(or simply look at all the cool options)_.

<div class="row">
  <div class="col-12 tightSpacing buttonWrapper">
    <button id="monsterButton" class="btn btn-primary btn-lg" onclick="monster()">Generate Monster</button>
  </div>
</div>

<div class="container generatorCard" id="monsterCard" style="display:none;">
  <div class="row" style="justify-content: space-around !important;">
    <!--ROLES-->
		<div class="col-md-5 col-12 tightSpacing p" style="border:darkgray dashed;">
      <h3 id="roleName" class="tightSpacing">Role: Blank</h3>
      <p style="text-align: right;font-style: italic;"><small id="roleContributor">Contributed by Curio Solus</small></p> 
      <p id="roleDescription">This part described how the Role works and what it does</p>
      <p><small><i><strong>Roles</strong> determine base stats and combat behaviors.</i></small></p>
    </div>
    <!--TYPES-->
		<div class="col-md-6 col-12 tightSpacing p" id="monsterType" style="border:darkgray dashed;">
      <h3 id="typeName" class="tightSpacing">Type: Blank</h3>
      <p style="text-align: right;font-style: italic;"><small id="typeContributor">Contributed by Curio Solus</small></p> 
      <p id="typeDescription">This part described how the Role works and what it does</p>
      <p><small><i><strong>Types</strong> describe weaknesses and resistances shared by this family of this creature.</i></small></p>
    </div>
    <!--WEAKNESSES-->
		<div class="col-md-5 col-12 tightSpacing p" id="monsterWeakness" style="border:darkgray dashed;">
      <h3 id="weaknessName" class="tightSpacing">Weakness: Blank</h3>
      <p style="text-align: right;font-style: italic;"><small id="weaknessContributor">Contributed by Curio Solus</small></p> 
      <p id="weaknessDescription">This part described how the Role works and what it does</p>
      <p><small><i><strong>Weaknesses</strong> allow PCs to quickly damage/disable/destroy this monster.</i></small></p>
    </div>
    <!--TRAITS-->
		<div class="col-md-6 col-12 tightSpacing p" id="monsterTrait" style="border:darkgray dashed;">
      <h3 id="traitName" class="tightSpacing">Trait: Blank</h3>
      <p style="text-align: right;font-style: italic;"><small id="traitContributor">Contributed by Curio Solus</small></p> 
      <p id="traitDescription">This part described how the Role works and what it does</p>
      <p><small><i><strong>Traits</strong> are various powers and abilities the monster uses.</i></small></p>
    </div>      
  </div>
</div>

**Thanks to:**

 - [Ben Milton](https://www.youtube.com/channel/UCvYwePdbWSEwUa-Pk02u3Zw) for making [Knave](https://www.drivethrurpg.com/product/250888/Knave) and [Maze Rats](https://www.drivethrurpg.com/product/197158/Maze-Rats), the incredible systems that these monster ideas are based around.
 - Curio Solus for inspiring this idea and doing the bulk of the work.
 - [Christopher P. Wolf](http://chrispwolf.com/) for the code that inspired these generators.
 - And to the [OSR community](https://discord.gg/kJjMvC) and [Knave community](https://discord.gg/hUDPZu) for being such an encouraging, welcoming place.
 - [Monster Image](https://www.flickr.com/photos/britishlibrary/11300855894/) from "Historisches Festbuch zur Basler Vereinigungsfeier, 1892"

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

  monsterRole();
  monsterType();
  monsterWeakness();
  monsterTrait();

  document.getElementById("monsterCard").style = "";
}

function monsterRole() {
  var role = monsterparts.Roles[Math.floor(Math.random() * monsterparts.Roles.length)];

  document.getElementById("roleName").innerHTML = "Role: " + role[0];
  document.getElementById("roleContributor").innerHTML =  "Contributed by " + role[1];

  /*Skip the first two things, the rest are listed*/
  var desc = "";
  for (i=2; i<role.length; i++){
    desc = desc + role[i] + "<br>";
  }

  document.getElementById("roleDescription").innerHTML = desc;
}

function monsterType() {
  var type = monsterparts.Types[Math.floor(Math.random() * monsterparts.Types.length)];

  document.getElementById("typeName").innerHTML = "Type: " + type[0];
  document.getElementById("typeContributor").innerHTML =  "Contributed by " + type[1];

  /*Skip the first two things, the rest are listed*/
  var desc = "";
  for (i=2; i<type.length; i++){
    desc = desc + type[i] + "<br>";
  }

  document.getElementById("typeDescription").innerHTML = desc;
}

function monsterWeakness() {
  var weakness = monsterparts.Weaknesses[Math.floor(Math.random() * monsterparts.Weaknesses.length)];

  document.getElementById("weaknessName").innerHTML = "Weakness: " +weakness[0];
  document.getElementById("weaknessContributor").innerHTML = "Contributed by " + weakness[1];
  document.getElementById("weaknessDescription").innerHTML = weakness[2];
}

function monsterTrait() {
  var trait = monsterparts.Traits[Math.floor(Math.random() * monsterparts.Traits.length)];

  document.getElementById("traitName").innerHTML = "Trait: " +trait[0];
  document.getElementById("traitContributor").innerHTML = "Contributed by " + trait[1];
  document.getElementById("traitDescription").innerHTML = trait[2];
}

</script>