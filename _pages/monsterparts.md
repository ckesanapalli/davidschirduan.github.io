---
layout: page
title: Monster Parts Generator
permalink: monsterparts
published: true
image: /images/monsterparts.jpg
description: >
  Generate unique creatures.
comments: true
---
![monsterparts.jpg]({{sire.url}}/images/monsterparts.jpg)

This generator aims to help Game Masters come up with unique creatures. Use these results as a starting skeleton and flesh them out with your own descriptions and lore. Put your completed monsters in the comments so we can all enjoy them!

<button id="monsterButton" class="btn btn-primary btn-lg" onclick="monster()">Generate Monster</button>

<div id="monsterCard" class="container" style="display:none;">
  <div class="row" style="justify-content: space-around !important;">
		<div class="col-12 tightSpacing generatorCard">
      <h2 id="creatureTitle" class="tightSpacing">Role: Blank</h2>
      <p id="traitDesc">This part described how the Role works and what it does</p>
      <p id="flawDesc">This part described how the Role works and what it does</p>
		  <p class="tightSpacing" id="roleDesc"></p>
		  <p class="tightSpacing" id="typeDesc"></p>
    </div>
	</div>
</div>
<p><small>You can contribute to the generator by <a href="https://docs.google.com/spreadsheets/d/1W7Yw_iVHe792CmeQgMg356SoxW8LCC3_oXBr3FlRdjE/edit?usp=sharing">adding to this document</a> (or simply look at all the cool options).</small></p>
<p><small>Thanks to Curio Solus for inspiring this idea and doing the bulk of the work. 
<a href="http://chrispwolf.com/">Christopher P. Wolf</a> for the code that inspired these generators. And to the <a href="https://discord.gg/kJjMvC">OSR community</a> and <a href="https://discord.gg/hUDPZu">Knave community</a> for being such an encouraging, welcoming place. 
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

  document.getElementById("monsterCard").style = "";

  /*0 = name
    1 = descr
    2 = contr*/

  var role = monsterparts.Roles[Math.floor(Math.random() * monsterparts.Roles.length)];
  var type = monsterparts.Types[Math.floor(Math.random() * monsterparts.Types.length)];
  var trait = monsterparts.Traits[Math.floor(Math.random() * monsterparts.Traits.length)];
  var flaw = monsterparts.Flaws[Math.floor(Math.random() * monsterparts.Flaws.length)];

  document.getElementById("creatureTitle").innerHTML = role[0] + " " + type[0];

  document.getElementById("roleDesc").innerHTML = role[1];
  document.getElementById("typeDesc").innerHTML = type[1];

  /*If contributor blank, don't show*/
  traitCont = trait[1];

  if (traitCont != ""){
    traitCont = "<small><br> - Contributed by " + trait[1] + "</small>";
  }

  flawCont = flaw[1];

  if (flawCont != ""){
    flawCont = "<small><br> - Contributed by " + flaw[1] + "</small>";
  }
  
  
  
  document.getElementById("traitDesc").innerHTML = "<strong>Trait:</strong> " + trait[0] + traitCont;
  

  document.getElementById("flawDesc").innerHTML =  "<strong>Flaw:</strong> " + flaw[0] + flawCont;

}

</script>