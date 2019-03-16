---
layout: page
title: Troika Character Generator
permalink: troikagenerator
published: true
image: /images/troika.png
description: >
  A mobile-friendly Character Generator and Initiative tracker for Troika.
---

![troika.png]({{site.url}}/images/troika.png)

<div class="row">
  <div class="col tightSpacing buttonWrapper"><button id="weaponButton" class="btn btn-primary btn-lg" onclick="generate()">Generate
      Character</button></div>
  <div class="col tightSpacing buttonWrapper"><button id="weaponButton" class="btn btn-primary btn-lg" onclick="showTracker()">Turn
      Tracker</button></div>
</div>

<div class="container generatorCard" id="charCard" style="display:none;">
  <div class="row">
    <div class="col-xl-8 col-12 tightSpacing h1" id="charName">THIS IS BROKEN! FLEE!</div>
  </div>
  <div class="row" style="justify-content: space-around !important;">
    <div class="col-lg-2 col-4 tightSpacing h3" id="charSTR"></div>
    <div class="col-lg-2 col-4 tightSpacing h3" id="charDEX"></div>
    <div class="col-lg-2 col-4 tightSpacing h3" id="charCON"></div>
    <div class="col-lg-2 col-4 tightSpacing h3" id="charINT"></div>
    <div class="col-lg-2 col-4 tightSpacing h3" id="charWIS"></div>
    <div class="col-lg-2 col-4 tightSpacing h3" id="charCHA"></div>
  </div>
  <hr class="tightSpacing">
  <div class="row">

  </div>
  <div class="row">
    <div class="col-xl-6 col-12">
      <div class="tightSpacing h2" id="charHP"></div>
      <p id="charTemperament"></p>
      <p id="charHistory"></p>
      <div class="row">
        <div class="col-6 tightSpacing" id="charPhysique"></div>
        <div class="col-6 tightSpacing" id="charSkin"></div>
        <div class="col-6 tightSpacing" id="charFace"></div>
        <div class="col-6 tightSpacing" id="charHair"></div>
        <div class="col-6 tightSpacing" id="charSpeech"></div>
        <div class="col-6 tightSpacing" id="charClothing"></div>
      </div>
    </div>
    <div class="col-xl-6 col-12">
      <h2 id="charSlots" class="tightSpacing"></h2>
      <p><small>
          You can choose from <strong>any or all</strong> of the items below to fill your inventory slots. Unless
          otherwise noted, each item takes up one slot. <i>The GM reserves the right to reject anything from the list
            below.</i>
        </small></p>
      <p id="charItems"></p>
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

  <div class="row">
    <div class="col-6 tightSpacing buttonWrapper"><button id="weaponButton" class="btn btn-primary btn-lg" onclick="turns('round')">New
        Round</button></div>
    <div class="col-6 tightSpacing buttonWrapper"><button id="weaponButton" class="btn btn-primary btn-lg" onclick="turns('next')">Next
        Turn</button></div>
  </div>

  <div class="coinDiv">
    <div class="coin" id="tokenCoin">
      <div id="coinText">New Round</div>
    </div>
  </div>


<div class="row">
  <div class="col" id="turnList">
      <h3 class="tightSpacing"></h3>
  </div>
  <div class="col" id="tokenList" style="margin-top: 20px;">
      <h3 class="tightSpacing">Set the numbers above then click "New Round".</h3>
  </div>
</div>


</div>

Thanks to Andrei Gheorghiu for the excellent [number spinner code](https://stackoverflow.com/a/45396364/2611856) and Joshnh for the [fancy coin](http://jsfiddle.net/joshnh/Bz22S/).

<script async src="/_pages/troika.js" charset="utf-8"></script>