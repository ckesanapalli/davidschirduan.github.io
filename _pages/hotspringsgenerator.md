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
  <div class="col-md-3 col-6 tightSpacing buttonWrapper"><button class="btn btn-primary btn-lg" onclick="Overland('Light')">Light</button></div>
  <div class="col-md-3 col-6 tightSpacing buttonWrapper"><button class="btn btn-primary btn-lg" onclick="Overland('Heavy')">Heavy</button></div>
  <div class="col-md-3 col-6 tightSpacing buttonWrapper"><button class="btn btn-primary btn-lg" onclick="Overland('Mountainous')">Mountainous</button></div>
  <div class="col-md-3 col-6 tightSpacing buttonWrapper"><button class="btn btn-primary btn-lg" onclick="Overland('Volcano')">Volcano</button></div>
  <div class="col-md-4 col-6 tightSpacing buttonWrapper"><button class="btn btn-primary btn-lg" onclick="Overland('Volcanic')">Volcanic</button></div>
  <div class="col-md-4 col-6 tightSpacing buttonWrapper"><button class="btn btn-primary btn-lg" onclick="Overland('Ruins')">Ruins</button></div>
  <div class="col-md-4 col-12 tightSpacing buttonWrapper"><button class="btn btn-primary btn-lg" onclick="Overland('Village')">Village</button></div>
</div>

<div class="container generatorCard" id="locationCard" style="margin-bottom: 30px;display:none;">
  <div class="tab">
    <button class="tablinks" onclick="openTab(event, 'overland')" id="defaultOpen">Overland</button>
    <button class="tablinks" onclick="openTab(event, 'images')">Images</button>
  </div>
  <div id="overland" class="tabcontent">
    <h2>Encounter Name</h2>
    <p>Encounter Description.</p>
  </div>
  <div id="images" class="tabcontent">
    No image available.
  </div>
</div>

<hr>

<div class="row">
  <div class="col-md-4 col-6 tightSpacing buttonWrapper"><button class="btn btn-primary btn-lg" onclick="mappedLocations('Ashfire Mine')">Ashfire Mine</button></div>
  <div class="col-md-4 col-6 tightSpacing buttonWrapper"><button class="btn btn-primary btn-lg" onclick="mappedLocations('Boar’s Head')">Boar’s Head</button></div>
  <div class="col-md-4 col-6 tightSpacing buttonWrapper"><button class="btn btn-primary btn-lg" onclick="mappedLocations('Crystal SeaCave')">Crystal SeaCave</button></div>
  <div class="col-md-4 col-6 tightSpacing buttonWrapper"><button class="btn btn-primary btn-lg" onclick="mappedLocations('Crystalflow')">Crystalflow</button></div>
  <div class="col-md-4 col-6 tightSpacing buttonWrapper"><button class="btn btn-primary btn-lg" onclick="mappedLocations('Dire Boar Den')">Dire Boar Den</button></div>
  <div class="col-md-4 col-6 tightSpacing buttonWrapper"><button class="btn btn-primary btn-lg" onclick="mappedLocations('Glavrok Village')">Glavrok Village</button></div>
  <div class="col-md-4 col-6 tightSpacing buttonWrapper"><button class="btn btn-primary btn-lg" onclick="mappedLocations('Lapis Observatory')">Lapis Observatory</button></div>
  <div class="col-md-4 col-6 tightSpacing buttonWrapper"><button class="btn btn-primary btn-lg" onclick="mappedLocations('New Moon Party')">New Moon Party</button></div>
  <div class="col-md-4 col-6 tightSpacing buttonWrapper"><button class="btn btn-primary btn-lg" onclick="mappedLocations('Shattered Aquifer')">Shattered Aquifer</button></div>
  <div class="col-md-4 col-6 tightSpacing buttonWrapper"><button class="btn btn-primary btn-lg" onclick="mappedLocations('Slave Quarters')">Slave Quarters</button></div>
  <div class="col-md-4 col-6 tightSpacing buttonWrapper"><button class="btn btn-primary btn-lg" onclick="mappedLocations('Svarku’s Lair')">Svarku’s Lair</button></div>
  <div class="col-md-4 col-6 tightSpacing buttonWrapper"><button class="btn btn-primary btn-lg" onclick="mappedLocations('Temple of Tranquility')">Temple of Tranquility</button></div>
</div>

<script async src="/_pages/hsi.js" charset="utf-8"></script>