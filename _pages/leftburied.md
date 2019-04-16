---
layout: page
title: Best Left Buried Character Generator
permalink: leftburiedgenerator
published: true
image: /images/blb.png
description: >
  A mobile-friendly Character Generator for the Best Left Buried RPG.
---

![blb.png]({{site.url}}/images/blb.png)

Best Left Buried is an fantasy horror game that threatens your characters' sanities as much as their lives. Within the Crypt, these adventurers will be beset by strange monsters, bizarre environments and eldritch magics, which will take them on their journey from freshfaced recruits from to grizzled survivors. [Buy it here](https://www.drivethrurpg.com/product/254584/Best-Left-Buried-Full-Rules)!

<div class="row centerButtons">
  <div class="col-6">
    <button id="CharButton" class="btn leftburied-btn" onclick="generate()">
      <h3>Generate Character</h3>
    </button>
  </div>
</div>

<div class="container leftburiedCard" id="leftburiedCard">
  <h2 id="charName">John the Monster</h2>
  <div class="row">
		<div class="col-md col-12"><h3 id="charBR">+2 Will</h3></div>
		<div class="col-md col-12"><h3 id="charWIT">+2 Will</h3></div>
		<div class="col-md col-12"><h3 id="charWILL">+2 Will</h3></div>
		<div class="col-md col-12"><h3 id="charGRI">+2 Will</h3></div>
		<div class="col-md col-12"><h3 id="charVIG">+2 Will</h3></div>
	</div>
  <p id="charCareer"></p>
  <hr>
  <div class="row">
    <div class="col-lg-6 col-12">
      <h2 id="charARCH"></h2>
      <p id="archText"></p>
    </div>
    <div class="col-lg-6 col-12">
      <h2>Equipment</h2>
      <p id="charItems"></p>
    </div>
  </div>
  <h3 style="text-align: center;">TAKE A SCREENSHOT SO YOU DON'T LOSE YOUR CHARACTER</h3>
</div>

Commissioned by [SoulMuppet Publishing](https://www.drivethrurpg.com/browse/pub/13749/SoulMuppet-Publishing).

<script async src="/_pages/leftburied.js" charset="utf-8"></script>