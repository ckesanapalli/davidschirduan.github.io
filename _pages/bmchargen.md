---
layout: page
title: Bone Marshes Character Generator
permalink: bmchargen
published: true
image: /images/posts/bonemarshes_KS.jpg
---
![bonemarshes_KS.jpg]({{site.url}}/images/posts/bonemarshes_KS.jpg)

<p>A <a href="/bone-marshes">Bone Marshes</a> character generator for <a href="https://www.drivethrurpg.com/product/250888/Knave">Knave</a> and other OSR games.</p>

<div class="tightSpacing buttonWrapper">
  <button class="btn btn-lg btn-primary" onclick="generate()">Generate Another Character</button>
</div>

<div class="container generatorCard" id="bmCard" style="display:none;">
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
  <p style="text-align: right;font-style: italic;"><small>You may swap any two ability bonuses</small></p>
  <hr class="tightSpacing">
  <p id="charHistory"></p>
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
    <div class="col-xl-6 col-md-9" style="border-right: 1px solid var(--border-color);">
      <h2 id="charHP" class="tightSpacing"></h2>
      <p id="charArmor"></p>
      <h2 id="charSlots" class="tightSpacing"></h2>
      <p>
        You can choose from <strong>any or all</strong> of the items below to fill your inventory slots. Unless otherwise noted, each item takes up one slot. 
      </p>
      <p id="charItems"></p>
    </div>
    <div class="col-xl-6 col-md-9">
    <h2 class="tightSpacing">Starting Weapon:</h2>
      <p id="charWeapon"></p>
    <h2 class="tightSpacing">Or choose another:</h2>
      <ul>
        <li>Small Melee (d6, 1 hand, 1 slot)</li>
        <li>Medium (d8, 1 hand, 2 slots)</li>
        <li>Large (d10, 2 hands, 3 slots)</li>
        <li>Thrown Weapons (d6, 5 per slot)</li>
        <li>Sling (d4, 1 slot)<br>and a bag of 20 stones (1 slot)</li>
        <li>Bow (d6, 2 hands, 2 slots)<br>and a quiver of 20 arrows (1 slot)</li>
        <li>Crossbow (d8, 2 hands, 3 slots)<br>and a pack of 20 bolts (1 slot)</li>
      </ul> 
    </div>
  </div>
</div>

<small>Thanks to <a href="http://questingblog.com/">Ben Milton</a> for making an incredible RPG and to <a href="http://chrispwolf.com/">Christopher P. Wolf</a> for the code! For the curious I'll list some of the house-rules that Bone Marshes uses. If HP is less than 4, set it equal to 4. Renames copper to coins, just for convenience and familiarity. PCs start with equipment AND 2d6x10 coins. PCs start with a random spellbook. PCs can fit two rations per slot, to facilitate more exploration.</small>

<script>
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      knave = JSON.parse(this.responseText);
    }
  };
  xmlhttp.open("GET", "/_pages/knave.json", true);
  xmlhttp.send(); 

function generate() {

  document.getElementById("bmCard").style = "";


  /* ======= NAMES ======= */
  document.getElementById("charName").innerText = "Name: " + knave.Names[Math.floor(Math.random() * knave.Names.length)];

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
  document.getElementById("charHP").innerText = "Hit Points: " + knave.HP[Math.floor(Math.random() * knave.HP.length)];

  /* ======= TRAITS ======= */
  document.getElementById("charPhysique").innerHTML = "<strong>Physique</strong><br>" + knave.Physique[Math.floor(Math.random() * knave.Physique.length)];

  document.getElementById("charFace").innerHTML = "<strong>Face</strong><br>" + knave.Face[Math.floor(Math.random() * knave.Face.length)];

  document.getElementById("charSkin").innerHTML = "<strong>Skin</strong><br>" + knave.Skin[Math.floor(Math.random() * knave.Skin.length)];

  document.getElementById("charHair").innerHTML = "<strong>Hair</strong><br>" + knave.Hair[Math.floor(Math.random() * knave.Hair.length)];

  document.getElementById("charClothing").innerHTML = "<strong>Clothing</strong><br>" + knave.Clothing[Math.floor(Math.random() * knave.Clothing.length)];

  document.getElementById("charVirtue").innerHTML = "<strong>Virtue</strong><br>" + knave.Virtues[Math.floor(Math.random() * knave.Virtues.length)];

  document.getElementById("charVice").innerHTML = "<strong>Vice</strong><br>" + knave.Vices[Math.floor(Math.random() * knave.Vices.length)];

  document.getElementById("charSpeech").innerHTML = "<strong>Speech</strong><br>" + knave.Speech[Math.floor(Math.random() * knave.Speech.length)];

  /* ======= HISTORY ======= */
  document.getElementById("charHistory").innerHTML = "You used to be " +
    knave.Background[Math.floor(Math.random() * knave.Background.length)] +
    " but then you were " + knave.Misfortune[Math.floor(Math.random() * knave.Misfortune.length)] +
    ". Now you are a Knave: a tomb-raiding, adventure-seeking ne’er-do-well who wields a spell book just as easily as a blade.";

  /* ======= WEAPONS ======= */
  document.getElementById("charWeapon").innerHTML = knave.Weapons[Math.floor(Math.random() * knave.Weapons.length)];

  /* ======= ARMOR ======= */
  document.getElementById("charSlots").innerText = "Equipment: " + (charCON + 10) + " Slots";

  document.getElementById("charArmor").innerHTML = knave.Armor[Math.floor(Math.random() * knave.Armor.length)];

  /* ======= EQUIPMENT ======= */
  var die1 = Math.floor(Math.random() * 6) + 1;
  var die2 = Math.floor(Math.random() * 6) + 1;
  var startGold = die1 + die2;
  startGold = startGold * 10;

  document.getElementById("charItems").innerHTML = "<ul><li>" +
    startGold + " coins (100 coins per slot)</li><li>2 days of rations (2 rations per slot)</li><li>" +
    knave.Dungeoneering[Math.floor(Math.random() * knave.Dungeoneering.length)] + "</li><li>" +
    knave.Dungeoneering[Math.floor(Math.random() * knave.Dungeoneering.length)] + "</li><li>" +
    knave.General1[Math.floor(Math.random() * knave.General1.length)] + "</li><li>" +
    knave.General2[Math.floor(Math.random() * knave.General2.length)] +
    knave.ExtraArmor[Math.floor(Math.random() * knave.ExtraArmor.length)] +
    "</li><li>Spellbook - " + knave.Spells[Math.floor(Math.random() * knave.Spells.length)];
}
</script>