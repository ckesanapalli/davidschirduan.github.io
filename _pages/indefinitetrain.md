---
layout: page
title: The Indefinite Train
permalink: indefinitetrain
published: false
image: /images/indefinitetrain.png
description: >
  An infinite train made of community-crafted carriages.
---

There's a giant train that passes through many worlds. Everyone writes a one-page dungeon carriage using a template. The carriages get stitched together to make a sort of randomly generated segmented megadungeon, suitable for drop-in games, travel between worlds, or extremely random encounters. 

This amazing idea came from [Skerples](https://coinsandscrolls.blogspot.com/2019/03/osr-indefinite-train-community-project.html) and the carriages were created by the OSR Community!


<div class="row">
  <div class="col-md-6 col-12 tightSpacing buttonWrapper"><button id="linkButton" class="btn btn-primary btn-lg" onclick="location.href='https://coinsandscrolls.blogspot.com/2019/03/osr-indefinite-train-community-project.html'">Learn More</button></div>
  <div class="col-md-6 col-12 tightSpacing buttonWrapper"><button id="wielderButton" class="btn btn-primary btn-lg" onclick="cars()">Generate Train</button></div>
</div>


<div id="trainCard" style="display:none;"></div>

Trains have to be added to this generator manually. <br /> Ping [@davidschirduan](https://twitter.com/DavidSchirduan) if any are missing!

Photo by [Roland Lösslein](https://unsplash.com/photos/DmDYX_ltI48?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on Unsplash.

<script>
/*
To update the Train IDs, open up skerples train folder: 
https://drive.google.com/drive/folders/1VVITqjOQLiF_B499bA7ouloqAd4qUpfO?usp=sharing

For each carriage, click on it.
  In the top right click "open in new window"
  Copy the url into the list

*/

var car = "";
var trainHTML = "";

function cars(){

trainURLs=[
"https://drive.google.com/file/d/1_gFaC0bp-Ju1btY3R4e9U8c_9MWb_V6j/view",
"https://drive.google.com/file/d/146OFmicCLq-mgrX8vgN__yd_u8vtcqhk/view",
"https://drive.google.com/file/d/1ni8xPU_FWR-Y0AkgwlWexp7y9JSr0B48/view",
"https://drive.google.com/file/d/1KAoBq1VUUtOEUZvLAhRkn_hlgknjWstR/view",
"https://drive.google.com/file/d/1UbC9uR3j7eTNaD4yvYZ1yclFK-DWEkhm/view",
"https://drive.google.com/file/d/1aMGx5pRmLokPnhvpjjP6XiRozKSMjPNK/view",
"https://drive.google.com/file/d/1sSHQhnrpUf9Pe9WSoD0IK2HSlytLFZRI/view",
"https://drive.google.com/file/d/1t_ciwZbjFsw4yp33lS3J0KZRAiPeTZPx/view",
"https://drive.google.com/file/d/1SmBngRL2EQd8kcpQE6LAAOavLBM-wObY/view",
];

for(i in trainURLs){

  car = trainURLs.splice(Math.floor(Math.random()*trainURLs.length), 1);
  console.log(car);
  console.log(trainURLs);
  car = car[0].replace("https://drive.google.com/file/d/", "");
  car = car.replace("/view", "");
  trainHTML = trainHTML + 
    "<div class='pdf-container'><iframe src=\"https://drive.google.com/file/d/" +
    car + "/preview\"></iframe></div>";

}

document.getElementById("trainCard").innerHTML = trainHTML;

document.getElementById("trainCard").style = "";
}

</script>

