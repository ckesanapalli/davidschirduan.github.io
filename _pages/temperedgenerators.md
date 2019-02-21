---
layout: page
title: Tempered Legacy Generators
permalink: temperedgenerators
published: true
image: /images/temperedlegacy.png
---
![temperedlegacy.png]({{site.url}}/images/temperedlegacy.png)

Tempered Legacy is a rogue-like OSR framework where you are a Weapon wielded by many. [**You read the rules here**](/tempered-legacy).


<div class="row">
  <div class="col-md-6 col-12 tightSpacing buttonWrapper"><button id="weaponButton" class="btn btn-primary btn-lg" onclick="weapon()">Generate Weapon</button></div>
  <div class="col-md-6 col-12 tightSpacing buttonWrapper"><button id="wielderButton" class="btn btn-primary btn-lg" onclick="wielder()">Generate Wielder</button></div>
</div>

<div class="container generatorCard" id="weaponCard" style="display:none;">
  <h1 class="tightSpacing" id="weaponName">Silver Rapier</h1>
  <p id="weaponDesc">A simple but well-crafted blade</p>
  <p style="text-align: right;font-style: italic;"><small>If you have a ranged weapon, you also find a quiver of 20 arrows/bolts (1 slot).</small></p>
  <h2 class="tightSpacing">Stored Memories</h2>
  <div class="row">
		<div class="col-md-5 col-12 tightSpacing p" id="weaponSpell" style="border:darkgray dashed;">Fireball</div>
    <div class="col tightSpacing"></div>
		<div class="col-md-6 col-12 tightSpacing p" id="weaponTemperament" style="border:darkgray dashed;">Run to the end of the world and defeat the legion-demon Yog Soggoth who not only killed your family but all past family as well. Also you will need to return to the place of darkness and secure the shadow heart for your divine blade.</div>
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
  <p id="charTemperament"></p>
  <p id="charHistory"></p>
  <div class="row">
		<div class="col-xl-4 col-md-6 tightSpacing" id="charPhysique"></div>
		<div class="col-xl-4 col-md-6 tightSpacing" id="charSkin"></div>
		<div class="col-xl-4 col-md-6 tightSpacing" id="charFace"></div>
		<div class="col-xl-4 col-md-6 tightSpacing" id="charHair"></div>
		<div class="col-xl-4 col-md-6 tightSpacing" id="charSpeech"></div>
		<div class="col-xl-4 col-md-6 tightSpacing" id="charClothing"></div>
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

function selectRandom(jsonList){
  result = jsonList[Math.floor(Math.random() * jsonList.length)];
  if (Array.isArray(result)){
    result = selectRandom(result);
  }
  return result;
}

function weapon(){
  document.getElementById("wielderCard").style = "display:none";
  document.getElementById("weaponCard").style = "";

  weaponName();
  weaponDesc();
  weaponMemories();
}

function weaponName(){
  var nameStr = "";
  var random = Math.random();

  switch (true) {
    case (random < 0.1):
      nameStr = selectRandom(tempered.weapon.Names) + "'s " + selectRandom(tempered.weapon.noun);
    break;
    case (random < 0.3):
      nameStr = selectRandom(tempered.weapon.adj) + " " + selectRandom(tempered.weapon.noun);
    break;
    case (random < 0.4):
      nameStr = selectRandom(tempered.weapon.adj) + " yet " + selectRandom(tempered.weapon.adj);
    break;
    case (random < 0.5):
      nameStr = selectRandom(tempered.weapon.adj) + " but " + selectRandom(tempered.weapon.adj);
    break;
    case (random < 0.6):
      nameStr = selectRandom(tempered.weapon.noun) + " and " + selectRandom(tempered.weapon.noun);
    break;
    case (random < 0.7):
      nameStr = selectRandom(tempered.weapon.noun) + " for " + selectRandom(tempered.weapon.noun);
    break;
    case (random < 0.8):
      nameStr = selectRandom(tempered.weapon.adj) + " for " + selectRandom(tempered.weapon.noun);
    break;
    case (random < 0.9):
      nameStr = selectRandom(tempered.weapon.adj) + " and " + selectRandom(tempered.weapon.noun);
    break;
    default:
      nameStr = selectRandom(tempered.weapon.classicNames);
  }

  document.getElementById("weaponName").innerHTML = nameStr;
}

function weaponDesc(){
  var type = Math.floor(Math.random() * 4);
  var weaponType = "<strong>";

  switch (type) {
    case (0):
      weaponType = weaponType + selectRandom(tempered.weapon.smallType) + "</strong> (d6, 1 hand, 1 slot)";
      break;
    case (1):
      weaponType = weaponType + selectRandom(tempered.weapon.mediumType) + "</strong> (d8, 1 hand, 2 slots)";
      break;
    case (2):
      weaponType = weaponType + selectRandom(tempered.weapon.largeType) + "</strong> (d10, 2 hands, 3 slots)";
      break;
    case (3):
      weaponType = weaponType + selectRandom(tempered.weapon.rangedType) + "</strong> (d6, 2 hands, 2 slots)";
      break;
  }

  document.getElementById("weaponDesc").innerHTML = "A " + weaponType + " crafted from " + selectRandom(tempered.weapon.common) + " and " + selectRandom(tempered.weapon.rare) + ". It is decorated with " + selectRandom(tempered.weapon.decorations) + ".";
}

function weaponMemories(){

  document.getElementById("weaponTemperament").innerHTML = "<strong>Temperament:</strong> " + selectRandom(tempered.wielder.temperaments);

  var spellbook = "";
  var random = Math.random();

  switch (true) {
    case (random < 0.5):
      spellbook = "<strong>Spell</strong>: " + selectRandom(tempered.wielder.Spells);
    break;
    case (random < 0.66):
      spellbook = "<strong>Spell</strong>: " + selectRandom(tempered.wielder.spellEffects) + 
      " " + selectRandom(tempered.wielder.spellForms) + " (work with your GM to determine the details of this spell before you start playing)";
    break;
    case (random < 0.82):
      spellbook = "<strong>Spell</strong>: " + selectRandom(tempered.wielder.spellElements) + 
      " " + selectRandom(tempered.wielder.spellForms) + " (work with your GM to determine the details of this spell before you start playing)";    
      break;
    default:
      spellbook = "<strong>Spell</strong>: " + selectRandom(tempered.wielder.spellElements) + 
      " " + selectRandom(tempered.wielder.spellEffects) + " (work with your GM to determine the details of this spell before you start playing)";
  }

  document.getElementById("weaponSpell").innerHTML = spellbook;
}


function wielder() {

  document.getElementById("wielderCard").style = "";
  document.getElementById("weaponCard").style = "display:none";

  /* ======= NAMES ======= */
  document.getElementById("charName").innerText = "Name: " + selectRandom(tempered.wielder.Names);

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
  var health = Math.floor(Math.random() * 8) + 1;
  document.getElementById("charHP").innerText = "Hit Points: " + health;

  /* ======= Temperaments / Spells ======= */

  var spellbook = "";
  var random = Math.random();

  switch (true) {
    case (random < 0.5):
      spellbook = "</li><li>Spellbook - " + selectRandom(tempered.wielder.Spells);
    break;
    case (random < 0.66):
      spellbook = "</li><li>Spellbook - " + selectRandom(tempered.wielder.spellEffects) + 
      " " + selectRandom(tempered.wielder.spellForms) + " (work with your GM to determine the details of this spell before you start playing)";
    break;
    case (random < 0.82):
      spellbook = "</li><li>Spellbook - " + selectRandom(tempered.wielder.spellElements) + 
      " " + selectRandom(tempered.wielder.spellForms) + " (work with your GM to determine the details of this spell before you start playing)";    
      break;
    default:
      spellbook = "</li><li>Spellbook - " + selectRandom(tempered.wielder.spellEffects) + 
      " " + selectRandom(tempered.wielder.spellElements) + " (work with your GM to determine the details of this spell before you start playing)";
  }

  document.getElementById("charTemperament").innerHTML = "<strong>Temperament:</strong> " + selectRandom(tempered.wielder.temperaments);

  /* ======= HISTORY ======= */
  document.getElementById("charHistory").innerHTML = "<strong>History</strong>: They used to be " +
    selectRandom(tempered.wielder.Background) +
    " but then they were " + 
    selectRandom(tempered.wielder.Misfortune) + ".";

  /* ======= TRAITS ======= */
  document.getElementById("charPhysique").innerHTML = "<strong>Physique</strong><br>" + selectRandom(tempered.wielder.Physique);

  document.getElementById("charFace").innerHTML = "<strong>Face</strong><br>" + selectRandom(tempered.wielder.Face);

  document.getElementById("charSkin").innerHTML = "<strong>Skin</strong><br>" + selectRandom(tempered.wielder.Skin);

  var random = Math.random();
  if (random < 0.5){
    document.getElementById("charHair").innerHTML = "<strong>Hair</strong><br>" + selectRandom(tempered.wielder.Hair);
  } else {
    document.getElementById("charHair").innerHTML = "<strong>Hair</strong><br>" + selectRandom(tempered.wielder.colors);
  }

  document.getElementById("charClothing").innerHTML = "<strong>Clothing</strong><br>" + selectRandom(tempered.wielder.Clothing);

  document.getElementById("charSpeech").innerHTML = "<strong>Speech</strong><br>" + selectRandom(tempered.wielder.Speech);

  /* ======= ARMOR ======= */
  document.getElementById("charSlots").innerText = "Equipment: " + (charCON + 10) + " Slots";

  document.getElementById("charArmor").innerHTML = selectRandom(tempered.wielder.Armor);

  /* ======= EQUIPMENT ======= */
  var die1 = Math.floor(Math.random() * 6) + 1;
  var startGold = die1;
  startGold = startGold * 10;

  document.getElementById("charItems").innerHTML = "<ul><li>" +
    startGold + " coins (100 coins per slot)</li><li>2 days of rations (2 rations per slot)</li><li>" +
    selectRandom(tempered.wielder.Dungeoneering) + "</li><li>" +
    selectRandom(tempered.wielder.Dungeoneering) + "</li><li>" +
    selectRandom(tempered.wielder.General1) + "</li><li>" +
    selectRandom(tempered.wielder.General2) + "</li><li>" + selectRandom(tempered.wielder.Weapons) + selectRandom(tempered.wielder.ExtraArmor) + spellbook;
}

</script>