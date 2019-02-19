---
layout: page
title: Tempered Legacy Generators
permalink: temperedgenerators
published: true
image: /images/wyrdhuntgenerator.png
---

Tempered Legacy is a framework for running your fantasy adventure games in a [rogue-like](https://en.wikipedia.org/wiki/Roguelike) way. Old-school adventure games are lethal by design. With this framework players can keep their "character" through multiple adventures, campaigns, and deaths. It's also an easy way to connect adventures that might otherwise be in different worlds/realities.

* [**Rules**](/tempered-legacy)
* [**Character Sheets**](/linkhere)

<div class="row">
  <div class="col-md-6 col-6 tightSpacing buttonWrapper"><button id="weaponButton" class="btn btn-primary btn-lg" onclick="weapon()">Generate Weapon</button></div>
  <div class="col-md-6 col-6 tightSpacing buttonWrapper"><button id="wielderButton" class="btn btn-primary btn-lg" onclick="wielder()">Generate Wielder</button></div>
</div>

<div class="container generatorCard" id="weaponCard" style="display:none;">
  <h1 class="tightSpacing" id="weaponName">Silver Rapier</h1>
  <p id="weaponDesc">A simple but well-crafted blade</p>
  <p style="text-align: right;font-style: italic;"><small>If you have a ranged weapon, you also find a quiver of 20 arrows/bolts (1 slot).</small></p>
  <h2 class="tightSpacing">Stored Memories</h2>
  <div class="row">
		<div class="col tightSpacing p" id="weaponSkill" style="border:darkgray dashed;">Climbing</div>
		<div class="col-auto tightSpacing p"></div>
		<div class="col tightSpacing p" id="weaponSpell" style="border:darkgray dashed;">Fireball</div>
		<div class="col-12 tightSpacing p" id="weaponGoal" style="border:darkgray dashed;">Run to the end of the world and defeat the legion-demon Yog Soggoth who not only killed your family but all past family as well. Also you will need to return to the place of darkness and secure the shadow heart for your divine blade.</div>
  </div>
</div>

<div class="container generatorCard" id="wielderCard" style="display:none;">
  <div class="row">
    <div class="col tightSpacing h1" id="charName">Click the Button!</div>
  </div>
  <div class="row">
		<div class="col-xl-2 col-md-4 tightSpacing h3" id="charSTR"></div>
		<div class="col-xl-2 col-md-4 tightSpacing h3" id="charDEX"></div>
		<div class="col-xl-2 col-md-4 tightSpacing h3" id="charCON"></div>
		<div class="col-xl-2 col-md-4 tightSpacing h3" id="charINT"></div>
		<div class="col-xl-2 col-md-4 tightSpacing h3" id="charWIS"></div>
		<div class="col-xl-2 col-md-4 tightSpacing h3" id="charCHA"></div>
	</div>
  <hr class="tightSpacing">
  <p id="charGoal"><strong>Goal:</strong> Seek revenge for your failed fashion sense.</p>
  <p id="charSkill"><strong>Skill:</strong> Jump higher than most.</p>
  <div class="row">
		<div class="col-xl-3 col-md-6 tightSpacing" id="charPhysique"></div>
		<div class="col-xl-3 col-md-6 tightSpacing" id="charSkin"></div>
		<div class="col-xl-3 col-md-6 tightSpacing" id="charFace"></div>
		<div class="col-xl-3 col-md-6 tightSpacing" id="charHair"></div>
		<div class="col-xl-3 col-md-6 tightSpacing" id="charSpeech"></div>
		<div class="col-xl-3 col-md-6 tightSpacing" id="charClothing"></div>
		<div class="col-xl-3 col-md-6 tightSpacing" id="charVirtue"></div>
		<div class="col-xl-3 col-md-6 tightSpacing" id="charVice"></div>
  </div>
  <div class="row">
    <div class="col-12">
      <h2 id="charHP" class="tightSpacing"></h2>
      <p id="charArmor"></p>
      <h2 id="charSlots" class="tightSpacing"></h2>
      <p>
        You can choose from <strong>any or all</strong> of the items below to fill your inventory slots. Unless otherwise noted, each item takes up one slot. 
      </p>
      <p id="charItems"></p>
    </div>
  </div>
</div>

<small>Thanks to <a href="http://questingblog.com/">Ben Milton</a> for making an incredible RPG and to <a href="http://chrispwolf.com/">Christopher P. Wolf</a> for the code!</small>

<script>
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    tempered = JSON.parse(this.responseText);
  }
};
xmlhttp.open("GET", "/_pages/tempered.json", true);
xmlhttp.send();

function weapon() {
  document.getElementById("wielderCard").style = "display:none";
  document.getElementById("weaponCard").style = "";

  weaponName();
  weaponDesc();
  weaponMemories();

}

/**
20% - Name's noun
20% - adj noun
10% - adj yet adj
5% - adj but adj
5% - adj so adj
10% - noun so adj
5% - noun and noun
5% - noun for noun
5% - adj and noun
5% - adj for noun
10% - classic
**/
function weaponName(){
  var nameStr = "";
  var random = Math.random();

  switch (true) {
    case (random < 0.1):
      nameStr = tempered.weapon.Names[Math.floor(Math.random() * tempered.weapon.Names.length)] + "'s " + tempered.weapon.noun[Math.floor(Math.random() * tempered.weapon.noun.length)];
    break;
    case (random < 0.3):
      nameStr = tempered.weapon.adj[Math.floor(Math.random() * tempered.weapon.adj.length)] + " " + tempered.weapon.noun[Math.floor(Math.random() * tempered.weapon.noun.length)];
    break;
    case (random < 0.4):
      nameStr = tempered.weapon.adj[Math.floor(Math.random() * tempered.weapon.adj.length)] + " yet " + tempered.weapon.adj[Math.floor(Math.random() * tempered.weapon.adj.length)];
    break;
    case (random < 0.5):
      nameStr = tempered.weapon.adj[Math.floor(Math.random() * tempered.weapon.adj.length)] + " but " + tempered.weapon.adj[Math.floor(Math.random() * tempered.weapon.adj.length)];
    break;
    case (random < 0.6):
      nameStr = tempered.weapon.noun[Math.floor(Math.random() * tempered.weapon.noun.length)] + " and " + tempered.weapon.noun[Math.floor(Math.random() * tempered.weapon.noun.length)];
    break;
    case (random < 0.7):
      nameStr = tempered.weapon.noun[Math.floor(Math.random() * tempered.weapon.noun.length)] + " for " + tempered.weapon.noun[Math.floor(Math.random() * tempered.weapon.adj.length)];
    break;
    case (random < 0.8):
      nameStr = tempered.weapon.adj[Math.floor(Math.random() * tempered.weapon.adj.length)] + " for " + tempered.weapon.noun[Math.floor(Math.random() * tempered.weapon.noun.length)];
    break;
    case (random < 0.9):
      nameStr = tempered.weapon.adj[Math.floor(Math.random() * tempered.weapon.adj.length)] + " and " + tempered.weapon.noun[Math.floor(Math.random() * tempered.weapon.noun.length)];
    break;
    default:
      nameStr = tempered.weapon.classicNames[Math.floor(Math.random() * tempered.weapon.classicNames.length)];
  }

  document.getElementById("weaponName").innerHTML = nameStr;
}


function weaponDesc(){

  document.getElementById("weaponDesc").innerHTML = "A " + 
  tempered.weapon.types[Math.floor(Math.random() * tempered.weapon.types.length)] + 
  " crafted from " + 
  tempered.weapon.common[Math.floor(Math.random() * tempered.weapon.common.length)] +
  " and " +
  tempered.weapon.rare[Math.floor(Math.random() * tempered.weapon.rare.length)] +
  ". It is decorated with " + 
  tempered.weapon.decorations[Math.floor(Math.random() * tempered.weapon.decorations.length)] +
  ".";

}

function weaponMemories(){
  document.getElementById("weaponGoal").innerHTML = "<strong>Goal:</strong> " + tempered.wielder.goals[Math.floor(Math.random() * tempered.wielder.goals.length)];

  document.getElementById("weaponSkill").innerHTML = "<strong>Skill:</strong> " + tempered.wielder.skills[Math.floor(Math.random() * tempered.wielder.skills.length)];

  document.getElementById("weaponSpell").innerHTML = "<strong>Spell:</strong> " + tempered.wielder.Spells[Math.floor(Math.random() * tempered.wielder.Spells.length)];
}


function wielder() {

  document.getElementById("wielderCard").style = "";
  document.getElementById("weaponCard").style = "display:none";

  /* ======= NAMES ======= */
  document.getElementById("charName").innerText = "Name: " + tempered.wielder.Names[Math.floor(Math.random() * tempered.wielder.Names.length)];

  /* ======= STATS ======= */
  var die1 = Math.floor(Math.random() * 6) + 1;
  var die2 = Math.floor(Math.random() * 6) + 1;
  var die3 = Math.floor(Math.random() * 6) + 1;
  document.getElementById("charSTR").innerText = "STR: " + Math.min(die1, die2, die3);
  var die1 = Math.floor(Math.random() * 6) + 1;
  var die2 = Math.floor(Math.random() * 6) + 1;
  var die3 = Math.floor(Math.random() * 6) + 1;
  document.getElementById("charDEX").innerText = "DEX: " + Math.min(die1, die2, die3);
  var die1 = Math.floor(Math.random() * 6) + 1;
  var die2 = Math.floor(Math.random() * 6) + 1;
  var die3 = Math.floor(Math.random() * 6) + 1;
  var charCON = Math.min(die1, die2, die3);
  document.getElementById("charCON").innerText = "CON: " + charCON;
  var die1 = Math.floor(Math.random() * 6) + 1;
  var die2 = Math.floor(Math.random() * 6) + 1;
  var die3 = Math.floor(Math.random() * 6) + 1;
  document.getElementById("charINT").innerText = "INT: " + Math.min(die1, die2, die3);
  var die1 = Math.floor(Math.random() * 6) + 1;
  var die2 = Math.floor(Math.random() * 6) + 1;
  var die3 = Math.floor(Math.random() * 6) + 1;
  document.getElementById("charWIS").innerText = "WIS: " + Math.min(die1, die2, die3);
  var die1 = Math.floor(Math.random() * 6) + 1;
  var die2 = Math.floor(Math.random() * 6) + 1;
  var die3 = Math.floor(Math.random() * 6) + 1;
  document.getElementById("charCHA").innerText = "CHA: " + Math.min(die1, die2, die3);

  /* ======= HP ======= */
  document.getElementById("charHP").innerText = "Hit Points: " + tempered.wielder.HP[Math.floor(Math.random() * tempered.wielder.HP.length)];

  /* ======= Goals / Skills ======= */

  document.getElementById("charGoal").innerHTML = "<strong>Goal:</strong> " + tempered.wielder.goals[Math.floor(Math.random() * tempered.wielder.goals.length)];

  document.getElementById("charSkill").innerHTML = "<strong>Skill:</strong> " + tempered.wielder.skills[Math.floor(Math.random() * tempered.wielder.skills.length)];

  /* ======= TRAITS ======= */
  document.getElementById("charPhysique").innerHTML = "<strong>Physique</strong><br>" + tempered.wielder.Physique[Math.floor(Math.random() * tempered.wielder.Physique.length)];

  document.getElementById("charFace").innerHTML = "<strong>Face</strong><br>" + tempered.wielder.Face[Math.floor(Math.random() * tempered.wielder.Face.length)];

  document.getElementById("charSkin").innerHTML = "<strong>Skin</strong><br>" + tempered.wielder.Skin[Math.floor(Math.random() * tempered.wielder.Skin.length)];

  document.getElementById("charHair").innerHTML = "<strong>Hair</strong><br>" + tempered.wielder.Hair[Math.floor(Math.random() * tempered.wielder.Hair.length)];

  document.getElementById("charClothing").innerHTML = "<strong>Clothing</strong><br>" + tempered.wielder.Clothing[Math.floor(Math.random() * tempered.wielder.Clothing.length)];

  document.getElementById("charVirtue").innerHTML = "<strong>Virtue</strong><br>" + tempered.wielder.Virtues[Math.floor(Math.random() * tempered.wielder.Virtues.length)];

  document.getElementById("charVice").innerHTML = "<strong>Vice</strong><br>" + tempered.wielder.Vices[Math.floor(Math.random() * tempered.wielder.Vices.length)];

  document.getElementById("charSpeech").innerHTML = "<strong>Speech</strong><br>" + tempered.wielder.Speech[Math.floor(Math.random() * tempered.wielder.Speech.length)];

  /* ======= ARMOR ======= */
  document.getElementById("charSlots").innerText = "Equipment: " + (charCON + 10) + " Slots";

  document.getElementById("charArmor").innerHTML = tempered.wielder.Armor[Math.floor(Math.random() * tempered.wielder.Armor.length)];

  /* ======= EQUIPMENT ======= */
  var die1 = Math.floor(Math.random() * 6) + 1;
  var die2 = Math.floor(Math.random() * 6) + 1;
  var startGold = die1 + die2;
  startGold = startGold * 10;

  document.getElementById("charItems").innerHTML = "<ul><li>" +
    startGold + " coins (100 coins per slot)</li><li>2 days of rations (2 rations per slot)</li><li>" +
    tempered.wielder.Dungeoneering[Math.floor(Math.random() * tempered.wielder.Dungeoneering.length)] + "</li><li>" +
    tempered.wielder.Dungeoneering[Math.floor(Math.random() * tempered.wielder.Dungeoneering.length)] + "</li><li>" +
    tempered.wielder.General1[Math.floor(Math.random() * tempered.wielder.General1.length)] + "</li><li>" +
    tempered.wielder.General2[Math.floor(Math.random() * tempered.wielder.General2.length)] + "</li><li>" + tempered.wielder.Weapons[Math.floor(Math.random() * tempered.wielder.Weapons.length)] +
    tempered.wielder.ExtraArmor[Math.floor(Math.random() * tempered.wielder.ExtraArmor.length)] +
    "</li><li>Spellbook - " + tempered.wielder.Spells[Math.floor(Math.random() * tempered.wielder.Spells.length)];
}

</script>