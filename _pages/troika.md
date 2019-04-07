---
layout: page
title: Troika Generator & Tracker
permalink: troikagenerator
published: true
image: /images/troika.png
description: >
  A mobile-friendly Character Generator and Initiative Tracker for the Troika! RPG.
---

![troika.png]({{site.url}}/images/troika.png)

Troika! is one of the most imaginative RPGs I've had the pleasure of enjoying. [Buy it here!](https://www.melsonia.com/troika-17-p.asp) I also made a [handy reference sheet here](/files/troikaRef.pdf).

<div class="row">
  <div class="col tightSpacing buttonWrapper"><button id="weaponButton" class="btn troikabtn btn-lg" onclick="generate(false)">Generate Character</button></div>
  <div class="col tightSpacing buttonWrapper"><button id="weaponButton" class="btn troikabtn btn-lg" onclick="showTracker()">Turn Tracker</button></div>
</div>

<div class="container generatorCard" id="charCard" style="display:none;">
  <div class="row">
    <div class="col-12" id="charClass">THIS IS BROKEN! FLEE!</div>
  </div>
  <hr class="tightSpacing">
  <div class="row">
    <div class="col-xl-6 col-12" id="descr">
    </div>
    <div class="col-xl-6 col-12" id="poss">
    </div>
  </div>
  <h3 style="text-align: center;">TAKE A SCREENSHOT SO YOU DON'T LOSE YOUR CHARACTER</h3>
</div>

<div class="container generatorCard" id="turnCard" style="display:none;">
  <div class="row">
    <div class="col" style="max-width: 250px;">
      <div class="number-input">
        <button onclick="this.parentNode.querySelector('input[type=number]').stepDown()"></button>
        <input class="quantity" min="0" name="quantity" value="4" type="number" max="20" id="turnPC">
        <button onclick="this.parentNode.querySelector('input[type=number]').stepUp()" class="plus"></button>
      </div>
    </div>
    <div class="col">
      <h2 class="tightSpacing">Player Characters</h2>
    </div>
  </div>


  <div class="row">
    <div class="col" style="max-width: 250px;">
      <div class="number-input">
        <button onclick="this.parentNode.querySelector('input[type=number]').stepDown()"></button>
        <input class="quantity" min="0" name="quantity" value="0" type="number" max="999" id="turnHench">
        <button onclick="this.parentNode.querySelector('input[type=number]').stepUp()" class="plus"></button>
      </div>
    </div>
    <div class="col">
      <h2 class="tightSpacing">Henchlings</h2>
    </div>
  </div>

  <div class="row">
    <div class="col" style="max-width: 250px;">
      <div class="number-input">
        <button onclick="this.parentNode.querySelector('input[type=number]').stepDown()"></button>
        <input class="quantity" min="0" name="quantity" value="10" type="number" max="999" id="turnEnemy">
        <button onclick="this.parentNode.querySelector('input[type=number]').stepUp()" class="plus"></button>
      </div>
    </div>
    <div class="col">
      <h2 class="tightSpacing">Combined Enemy Initiative</h2>
    </div>
  </div>

  <hr class="tightSpacing">
    <div class="coinDiv">
    <div class="coin" id="tokenCoin">
      <div id="coinText">New Round</div>
    </div>
  </div>

  <div class="row">
    <div class="col tightSpacing buttonWrapper"><button class="btn troikabtn btn-lg" onclick="turns('round')">New Round</button></div>
    <div class="col tightSpacing buttonWrapper"><button id="nextTurn" class="btn troikabtn btn-lg" onclick="turns('next')" style="display:none;">Next Turn</button></div>
  </div>

<div class="row" style="margin-top:20px;">
  <div class="col-md-8 col-12" id="tokenList" style="display:none;">
      <h3 class="tightSpacing">Set the numbers above then click "New Round".</h3>
  </div>
  <div class="col-md-4 col-12" id="turnList" style="display:none;">
      <h3 class="tightSpacing"></h3>
  </div>
</div>


</div>

Thanks to Andrei Gheorghiu for the excellent [number spinner code](https://stackoverflow.com/a/45396364/2611856) and Joshnh for the [fancy coin](http://jsfiddle.net/joshnh/Bz22S/).

Thanks to Uyuxo for collecting the list, Daniel Sell for making Troika such an incredible game, and all the creatives who contributed their backgrounds to this generator. You're all amazing!

You can view [ALL the backgrounds here](https://github.com/DavidSchirduan/davidschirduan.github.io/blob/master/_pages/troika.json).

<script async src="/_pages/troika.js" charset="utf-8"></script>