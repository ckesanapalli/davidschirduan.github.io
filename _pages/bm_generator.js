/** TODO: 
 * Add all the images
 * Expand the text descriptions of each creature
 */

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    bm = JSON.parse(this.responseText);
  }
};
xmlhttp.open("GET", "/_pages/bm_generator.json", true);
xmlhttp.send();

function rollStats(){
      var die1 = Math.floor(Math.random() * 6) + 1;
      var die2 = Math.floor(Math.random() * 6) + 1;
      var die3 = Math.floor(Math.random() * 6) + 1;
      return Math.min(die1, die2, die3);
}

function selectRandom(jsonList) {
  result = jsonList[Math.floor(Math.random() * jsonList.length)];
  if (Array.isArray(result)) {
    result = selectRandom(result);
  }
  return result;
}

  function generate() {

    document.getElementById("charName").innerText = "Name: " + selectRandom(bm.Names);

    /* ======= STATS ======= */
    document.getElementById("charSTR").innerText = "STR: " + rollStats();
    document.getElementById("charDEX").innerText = "DEX: " + rollStats();
    var charCON = rollStats(); //so we can save it for inventory space
    document.getElementById("charCON").innerText = "CON: " + charCON;
    document.getElementById("charINT").innerText = "INT: " + rollStats();
    document.getElementById("charWIS").innerText = "WIS: " + rollStats();
    document.getElementById("charCHA").innerText = "CHA: " + rollStats();

    document.getElementById("charHP").innerText = "Hit Points: " + selectRandom(bm.HP);

    document.getElementById("charPhysique").innerHTML = "<strong>Physique</strong><br>" + selectRandom(bm.Physique);
    document.getElementById("charFace").innerHTML = "<strong>Face</strong><br>" + selectRandom(bm.Face);
    document.getElementById("charSkin").innerHTML = "<strong>Skin</strong><br>" + selectRandom(bm.Skin);
    document.getElementById("charHair").innerHTML = "<strong>Hair</strong><br>" + selectRandom(bm.Hair);
    document.getElementById("charClothing").innerHTML = "<strong>Clothing</strong><br>" + selectRandom(bm.Clothing);
    document.getElementById("charVirtue").innerHTML = "<strong>Virtue</strong><br>" + selectRandom(bm.Virtues);
    document.getElementById("charVice").innerHTML = "<strong>Vice</strong><br>" + selectRandom(bm.Vices);
    document.getElementById("charSpeech").innerHTML = "<strong>Speech</strong><br>" + selectRandom(bm.Speech);
    document.getElementById("charSmell").innerHTML = "<strong>Smell</strong><br>" + selectRandom(bm.Smell);
    
    var allergy = selectRandom(bm.Allergy);
    while (allergy.includes("Roll twice more")) {
      allergy = selectRandom(bm.Allergy) + " <br>and " + selectRandom(bm.Allergy);
    }
    document.getElementById("charAllergy").innerHTML = "<strong>Allergy</strong><br>" + allergy;

    /* ======= HISTORY ======= */
    document.getElementById("charHistory").innerHTML = "You used to be " +
      selectRandom(bm.Background) +
      " but then you were " + selectRandom(bm.Misfortune) +
      ". Now you are a knave: a tomb-raiding, adventure-seeking ne’er-do-well who wields a spell book just as easily as a blade.";

    /* ======= EQUIPMENT ======= */
    var die1 = Math.floor(Math.random() * 6) + 1;
    var die2 = Math.floor(Math.random() * 6) + 1;
    var startGold = die1 + die2;
    startGold = startGold * 10;

    var memento = selectRandom(bm.Memento);
    if (memento == "A random Lost Thing"){
      memento = selectRandom(bm.lostThings);
    }

    document.getElementById("charEquip").innerText = "Equipment (" + (charCON+10) + " Slots)";

    document.getElementById("charItems").innerHTML = "<ul>" +
      "<li><strong>Weapon:</strong> " + selectRandom(bm.Weapons) + " </li>" +
      "<li><strong>Armor:</strong> " + selectRandom(bm.Armor) + "</li>" +
      selectRandom(bm.ExtraArmor) + 
      "<li>" + startGold + " coins (100 coins per slot)</li>"+
      "<li>2 Rations (2 per slot)</li>" +
      "<li>" + selectRandom(bm.Dungeoneering) + "</li>" +
      "<li>" + selectRandom(bm.Dungeoneering) + "</li>" +
      "<li>" + selectRandom(bm.General1) + "</li>" +
      "<li>" + selectRandom(bm.General2) + "</li>" +
      "<li>" + memento + "</li></ul>";

  document.getElementById("charCard").style = "display:block";
  document.getElementById("lostCard").style = "display:none";
  }

  function lost(){
  document.getElementById("above").innerHTML = bm.lostThings[Math.floor(Math.random() * 29)];
  document.getElementById("under").innerHTML = bm.lostThings[Math.floor(Math.random() * 29) + 30];
  document.getElementById("silfer").innerHTML = bm.lostThings[Math.floor(Math.random() * 29) + 60];

  document.getElementById("lostCard").style = "display:block";
  document.getElementById("charCard").style = "display:none";

  }

