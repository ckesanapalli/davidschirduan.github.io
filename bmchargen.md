---
layout: page
title: Bone Marshes Character Generator
permalink: bmchargen
published: true
image: /images/generatorPreview.png
---

<p>A <a href="/bone-marshes">Bone Marshes</a> character generator for <a href="https://www.drivethrurpg.com/product/250888/Knave">Knave</a> and other OSR games.</p>

<div class="buttonWrapper">
  <button class="btn btn-primary" onclick="generate()">Generate Another Character</button>
</div>

<div class="container generatorCard">
  <div class="row">
    <div class="col tightSpacing h1" id="charName">Captain Silver</div>
  </div>
  <div class="row">
		<div class="col-xl-2 col-md-4 tightSpacing h3" id="charSTR">STR: 9</div>
		<div class="col-xl-2 col-md-4 tightSpacing h3" id="charDEX">DEX: 8</div>
		<div class="col-xl-2 col-md-4 tightSpacing h3" id="charCON">CON: 7</div>
		<div class="col-xl-2 col-md-4 tightSpacing h3" id="charINT">INT: 6</div>
		<div class="col-xl-2 col-md-4 tightSpacing h3" id="charWIS">WIS: 5</div>
		<div class="col-xl-2 col-md-4 tightSpacing h3" id="charCHA">CHA: 4</div>
	</div>
  <p style="text-align: right;font-style: italic;"><small>You may swap any two ability bonuses</small></p>
  <hr class="tightSpacing">
  <p id="charHistory">
    You used to be a sea captain<br> but your crew mutinied and left.
  </p>
  <div class="row">
		<div class="col-xl-3  col-md-6 tightSpacing" id="charPhysique">Flamboyant</div>
		<div class="col-xl-3  col-md-6 tightSpacing" id="charSkin">Flamboyant</div>
		<div class="col-xl-3  col-md-6 tightSpacing" id="charFace">Flamboyant</div>
		<div class="col-xl-3  col-md-6 tightSpacing" id="charHair">Flamboyant</div>
		<div class="col-xl-3  col-md-6 tightSpacing" id="charSpeech">Flamboyant</div>
		<div class="col-xl-3  col-md-6 tightSpacing" id="charClothing">Flamboyant</div>
		<div class="col-xl-3  col-md-6 tightSpacing" id="charVirtue">Flamboyant</div>
		<div class="col-xl-3  col-md-6 tightSpacing" id="charVice">Flamboyant</div>
  </div>
  <div class="row">
    <div class="col-xl-6 col-md-9" style="border-right: 1px solid var(--border-color);">
      <h2 id="charHP" class="tightSpacing">Hit Points: 6</h2>
      <p id="charArmor">
        <strong>Armor:</strong> Fancy Hat		
      </p>
      <h2 id="charSlots" class="tightSpacing">
        Equipment: 19 Slots
      </h2>
      <p>
        You can choose from <strong>any or all</strong> of the items below to fill your inventory slots. Unless otherwise noted, each item takes up one slot. 
      </p>
      <p id="charItems">
        1 Day's Rations<br>1 Day's Rations<br>Gambeson: A12 Q3<br>Helmet: Armor+1 Q1<br>Bow: 1d6, Q3, 2H, 2 Slots<br>Quiver with 20 arrows<br>Manacles<br>Grappling Hook<br>Hourglass<br>Bottle			
      </p>
    </div>
    <div class="col-xl-6 col-md-9">
    <h2 class="tightSpacing">Starting Weapon:</h2>
      <p id="charWeapon">
        <strong>Armor:</strong> Fancy Hat		
      </p>
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

<small>Thanks to <a href="http://questingblog.com/">Ben Milton</a> for making an incredible RPG and to <a href="http://chrispwolf.com/">Christopher P. Wolf</a> for the code! For the curious I'll list some of the house-rules that Bone Marshes uses. If HP is less than 5, set it equal to 5. Renames copper to gold, just for convenience and familiarity. PCs start with equipment AND 2d6x10 gold. PCs start with a random spellbook. PCs can fit two rations per slot, to facilitate more exploration.</small>

<script>
var request = new XMLHttpRequest();
request.open("GET", "https://technicalgrimoire.com/knave.json", false);
request.send(null)
var knave = JSON.parse(request.responseText);

window.onload = generate();

function generate() {
/* ======= NAMES ======= */
document.getElementById("charName").innerText = "Name: " + knave.Names[Math.floor(Math.random()*knave.Names.length)];

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
document.getElementById("charHP").innerText = "Hit Points: " + knave.HP[Math.floor(Math.random()*knave.HP.length)];

/* ======= TRAITS ======= */
document.getElementById("charPhysique").innerHTML = "<strong>Physique</strong><br>"+ knave.Physique[Math.floor(Math.random()*knave.Physique.length)];

document.getElementById("charFace").innerHTML = "<strong>Face</strong><br>"+ knave.Face[Math.floor(Math.random()*knave.Face.length)];

document.getElementById("charSkin").innerHTML = "<strong>Skin</strong><br>"+ knave.Skin[Math.floor(Math.random()*knave.Skin.length)];

document.getElementById("charHair").innerHTML = "<strong>Hair</strong><br>"+ knave.Hair[Math.floor(Math.random()*knave.Hair.length)];

document.getElementById("charClothing").innerHTML = "<strong>Clothing</strong><br>"+ knave.Clothing[Math.floor(Math.random()*knave.Clothing.length)];

document.getElementById("charVirtue").innerHTML = "<strong>Virtue</strong><br>"+ knave.Virtues[Math.floor(Math.random()*knave.Virtues.length)];

document.getElementById("charVice").innerHTML = "<strong>Vice</strong><br>"+ knave.Vices[Math.floor(Math.random()*knave.Vices.length)];

document.getElementById("charSpeech").innerHTML = "<strong>Speech</strong><br>"+ knave.Speech[Math.floor(Math.random()*knave.Speech.length)];

/* ======= HISTORY ======= */
document.getElementById("charHistory").innerHTML = "You used to be " + 
  knave.Background[Math.floor(Math.random()*knave.Background.length)] + 
  " but then you were " + knave.Misfortune[Math.floor(Math.random()*knave.Misfortune.length)] + 
  ". Now you are a Knave: a tomb-raiding, adventure-seeking ne’er-do-well who wields a spell book just as easily as a blade.";

/* ======= WEAPONS ======= */
document.getElementById("charWeapon").innerHTML = knave.Weapons[Math.floor(Math.random()*knave.Weapons.length)];

/* ======= ARMOR ======= */
document.getElementById("charSlots").innerText = "Equipment: " + (charCON+10) + " Slots";

document.getElementById("charArmor").innerHTML = knave.Armor[Math.floor(Math.random()*knave.Armor.length)];

/* ======= EQUIPMENT ======= */
var die1 = Math.floor(Math.random() * 6) + 1;
var die2 = Math.floor(Math.random() * 6) + 1;
var startGold = die1 + die2;
startGold = startGold * 10;

document.getElementById("charItems").innerHTML = "<ul><li>" + 
  startGold + " gold (100 coins per slot)</li><li>2 days of rations</li><li>" +
  knave.Dungeoneering[Math.floor(Math.random()*knave.Dungeoneering.length)] + "</li><li>" + 
  knave.Dungeoneering[Math.floor(Math.random()*knave.Dungeoneering.length)] + "</li><li>" + 
  knave.General1[Math.floor(Math.random()*knave.General1.length)] + "</li><li>" + 
  knave.General2[Math.floor(Math.random()*knave.General2.length)] + 
  knave.ExtraArmor[Math.floor(Math.random()*knave.ExtraArmor.length)] +
  "</li><li>Spellbook - " + knave.Spells[Math.floor(Math.random()*knave.Spells.length)]; 

}
</script>