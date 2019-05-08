---
layout: page
title: Bone Marshes Character Generator
permalink: bmchargen
published: true
image: /images/posts/bonemarshes_KS.jpg
description: >
  Mobile-friendly character generator for Bone Marshes.
---
![bonemarshes_KS.jpg]({{site.url}}/images/posts/bonemarshes_KS.jpg)

The Bone Marshes is a tabletop adventure about getting lost. It’s tailor-made for groups that enjoy exploring complex spaces and drawing maps. Compatible with [Knave](https://www.drivethrurpg.com/product/250888/Knave).

[**Buy a copy of Bone Marshes here!**](/bone-marshes)

<div class="row centerButtons">
  <div class="col-md-6 col-12">
    <button id="CharButton" class="btn bonemarshes-btn" onclick="generate()">
      <h3>Generate Character</h3>
    </button>
  </div>
  <div class="col-md-6 col-12">
    <button id="lostButton" class="btn bonemarshes-btn" onclick="lost()">
      <h3>Lost Things</h3>
    </button>
  </div>
</div>

<div class="container bonemarshesCard" id="lostCard">
  <p><i>Words in italics are secrets that can be uncovered with experimentation or while camping.</i></p>
  <div class="row">
		<div class="col-md-4 col-12"><h3>Aboveground</h3><p id="above"></p></div>
		<div class="col-md-4 col-12"><h3>Underground</h3><p id="under"></p></div>
		<div class="col-md-4 col-12"><h3>Silfer</h3><p id="silfer"></p></div>
  </div>
</div>

<div class="container bonemarshesCard" id="charCard">
  <div class="row">
		<div class="col-md-6 col-12"><h2 id="charName"></h2></div>
		<div class="col-md-3 col-6"><h3 id="charHP"></h3></div>
		<div class="col-md-3 col-6"><h3>Lvl: 1</h3></div>
  </div>
  <p id="charHistory"></p>
  <div class="row">
  	<div class="col-md-3 col-6" id="charVirtue"></div>
		<div class="col-md-3 col-6" id="charVice"></div>
		<div class="col-md-3 col-6" id="charPhysique"></div>
		<div class="col-md-3 col-6" id="charSkin"></div>
		<div class="col-md-3 col-6" id="charFace"></div>
		<div class="col-md-3 col-6" id="charHair"></div>
		<div class="col-md-3 col-6" id="charSpeech"></div>
		<div class="col-md-3 col-6" id="charClothing"></div>
		<div class="col-md-6 col-6" id="charSmell"></div>
		<div class="col-md-6 col-6" id="charAllergy"></div>
	</div>
  <hr>
  <div class="row">
		<div class="col-md col-6"><h3 id="charSTR"></h3></div>
		<div class="col-md col-6"><h3 id="charDEX"></h3></div>
		<div class="col-md col-6"><h3 id="charCON"></h3></div>
		<div class="col-md col-6"><h3 id="charINT"></h3></div>
		<div class="col-md col-6"><h3 id="charWIS"></h3></div>
		<div class="col-md col-6"><h3 id="charCHA"></h3></div>
	</div>
  <p style="text-align: right;margin-bottom:0px;"><small><i>You may swap any two ability bonuses</i></small></p>
  <hr>
  <h2 id="charEquip">Equipment</h2>
  <p>You can choose from <strong>any or all</strong> of the items below to fill your inventory slots. Unless otherwise noted, each item takes up one slot.</p>
  <p id="charItems"></p>
  <h3 style="text-align: center;">TAKE A SCREENSHOT SO YOU DON'T LOSE YOUR CHARACTER</h3>
</div>

Thanks to <a href="http://questingblog.com/">Ben Milton</a> for making Knave and to <a href="http://chrispwolf.com/">Christopher P. Wolf</a> for the generator template!

<script async src="/_pages/bm_generator.js" charset="utf-8"></script>