---
layout: page
title: Tempered Legacy Generators
permalink: temperedgenerators
published: true
image: /images/temperedlegacy.png
---
![temperedlegacy.png]({{site.url}}/images/temperedlegacy.png)

Tempered Legacy is a rogue-like OSR framework where you are a weapon wielded by many. Full rules, GM advice, and character sheets coming tomorrow!

<div class="row">
  <div class="col-md-6 col-12 tightSpacing buttonWrapper"><button id="weaponButton" class="btn btn-primary btn-lg" onclick="weapon()">Generate Weapon</button></div>
  <div class="col-md-6 col-12 tightSpacing buttonWrapper"><button id="wielderButton" class="btn btn-primary btn-lg" onclick="wielder()">Generate Wielder</button></div>
</div>

<div class="container generatorCard" id="weaponCard" style="display:none;">
  <h1 class="tightSpacing" id="weaponName">Silver Rapier</h1>
  <p id="weaponDesc">A simple but well-crafted blade</p>
  <h2 class="tightSpacing">Already Stored in the Weapon:</h2>
  <div class="row" style="justify-content: space-around !important;">
		<div class="col-md-5 col-12 tightSpacing p" id="weaponSpell" style="border:darkgray dashed;">Fireball</div>
		<div class="col-md-5 col-12 tightSpacing p" id="weaponTemperament" style="border:darkgray dashed;">Run to the end of the world and defeat the legion-demon Yog Soggoth who not only killed your family but all past family as well. Also you will need to return to the place of darkness and secure the shadow heart for your divine blade.</div>
  </div>
  <div class="row" style="justify-content: space-around !important;">
    <div class="col-md-5 col-12 tightSpacing p" id="weaponHistory" style="border:darkgray dashed;">Fireball</div>
  </div>
  <div class="row" style="justify-content: space-around !important;">
    <div class="col-md-5 col-12 tightSpacing p" style="border:darkgray dashed;">Empty slot. Room for a History, Temperament, or Spell from a future Wielder.</div>
    <div class="col-md-5 col-12 tightSpacing p" style="border:darkgray dashed;">Empty slot. Room for a History, Temperament, or Spell from a future Wielder.</div>
  </div>
</div>

<div class="container generatorCard" id="wielderCard" style="display:none;">
  <div class="row">
    <div class="col-xl-8 col-12 tightSpacing h1" id="charName">Click the Button!</div>
    <div class="col-xl-4 col-12 tightSpacing h1" id="charHP"></div>
  </div>
  <div class="row" style="justify-content: space-around !important;">
		<div class="col-lg-2 col-4 tightSpacing h3" id="charSTR"></div>
		<div class="col-lg-2 col-4 tightSpacing h3" id="charDEX"></div>
		<div class="col-lg-2 col-4 tightSpacing h3" id="charCON"></div>
		<div class="col-lg-2 col-4 tightSpacing h3" id="charINT"></div>
		<div class="col-lg-2 col-4 tightSpacing h3" id="charWIS"></div>
		<div class="col-lg-2 col-4 tightSpacing h3" id="charCHA"></div>
	</div>
  <hr class="tightSpacing">
  <p id="charTemperament"></p>
  <p id="charHistory"></p>
  <div class="row">
		<div class="col-lg-4 col-6 tightSpacing" id="charPhysique"></div>
		<div class="col-lg-4 col-6 tightSpacing" id="charSkin"></div>
		<div class="col-lg-4 col-6 tightSpacing" id="charFace"></div>
		<div class="col-lg-4 col-6 tightSpacing" id="charHair"></div>
		<div class="col-lg-4 col-6 tightSpacing" id="charSpeech"></div>
		<div class="col-lg-4 col-6 tightSpacing" id="charClothing"></div>
  </div>
  <div class="row">
    <div class="col-12">
      <h2 id="charSlots" class="tightSpacing"></h2>
      <p>
        You can choose from <strong>any or all</strong> of the items below to fill your inventory slots. Unless otherwise noted, each item takes up one slot. 
      </p>
      <p id="charItems"></p>
    </div>
  </div>
</div>

**Thanks to:**

 - Lauren Schirduan, the love of my life and partner in crime. 
 - [Ben Milton](https://www.youtube.com/channel/UCvYwePdbWSEwUa-Pk02u3Zw) for making Knave, Maze Rats, incredible Youtube reviews, and tons of other cool stuff. I stole SO many ideas from Ben. Chances are if you like an idea, I stole it from him.
 - [Joseph Manola](https://udan-adan.blogspot.com/) for a bunch of the strangely useful random items that Knaves can start with.
 - [Freehold games](http://www.cavesofqud.com/) for making the rogue-like I keep coming back to again and again.
 - And to the [OSR community](https://discord.gg/kJjMvC) for being such an encouraging, welcoming place.

<script>
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    tempered = JSON.parse(this.responseText);
  }
};
xmlhttp.open("GET", "/_pages/tempered.json", true);
xmlhttp.send();

function selectRandom(jsonList) {
  result = jsonList[Math.floor(Math.random() * jsonList.length)];
  if (Array.isArray(result)) {
    result = selectRandom(result);
  }
  return result;
}

function weapon() {
  document.getElementById("wielderCard").style = "display:none";
  document.getElementById("weaponCard").style = "";

  weaponName();
  weaponDesc();
  weaponThings();
}

function weaponName() {
  var nameStr = "";
  var random = Math.random();
  classicName = selectRandom(tempered.weapon.Names);

  switch (true) {
    case (random < 0.1):
      nameStr = classicName + "'s " + selectRandom(tempered.weapon.noun);
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
      nameStr = selectRandom(tempered.weapon.noun) + " but " + selectRandom(tempered.weapon.adj);
      break;
    default:
      nameStr = selectRandom(tempered.weapon.classicNames);
  }

  document.getElementById("weaponName").innerHTML = nameStr;
}

function weaponDesc() {
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

function weaponThings() {

  document.getElementById("weaponTemperament").innerHTML = "<strong>" + classicName + "'s Temperament:</strong> " + selectRandom(tempered.wielder.temperaments);

  var spellbook = "";
  var random = Math.random();

  switch (true) {
    case (random < 0.5):
      spellbook = selectRandom(tempered.wielder.Spells);
      break;
    case (random < 0.66):
      spellbook = selectRandom(tempered.wielder.spellEffects) +
        " " + selectRandom(tempered.wielder.spellForms) + "<br><i>(work with your GM to determine the details of this spell before you start playing)</i>";
      break;
    case (random < 0.82):
      spellbook = selectRandom(tempered.wielder.spellElements) +
        " " + selectRandom(tempered.wielder.spellForms) + "<br><i>(work with your GM to determine the details of this spell before you start playing)</i>";
      break;
    default:
      spellbook = selectRandom(tempered.wielder.spellEffects) +
        " " + selectRandom(tempered.wielder.spellElements) + "<br><i>(work with your GM to determine the details of this spell before you start playing)</i>";
  }

  document.getElementById("weaponSpell").innerHTML = "<strong>" + selectRandom(tempered.weapon.Names) + "'s Spell</strong> -  " + spellbook;

  document.getElementById("weaponHistory").innerHTML = "<strong>" + selectRandom(tempered.weapon.Names) + "'s History</strong>: They were " + selectRandom(tempered.wielder.Background) + ".";

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

  /* ======= Spells ======= */

  var spellbook = "";
  var random = Math.random();

  /*30% chance to start with a spellbook*/
  switch (true) {
    case (random < 0.15):
      spellbook = "<li>Spellbook - " + selectRandom(tempered.wielder.Spells) + "</li>";
      break;
    case (random < 0.2):
      spellbook = "<li>Spellbook - " + selectRandom(tempered.wielder.spellEffects) + " " + selectRandom(tempered.wielder.spellForms) + " <i>(work with your GM to determine the details of this spell before you start playing)</i></li>";
      break;
    case (random < 0.25):
      spellbook = "<li>Spellbook - " + selectRandom(tempered.wielder.spellElements) + " " + selectRandom(tempered.wielder.spellForms) + " <i>(work with your GM to determine the details of this spell before you start playing)</i></li>";
      break;
    case (random < 0.3):
      spellbook = "<li>Spellbook - " + selectRandom(tempered.wielder.spellEffects) + " " + selectRandom(tempered.wielder.spellElements) + " <i>(work with your GM to determine the details of this spell before you start playing)</i></li>";
  }

  document.getElementById("charTemperament").innerHTML = "<strong>Temperament:</strong> " + selectRandom(tempered.wielder.temperaments);

  /* ======= HISTORY ======= */
  document.getElementById("charHistory").innerHTML = "<strong>History</strong>: They were " +
    selectRandom(tempered.wielder.Background) + ".";

  /* ======= TRAITS ======= */
  document.getElementById("charPhysique").innerHTML = "<strong>Physique</strong><br>" + selectRandom(tempered.wielder.Physique);

  document.getElementById("charFace").innerHTML = "<strong>Face</strong><br>" + selectRandom(tempered.wielder.Face);

  document.getElementById("charSkin").innerHTML = "<strong>Skin</strong><br>" + selectRandom(tempered.wielder.Skin);

  var random = Math.random();
  if (random < 0.5) {
    document.getElementById("charHair").innerHTML = "<strong>Hair</strong><br>" + selectRandom(tempered.wielder.Hair);
  } else {
    document.getElementById("charHair").innerHTML = "<strong>Hair</strong><br>" + selectRandom(tempered.wielder.colors);
  }

  document.getElementById("charClothing").innerHTML = "<strong>Clothing</strong><br>" + selectRandom(tempered.wielder.Clothing);

  document.getElementById("charSpeech").innerHTML = "<strong>Speech</strong><br>" + selectRandom(tempered.wielder.Speech);

  /* ======= ARMOR ======= */
  document.getElementById("charSlots").innerText = "Equipment: " + (charCON + 10) + " Slots";

  var armor = Math.floor(Math.random() * 20) + 1;
  armorText = "";
  switch (true) {
    case (armor >= 4 && armor <= 14):
      armorText = "Gambeson (12 armor, 1 slot)</li><li>";
      break;
    case (armor >= 15 && armor <= 19):
      armorText = "Brigandine (13 armor), 2 slots)</li><li>";
      break;
    case (armor == 20):
      armorText = "Chainmail (14, 3 slots)</li><li>";
      break;
  }

  var extra = Math.floor(Math.random() * 20) + 1;
  extraArmor = "";
  switch (true) {
    case (extra >= 14 && extra <= 16):
      extraArmor = "<li>Helmet (+1 armor, 1 slot)</li>";
      break;
    case (extra >= 17 && extra <= 19):
      extraArmor = "<li>Shield (+1 armor, 1 hand, 1 slot)</li>";
      break;
    case (extra == 20):
      extraArmor = "<li>Shield (+1 armor, 1 hand, 1 slot)</li><li>Helmet (+1 armor, 1 slot)</li>";
      break;
  }

  /* ======= Junk ======= */
  var junkNum = Math.floor(Math.random() * 6) + 1;
  var junkText = "";

  for (i = 0 ; i < junkNum; i++) {
    junkText = junkText + "<li>" + selectRandom(tempered.wielder.Junk) + "</li>";
  }

  /* ======= EQUIPMENT ======= */
  var die1 = Math.floor(Math.random() * 6) + 1;
  var startGold = die1;
  startGold = startGold * 10;

  document.getElementById("charItems").innerHTML = "<ul><li>" +
  armorText +
      selectRandom(tempered.wielder.Weapons) + "</li>" + 
      extraArmor + 
    spellbook +
    "<li>" + startGold + " coins (100 coins per slot)</li>" + 
    "<li>2 days of rations</li><li>" +
    selectRandom(tempered.wielder.coreItems) + "</li><li>" +
    selectRandom(tempered.wielder.coreItems) + "</li><li>" +
    selectRandom(tempered.wielder.coreItems) + "</li>" +
    junkText;
}

</script>