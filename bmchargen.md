---
layout: page
title: Bone Marshes Character Generator
permalink: bmchargen
published: true
image: /images/generatorPreview.png
---

<p>A <a href="/bone-marshes">Bone Marshes</a> character generator for <a href="https://www.drivethrurpg.com/product/250888/Knave">Knave</a> and other OSR games.</p>

<div class="buttonWrapper">
  <button class="btn btn-primary" onclick="newCharacter()">Generate Another Character</button>
</div>

<div class="container characterCard">
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
  <hr class="tightSpacing">
  <div class="row">
    <div class="col-xl-6 col-md-9">
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

function newCharacter() {
  location.reload();
}
/* ======= NAMES ======= */
var Names = [ 
  "Dim","Ira","Lash","Vague","Flem","Ail","Toxen","Koff","Dewy","Misty","Sopp","Drip","Graydon","Agatha","Eldon","Fossil","Richter","Pearl","Gilden","Millia","Poba","Sully","Scrub","Tatter","Hugo","Larga","Jumbo","Mondo","Runt","Teena","Pinta","Wheetle","Zip","Shyan","Fidget","Jitter","August","Narsis","Braggen","Trumpet","Sharp","Brainy","Keen","Canny","Tax","Vex","Curie","Meddle","Boyle","Shrieka","Tirade","Vement","Stammer","Chichi","Bungle","Sputter","Slick","Allure","Glib","Dear","Frank","Cathy","Candid","Gab","","Lance","Scout","Rant","Grunt","Cash","Merelda","Wage","Monet","Mac","Ginny","Swallow","Swig","Richard","Patricia","Lofty","Gilden","Mark","Ruby","Spot","Trace","Buzz","Tattle","Sland","Prate","Doc","Kit","Kwak","Bones","Bane","Malvara","Malek","Nafeera","Skip","Lady","Chevron","Doyan","Hunter","Veil","Slayton","Drak","Matt","Allie","Buddy","Crony","Champ","Hera","Diana","Perseus","Wulf","Oracle","Evoka","Ovate","Rob","Frisk","Crook","Klept","Astro","Marge","Auger","Sear","Shep","Vicka","Vine","Lama"
];
var randomItem = Names[Math.floor(Math.random()*Names.length)];
document.getElementById("charName").innerText = "Name: " + randomItem;

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
var HP = [ 
  "5","5","5","5","5","6","7","8"
];
var randomItem = HP[Math.floor(Math.random()*HP.length)];
document.getElementById("charHP").innerText = "Hit Points: " + randomItem;

/* ======= TRAITS ======= */
var Physique = [ 
  "Athletic","Brawny","Corpulent","Delicate","Gaunt","Hulking","Lanky","Ripped","Rugged","Scrawny","Short","Sinewy","Slender","Flabby","Statuesque","Stout","Tiny","Towering","Willowy","Wiry"
];
document.getElementById("charPhysique").innerHTML = "<strong>Physique</strong><br>"+ Physique[Math.floor(Math.random()*Physique.length)];

var Face = [ 
  "Bloated","Blunt","Bony","Chiseled","Delicate","Elongated","Patrician","Pinched","Hawkish","Broken","Impish","Narrow","Ratlike","Round","Sunken","Sharp","Soft","Square","Wide","Wolfish"
];
document.getElementById("charFace").innerHTML = "<strong>Face</strong><br>"+ Face[Math.floor(Math.random()*Face.length)];

var Skin = [ 
  "Battle Scar","Birthmark","Burn Scar","Dark","Makeup","Oily","Pale","Perfect","Pierced","Pockmarked","Reeking","Tattooed","Rosy","Rough","Sallow","Sunburned","Tanned","War Paint","Weathered","Whip Scar"
];
document.getElementById("charSkin").innerHTML = "<strong>Skin</strong><br>"+ Skin[Math.floor(Math.random()*Skin.length)];

var Hair = [ 
  "Bald","Braided","Bristly","Cropped","Curly","Disheveled","Dreadlocks","Filthy","Frizzy","Greased","Limp","Long","Luxurious","Mohawk","Oily","Ponytail","Silky","Topknot","Wavy","Wispy"
];
document.getElementById("charHair").innerHTML = "<strong>Hair</strong><br>"+ Hair[Math.floor(Math.random()*Hair.length)];

var Clothing = [ 
  "Antique","Bloody","Ceremonial","Decorated","Eccentric","Elegant","Fashionable","Filthy","Flamboyant","Stained","Foreign","Frayed","Frumpy","Livery","Oversized","Patched","Perfumed","Rancid","Torn","Undersized"
];
document.getElementById("charClothing").innerHTML = "<strong>Clothing</strong><br>"+ Clothing[Math.floor(Math.random()*Clothing.length)];

var Virtues = [ 
  "Ambitious","Cautious","Courageous","Courteous","Curious","Disciplined","Focused","Generous","Gregarious","Honest","Honorable","Humble","Idealistic","Just","Loyal","Merciful","Righteous","Serene","Stoic","Tolerant"
];
document.getElementById("charVirtue").innerHTML = "<strong>Virtue</strong><br>"+ Virtues[Math.floor(Math.random()*Virtues.length)];

var Vices = [ 
  "Aggressive","Arrogant","Bitter","Cowardly","Cruel","Deceitful","Flippant","Gluttonous","Greedy","Irascible","Lazy","Nervous","Prejudiced","Reckless","Rude","Suspicious","Vain","Vengeful","Wasteful","Whiny"
];
document.getElementById("charVice").innerHTML = "<strong>Vice</strong><br>"+ Vices[Math.floor(Math.random()*Vices.length)];

var Speech = [ 
  "Blunt","Booming","Breathy","Cryptic","Drawling","Droning","Flowery","Formal","Gravelly","Hoarse","Mumbling","Precise","Quaint","Rambling","Rapid-fire","Dialect","Slow","Squeaky","Stuttering","Whispery"
];
document.getElementById("charSpeech").innerHTML = "<strong>Speech</strong><br>"+ Speech[Math.floor(Math.random()*Speech.length)];

/* ======= HISTORY ======= */
var Background = [ 
  "an alchemist","a beggar","a butcher","a burglar","a charlatan","a cleric","a cook","a cultist","a gambler","an herbalist","a magician","a mariner","a mercenary","a merchant","an outlaw","a performer","a pickpocket","a smuggler","a student","a tracker"
];
var Misfortune = [
  "abandoned","addicted","blackmailed","condemned","cursed","defrauded","demoted","discredited","disowned","exiled","framed","haunted","kidnapped","mutilated","poor","pursued","rejected","replaced","robbed","suspected"
];
document.getElementById("charHistory").innerHTML = "You used to be " + 
  Background[Math.floor(Math.random()*Background.length)] + 
  " but then you were " + Misfortune[Math.floor(Math.random()*Misfortune.length)] + 
  ". Now you are a Knave: a tomb-raiding, adventure-seeking ne’er-do-well who wields a spell book just as easily as a blade.";

/* ======= WEAPONS ======= */
var Weapons = [ 
  "<strong>Dagger</strong> (d6, 1 hand, 1 slot)","<strong>Cudgel</strong> (d6, 1 hand, 1 slot)","<strong>Sickle</strong> (d6, 1 hand, 1 slot)","<strong>Staff</strong> (d6, 1 hand, 1 slot)","<strong>Baton</strong> (d6, 1 hand, 1 slot)","<strong>Sword</strong> (d8, 1 hand, 2 slots)","<strong>Spear</strong> (d8, 1 hand, 2 slots)","<strong>Flail</strong> (d8, 1 hand, 2 slots)","<strong>Axe</strong> (d8, 1 hand, 2 slots)","<strong>Mace</strong> (d8, 1 hand, 2 slots)","<strong>Longsword</strong> (d10, 2 hands, 3 slots)","<strong>Battle Axe</strong> (d10, 2 hands, 3 slots)","<strong>Warhammer</strong> (d10, 2 hands, 3 slots)","<strong>Halberd</strong> (d10, 2 hands, 3 slots)","<strong>Guandao</strong> (d10, 2 hands, 3 slots)","<strong>5 Throwing Knives</strong> <br>(d6, 1 hand, 5 per slot)","<strong>5 Darts</strong> (d6, 1 hand, 5 per slot)","<strong>5 Throwing Axes</strong> <br>(d6, 1 hand, 5 per slot)","<strong>Sling</strong> (d4, 1 slot) <br>and a bag of 20 stones (1 slot)","<strong>Sling</strong> (d4, 1 slot) <br>and a bag of 20 stones (1 slot)","<strong>Bow</strong> (d6, 2 hands, 2 slots) <br>and a quiver of 20 arrows (1 slot)","<strong>Bow</strong> (d6, 2 hands, 2 slots) <br>and a quiver of 20 arrows (1 slot)","<strong>Bow</strong> (d6, 2 hands, 2 slots) <br>and a quiver of 20 arrows (1 slot)","<strong>Crossbow</strong> (d8, 2 hands, 3 slots) <br>and a pack of 20 bolts (1 slot)","<strong>Crossbow</strong> (d8, 2 hands, 3 slots) <br>and a pack of 20 bolts (1 slot)","<strong>Crossbow</strong> (d8, 2 hands, 3 slots) <br>and a pack of 20 bolts (1 slot)"
];
document.getElementById("charWeapon").innerHTML = Weapons[Math.floor(Math.random()*Weapons.length)];


/* ======= ARMOR ======= */
document.getElementById("charSlots").innerText = "Equipment: " + (charCON+10) + " Slots";

var Armor = [
  "<strong>Armor:</strong> None (11)",
  "<strong>Armor:</strong> None (11)",
  "<strong>Armor:</strong> None (11)",
  "<strong>Armor:</strong> Gambeson (12, 1 slot)",
  "<strong>Armor:</strong> Gambeson (12, 1 slot)",
  "<strong>Armor:</strong> Gambeson (12, 1 slot)",
  "<strong>Armor:</strong> Gambeson (12, 1 slot)",
  "<strong>Armor:</strong> Gambeson (12, 1 slot)",
  "<strong>Armor:</strong> Gambeson (12, 1 slot)",
  "<strong>Armor:</strong> Gambeson (12, 1 slot)",
  "<strong>Armor:</strong> Gambeson (12, 1 slot)",
  "<strong>Armor:</strong> Gambeson (12, 1 slot)",
  "<strong>Armor:</strong> Gambeson (12, 1 slot)",
  "<strong>Armor:</strong> Gambeson (12, 1 slot)",
  "<strong>Armor:</strong> Brigandine (13, 2 slots)",
  "<strong>Armor:</strong> Brigandine (13, 2 slots)",
  "<strong>Armor:</strong> Brigandine (13, 2 slots)",
  "<strong>Armor:</strong> Brigandine (13, 2 slots)",
  "<strong>Armor:</strong> Brigandine (13, 2 slots)",
  "<strong>Armor:</strong> Chainmail (14, 3 slots)"
];
document.getElementById("charArmor").innerHTML = Armor[Math.floor(Math.random()*Armor.length)];

var ExtraArmor = [
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "</li><li>Helmet (+1 armor, 1 slot)",
  "</li><li>Helmet (+1 armor, 1 slot)",
  "</li><li>Helmet (+1 armor, 1 slot)",
  "</li><li>Shield (+1 armor, 1 hand, 1 slot)",
  "</li><li>Shield (+1 armor, 1 hand, 1 slot)",
  "</li><li>Shield (+1 armor, 1 hand, 1 slot)",
  "</li><li>Shield (+1 armor, 1 hand, 1 slot)</li><li>Helmet (+1 armor, 1 slot)"
];

/* ======= EQUIPMENT ======= */

var Dungeoneering = [
  "Rope, 50ft","Pulleys","Candles, 5","Chain, 10ft","Chalk, 10","Crowbar","Tinderbox","Grap. hook","Hammer","Waterskin","Lantern","Lamp oil","Padlock","Manacles","Mirror","Pole, 10ft","Sack","Tent","Spikes, 5","Torches, 5"
];
var General1 = [
  "Air bladder","Bear trap","Shovel","Bellows","Grease","Saw","Bucket","Caltrops","Chisel","Drill","Fishing rod","Marbles","Glue","Pick","Hourglass","Net","Tongs","Lockpicks","Metal file","Nails"
];
var General2 = [
  "Incense","Sponge","Lens","Perfume","Horn","Bottle","Soap","Spyglass","Tar pot","Twine","Fake jewels","Blank book","Card deck","Dice set","Cook pots","Face paint","Whistle","Instrument","Quill & Ink","Small bell"
];

/* ======= SPELLS ======= */
var Spells =[
  "Adhere: Object is covered in extremely sticky slime.","Animate Object: Object obeys your commands as best it can. It can walk 15ft per round.","Auditory Illusion: You create illusory sounds that seem to come from a direction of your choice.","Beast Form: You and your possessions transform into a mundane animal.","Befuddle: L creatures of your choice are unable to form new short-term memories for the duration of the spell.","Bend Fate: Roll L+1 d20s. Whenever you must roll a d20 after casting the spell, you must choose and then discard one of the rolled results until they are all gone.","Body Swap: You switch bodies with a creature you touch. If one body dies, the other dies as well.","Command: A creature obeys a single, three-word command that does not harm it.","Control Plants: Nearby plants and trees obey you and gain the ability to move at 5 feet per round.","Deafen: All nearby creatures are deafened.","Disassemble: Any of your body parts may be detached and reattached at will, without causing pain or damage. You can still control them.","Displace: An object appears to be up to L×10ft from its actual position.","Elemental Wall: A straight wall of ice or fire L×40ft long and 10ft high rises from the ground.","Frenzy: L creatures erupt in a frenzy of violence.","Gravity Shift: You can change the direction of gravity (for yourself only) up to once per round.","Haste: Your movement speed is tripled.","Hover: An object hovers, frictionless, 2ft above the ground. It can hold up to L humanoids.","Icy Touch: A thick ice layer spreads across a touched surface, up to L×10ft in radius.","Illuminate: A floating light moves as you command.","Increase Gravity: The gravity in an area triples.","Invisible Tether: Two objects within 10ft of each other cannot be moved more than 10ft apart.","Leap: You can jump up to L×10ft in the air.","Liquid Air: The air around you becomes swimmable.","Manse: A sturdy, furnished cottage appears for L×12 hours. You can permit and forbid entry to it at will.","Marble Madness: Your pockets are full of marbles, and will refill every round.","Miniaturize: You and L other touched creatures are reduced to the size of a mouse.","Mirror Image: L illusory duplicates of yourself appear under your control.","Multiarm: You gain L extra arms.","Night Sphere: An L×40ft wide sphere of darkness displaying the night sky appears.","Objectify: You become any inanimate object between the size of a grand piano and an apple.","Ooze Form: You become a living jelly.","Pacify: L creatures have an aversion to violence.","Psychometry: The referee answers L yes or no questions about a touched object.","Raise Dead: L skeletons rise from the ground to serve you. They are incredibly stupid and can only obey simple orders.","Repel: L+1 objects are strongly magnetically repelled from each other if they come within 10 feet.","Shroud: L creatures are invisible until they move.","Smoke Form: Your body becomes living smoke.","Spider Climb: You can climb surfaces like a spider.","Swarm: You become a swarm of crows, rats, or piranhas. You only take damage from area effects.","Telekinesis: You may mentally move L items.","Telepathy: L+1 creatures can hear each other’s thoughts, no matter how far apart they move.","Teleport: An object disappears and reappears on the ground in a visible, clear area up to L×40ft away.","Thaumaturgic Anchor: Object becomes the target of every spell cast near it.","Thicket: A thicket of trees and dense brush up to L×40ft wide suddenly sprouts up.","Time Rush: Time in a 40ft bubble starts moving 10 times faster.","Time Slow: Time in a 40ft bubble slows to 10%.","Vision: You completely control what a creature sees.","Ward: A silver circle 40ft across appears on the ground. Choose one thing that cannot cross it: Living creatures, dead creatures, projectiles or metal.","Web: Your wrists can shoot thick webbing.","Wizard Mark: Your finger can shoot a stream of ulfire-colored paint. This paint is only visible to you, and can be seen at any distance, even through solid objects."
];

var die1 = Math.floor(Math.random() * 6) + 1;
var die2 = Math.floor(Math.random() * 6) + 1;
var startGold = die1 + die2;
startGold = startGold * 10;

document.getElementById("charItems").innerHTML = "<ul><li>" + 
  startGold + " gold (100 coins per slot)</li><li>2 days of rations</li><li>" +
  Dungeoneering[Math.floor(Math.random()*Dungeoneering.length)] + "</li><li>" + 
  Dungeoneering[Math.floor(Math.random()*Dungeoneering.length)] + "</li><li>" + 
  General1[Math.floor(Math.random()*General1.length)] + "</li><li>" + 
  General2[Math.floor(Math.random()*General2.length)] + 
  ExtraArmor[Math.floor(Math.random()*ExtraArmor.length)] +
  "</li><li>Spellbook - " + Spells[Math.floor(Math.random()*Spells.length)]; 

</script>