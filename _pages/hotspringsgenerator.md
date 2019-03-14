---
layout: page
title: Hot Springs Generator
permalink: hotspringsgenerator
published: true
image: /images/hsi.png
description: >
  A mobile-friendly generator for Hot Springs Island.
---

![hsi.png]({{site.url}}/images/hsi.png)


<div class="row" style="justify-content: space-around !important;margin-bottom:30px;">
  <div class="col-md-5 col noPadding">
  <a class="btn btn-black" onclick="showCard('overlandCard')">
  <h1 class="tightSpacing">Overland</h1></a></div>

  <div class="col-md-5 col noPadding">
  <a class="btn btn-black" onclick="showCard('locationCard')">
  <h1 class="tightSpacing">Locations</h1></a></div>
</div>

<div class="container generatorCard" id="overlandCard" style="margin-bottom: 30px;display:none;">
<div class="row">
  <div class="col-md-3 col noPadding"><button class="btn btn-black" onclick="Overland('Light')">Light</button></div>
  <div class="col-md-3 col noPadding"><button class="btn btn-black" onclick="Overland('Heavy')">Heavy</button></div>
  <div class="col-md-3 col noPadding"><button class="btn btn-black" onclick="Overland('Mountainous')">Mountainous</button></div>
  <div class="col-md-3 col noPadding"><button class="btn btn-black" onclick="Overland('Volcano')">Volcano</button></div>
  <div class="col noPadding"><button class="btn btn-black" onclick="Overland('Volcanic')">Volcanic</button></div>
  <div class="col noPadding"><button class="btn btn-black" onclick="Overland('Ruins')">Ruins</button></div>
  <div class="col noPadding"><button class="btn btn-black" onclick="Overland('Village')">Village</button></div>
  </div>
  <div id="overland" class="HSItabcontent">
  </div>
</div>

<div class="container generatorCard" id="locationCard" style="margin-bottom: 30px;display:none;">
  <div class="row">
    <div class="col noPadding"><button class="btn btn-black" onclick="Locations('Ashfire Mine')">Ashfire Mine</button></div>
    <div class="col noPadding"><button class="btn btn-black" onclick="Locations('Boar’s Head Encampment')">Boar’s Head</button></div>
    <div class="col noPadding"><button class="btn btn-black" onclick="Locations('Crystal SeaCave')">Crystal SeaCave</button></div>
    <div class="col noPadding"><button class="btn btn-black" onclick="Locations('Crystalflow')">Crystalflow</button></div>
    <div class="col-md-4 col noPadding"><button class="btn btn-black" onclick="Locations('Dire Boar Den')">Dire Boar Den</button></div>
    <div class="col-md-4 col noPadding"><button class="btn btn-black" onclick="Locations('Glavrok Village')">Glavrok Village</button></div>    
    <div class="col-md-4 col noPadding"><button class="btn btn-black" onclick="HotSpringsCity()">Hot Springs City</button></div>
    <div class="col-md-4 col noPadding"><button class="btn btn-black" onclick="Locations('Lapis Observatory')">Lapis Observatory</button></div>
    <div class="col-md-4 col noPadding"><button class="btn btn-black" onclick="Locations('New Moon Party')">New Moon Party</button></div>
    <div class="col-md-4 col noPadding"><button class="btn btn-black" onclick="Locations('Shattered Aquifer')">Shattered Aquifer</button></div>
    <div class="col-md-4 col noPadding"><button class="btn btn-black" onclick="Locations('Slave Quarters')">Slave Quarters</button></div>
    <div class="col-md-4 col noPadding"><button class="btn btn-black" onclick="Locations('Svarku’s Lair')">Svarku’s Lair</button></div>
    <div class="col-md-4 col noPadding"><button class="btn btn-black" onclick="Locations('Temple of Tranquility')">Temple of Tranquility</button></div>
  </div>
  <div class="HSItabcontent" id="locationData">
  </div>
</div>

<div class="row" style="justify-content: space-around !important;margin-bottom: 30px;">
  <div class="col-md-3 col noPadding"><button class="btn btn-black" onclick="treasure()"><h2 class="tightSpacing">Treasure</h2></button></div>
  <div class="col-md-3 col noPadding"><button class="btn btn-black" onclick="rumors()"><h2 class="tightSpacing">Rumors</h2></button></div>
  <div class="col-md-3 col noPadding"><button class="btn btn-black" onclick="golems()"><h2 class="tightSpacing">Golems</h2></button></div>
</div>

<div class="container generatorCard" id="extraCard" style="margin-bottom: 30px;display:none;">
  <div class="HSItabcontent" id="extraData">
  </div>
</div>

**Thanks to:**

 - [Jacob Hurst](https://twitter.com/vyderac) for writing Hot Springs Island and making it such a beautiful, wonderful world to explore.
 - [Christopher P. Wolf](http://chrispwolf.com/) for the code that inspired these generators.
 - And to the [OSR community](https://discord.gg/kJjMvC) for being such an encouraging, welcoming place.

<script async src="/_pages/hsi.js" charset="utf-8"></script>