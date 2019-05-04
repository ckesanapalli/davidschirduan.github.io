---
layout: page
title: Wyrd Hunt Generator
permalink: wyrdhuntgenerator
published: true
image: /images/wyrdhuntgenerator.png
description: >
  A mobile-friendly Hunt generator for the Wyrd and Wild.
---
![wyrdhuntgenerator.png]({{site.url}}/images/wyrdhuntgenerator.png)

<p class="tightSpacing" id="huntText"></p>

<div id="newButtons" class="row centerButtons">
  <div class="col-md-6 col-12">
    <button class="btn wyrd-btn" onclick="startHunt()">
      <h3>Start Hunt</h3>
    </button>
  </div>
</div>

<div class="tightSpacing" id="encounterText"></div>

<div class="container generatorCard" style="margin-bottom: 30px;">
  <div class="tightSpacing h3" id="locationTitle">Wyrd and Wild</div>
  <p id="locationDesc">Into the Wyrd and Wild is a book for those seeking to incorporate a weird and terrifying wilderness into their game.<br><br>Created by Charles B.F. Avery, this book is gorgeously illustration and PACKED with cool ideas for wanting a dark forest adventure. After you <a href="http://google.com">BUY IT HERE</a> you can use this page to generate quick hunts.<br><br><strong>The woods do not care for you. Never forget that.</strong>
  </p>
  <hr class="tightSpacing">
  <p id="pathsText"></p>
</div>

<div class="row centerButtons">
  <div class="col-md-6 col-12">
    <button id="newButtons" class="btn wyrd-btn" onclick="searchBody()">
      <h3>Search Body</h3>
    </button>
  </div>
    <div class="col-md-6 col-12">
    <button id="newButtons" class="btn wyrd-btn" onclick="spell()">
      <h3>Spell</h3>
    </button>
  </div>
    <div class="col-md-6 col-12">
    <button id="newButtons" class="btn wyrd-btn" onclick="artifact()">
      <h3>Artifact</h3>
    </button>
  </div>
    <div class="col-md-6 col-12">
    <button id="newButtons" class="btn wyrd-btn" onclick="mutation()">
      <h3>Wild Mutation</h3>
    </button>
  </div>
</div>

<div class="container generatorCard">
  <div class="row">
    <div class="col tightSpacing" id="lootBox">Click the buttons to generate some loot.</div>
  </div>
</div>

<small>Thanks to <a href="https://twitter.com/CharlieFergaves">Charles Avery</a> for making such a terrifying world and to <a href="http://chrispwolf.com/">Christopher P. Wolf</a> for the code!</small>

<script async src="/_pages/wyrdhunt.js" charset="utf-8"></script>

