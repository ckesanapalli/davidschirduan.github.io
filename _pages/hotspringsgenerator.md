---
layout: page
title: Hot Springs Generator
permalink: hotspringsgenerator
published: true
image: /images/hsi.png
description: >
  A mobile-friendly generator for Hot Springs Island.
---

<div class="row">
  <div class="col-md-6 col-12 tightSpacing buttonWrapper"><button class="btn btn-primary btn-lg" onclick="showCard('overlandCard')">Overland</button></div>
  <div class="col-md-6 col-12 tightSpacing buttonWrapper"><button class="btn btn-primary btn-lg" onclick="showCard('locationCard')">Locations</button></div>
</div>


<div class="container generatorCard" id="overlandCard" style="margin-bottom: 30px;display:none;">
<div class="row">
  <div class="col-md-3 col noPadding"><button class="btn btn-black btn-lg" onclick="Overland('Light')">Light</button></div>
  <div class="col-md-3 col noPadding"><button class="btn btn-black btn-lg" onclick="Overland('Heavy')">Heavy</button></div>
  <div class="col-md-3 col noPadding"><button class="btn btn-black btn-lg" onclick="Overland('Mountainous')">Mountainous</button></div>
  <div class="col-md-3 col noPadding"><button class="btn btn-black btn-lg" onclick="Overland('Volcano')">Volcano</button></div>
  <div class="col noPadding"><button class="btn btn-black btn-lg" onclick="Overland('Volcanic')">Volcanic</button></div>
  <div class="col noPadding"><button class="btn btn-black btn-lg" onclick="Overland('Ruins')">Ruins</button></div>
  <div class="col noPadding"><button class="btn btn-black btn-lg" onclick="Overland('Village')">Village</button></div>
  </div>
  <div id="overland" class="tabcontent">
  </div>
</div>

<div class="container generatorCard" id="locationCard" style="margin-bottom: 30px;display:none;">
  <div class="row">
    <div class="col noPadding"><button class="btn btn-black btn-lg" onclick="Locations('Ashfire Mine')">Ashfire Mine</button></div>
    <div class="col noPadding"><button class="btn btn-black btn-lg" onclick="Locations('Boar’s Head Encampment')">Boar’s Head</button></div>
    <div class="col noPadding"><button class="btn btn-black btn-lg" onclick="Locations('Crystal SeaCave')">Crystal SeaCave</button></div>
    <div class="col noPadding"><button class="btn btn-black btn-lg" onclick="Locations('Crystalflow')">Crystalflow</button></div>
    <div class="col noPadding"><button class="btn btn-black btn-lg" onclick="Locations('Dire Boar Den')">Dire Boar Den</button></div>
    <div class="col noPadding"><button class="btn btn-black btn-lg" onclick="Locations('Glavrok Village')">Glavrok Village</button></div>    
    <div class="col noPadding"><button class="btn btn-black btn-lg" onclick="HotSpringsCity()">Hot Springs City</button></div>
    <div class="col noPadding"><button class="btn btn-black btn-lg" onclick="Locations('Lapis Observatory')">Lapis Observatory</button></div>
    <div class="col noPadding"><button class="btn btn-black btn-lg" onclick="Locations('New Moon Party')">New Moon Party</button></div>
    <div class="col noPadding"><button class="btn btn-black btn-lg" onclick="Locations('Shattered Aquifer')">Shattered Aquifer</button></div>
    <div class="col noPadding"><button class="btn btn-black btn-lg" onclick="Locations('Slave Quarters')">Slave Quarters</button></div>
    <div class="col noPadding"><button class="btn btn-black btn-lg" onclick="Locations('Svarku’s Lair')">Svarku’s Lair</button></div>
    <div class="col noPadding"><button class="btn btn-black btn-lg" onclick="Locations('Temple of Tranquility')">Temple of Tranquility</button></div>
  </div>
  <div class="tabcontent" id="locationData">
  </div>
</div>

**Thanks to:**

 - [Jacob Hurst](https://twitter.com/vyderac) for writing Hot Springs Island and making it such a beautiful, wonderful world to explore.
 - [Christopher P. Wolf](http://chrispwolf.com/) for the code that inspired these generators.
 - And to the [OSR community](https://discord.gg/kJjMvC) for being such an encouraging, welcoming place.

<script async src="/_pages/hsi.js" charset="utf-8"></script>