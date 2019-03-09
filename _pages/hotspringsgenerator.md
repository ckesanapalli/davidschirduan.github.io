---
layout: page
title: Hot Springs Generator
permalink: hotspringsgenerator
published: false
image: /images/stygiangenerator.png
description: >
  A mobile-friendly generator for Hot Springs Island.
---

<div class="row">
  <div class="col-md-3 col-6 tightSpacing buttonWrapper"><button class="btn btn-primary btn-lg" onclick="Overland('Mountainous')">Mountainous</button></div>
</div>

<div class="row" id="locationCard" style="margin-bottom: 30px;display:none;">

  <div class="col-2 tab" id="tabs">
    <button class="tablinks" onclick="openTab(event, 'overland')" id="defaultOpen">Overland</button>
    <button class="tablinks" onclick="openTab(event, 'images')">Images</button>
  </div>

  <div class="col-10" id="tabBoxes">
    <div id="overland" class="tabcontent">
      <h2>Encounter Name</h2>
      <p>Encounter Description.</p>
    </div>
    <div id="images" class="tabcontent">
      No image available.
    </div>
  </div>

</div>

<script async src="/_pages/hsi.js" charset="utf-8"></script>