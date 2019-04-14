var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    blb = JSON.parse(this.responseText);
  }
};
xmlhttp.open("GET", "/_pages/leftburied.json", true);
xmlhttp.send();

function generate() {

  var name = blb.LeftBuried.Names[Math.floor(Math.random() * blb.LeftBuried.Names.length)];
  document.getElementById("charName").innerHTML = "Name: " + name;

  var stats = blb.LeftBuried.Stats[Math.floor(Math.random() * blb.LeftBuried.Stats.length)];
  document.getElementById("charBR").innerHTML = "+" + stats[0] + " Brawn";
  document.getElementById("charWIT").innerHTML = "+" + stats[1] + " Wit";
  document.getElementById("charWILL").innerHTML = "+" + stats[2] + " Will";

  var vigour = parseInt(stats[0],10) + 6;
  var grip = parseInt(stats[2], 10) + 4;
  document.getElementById("charGRI").innerHTML = "Grip: " + grip;
  document.getElementById("charVIG").innerHTML = "Vigour: " + vigour;

  var career = blb.LeftBuried.Careers[Math.floor(Math.random() * blb.LeftBuried.Careers.length)];
  document.getElementById("charCareer").innerHTML = "You used to be " + career + ", but it didn't pan out...";

  var archs = Object.keys(blb.LeftBuried.Archetypes);
  var archetype = archs[Math.floor(Math.random() * archs.length)];
  var advs = blb.LeftBuried.Archetypes[archetype];
  var advancement = advs[Math.floor(Math.random() * advs.length)];
  console.log(advancement);
  var advancementText = blb.LeftBuried.Advancements[advancement];
  document.getElementById("charARCH").innerHTML = archetype;
  document.getElementById("archText").innerHTML = "<strong>" + advancement + ":</strong><br>" + advancementText;


  var weapon1 = "weapon";
  var weapon2 = "weapon";

  while (weapon1 == weapon2){
  var weaponTypes = Object.keys(blb.LeftBuried.Weapons);
  var weapon1type = weaponTypes[Math.floor(Math.random() * weaponTypes.length)];
  weapon1 = blb.LeftBuried.Weapons[weapon1type][Math.floor(Math.random() * blb.LeftBuried.Weapons[weapon1type].length)];
  var weapon2type = weaponTypes[Math.floor(Math.random() * weaponTypes.length)];
  weapon2 = blb.LeftBuried.Weapons[weapon2type][Math.floor(Math.random() * blb.LeftBuried.Weapons[weapon2type].length)];
  }

  var equipTypes = Object.keys(blb.LeftBuried.Equipment);
  var equip1type = equipTypes[Math.floor(Math.random() * equipTypes.length)];
  var equip1 = blb.LeftBuried.Equipment[equip1type][Math.floor(Math.random() * blb.LeftBuried.Equipment[equip1type].length)];
  var equip2type = equipTypes[Math.floor(Math.random() * equipTypes.length)];
  var equip2 = blb.LeftBuried.Equipment[equip2type][Math.floor(Math.random() * blb.LeftBuried.Equipment[equip2type].length)];
  var equip3type = equipTypes[Math.floor(Math.random() * equipTypes.length)];
  var equip3 = blb.LeftBuried.Equipment[equip3type][Math.floor(Math.random() * blb.LeftBuried.Equipment[equip3type].length)];

  document.getElementById("charItems").innerHTML = "<ul>" + 
  "<li>50 Ft Rope</li><li>3 Torches</li><li>Backpack</li><li>Bedroll</li><li>A week of Rations</li><li>Basic armour</li>" +
  "<li>" + weapon1 + "</li>" +
    "<li>" + weapon2 + "</li>" +
      "<li>" + equip1 + "</li>" +
        "<li>" + equip2 + "</li>" +
          "<li>" + equip3 + "</li></ul>";


  document.getElementById("leftburiedCard").style = "display:block";
}