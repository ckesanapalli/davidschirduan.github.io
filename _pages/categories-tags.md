---
title: Categories
author: davidschirduan
image: "/images/1200x600Logo.png"
layout: page
permalink: "/categories_tags"
---

A sad attempt at sorting the nonsense on this blog.

<h1>Categories</h1>

{% assign sorted_cats = site.categories | sort %}
<table class="categories">{% for category in sorted_cats %}
  {% assign loopindex = forloop.index | modulo: 2 %}
  {% if loopindex == 1 %}
    <tr><td><a href="#{{ category[0] | slugify }}"><h2>{{ category[0] }}</h2></a></td>
  {% elsif loopindex == 0 %}
    <td><a href="#{{ category[0] | slugify }}"><h2>{{ category[0] }}</h2></a></td></tr>
  {% else %}
    <td><a href="#{{ category[0] | slugify }}"><h2>{{ category[0] }}</h2></a></td>
  {% endif %}
{% endfor %}
{% if loopindex == 0 %}
  </table>
{% else %}
  </tr></table>
{% endif %}

<!--

<h1>Tags</h1>

{% assign sorted_tags = site.tags | sort %}
<table class="categories">{% for tag in sorted_tags %}
  {% assign loopindex = forloop.index | modulo: 3 %}
  {% if loopindex == 1 %}
    <tr><td><strong><a href="#{{ tag[0] | slugify }}">{{ tag[0] }}</a></strong></td>
  {% elsif loopindex == 0 %}
    <td><strong><a href="#{{ tag[0] | slugify }}">{{ tag[0] }}</a></strong></td></tr>
  {% else %}
    <td><strong><a href="#{{ tag[0] | slugify }}">{{ tag[0] }}</a></strong></td>
  {% endif %}
{% endfor %}
{% if loopindex == 0 %}
  </table>
{% else %}
  </tr></table>
{% endif %}
-->
<hr/>

{% assign sorted_cats = site.categories | sort %}
{% for category in sorted_cats %}
  <h2 id="{{ category[0] | slugify }}">{{ category | first }} Posts</h2>
  {% assign sorted_posts = category[1] | sort: 'title' %}
  <table class="categories">{% for post in sorted_posts %}
    {% assign loopindex = forloop.index | modulo: 3 %}
    {% if loopindex == 1 %}
      <tr><td><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></td>
    {% elsif loopindex == 0 %}
      <td><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></td></tr>
    {% else %}
      <td><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></td>
    {% endif %}
  {% endfor %}
  {% if loopindex == 0 %}
    </table>
  {% else %}
    </tr></table>
  {% endif %}
{% endfor %}
<!--
{% assign sorted_tags = site.tags | sort %}
{% for tag in sorted_tags%}
  <h2 id="{{ tag[0] | slugify }}">{{ tag | first }} Posts</h2>
  {% assign sorted_posts = tag[1] | sort: 'title' %}
  <table class="categories">{% for post in sorted_posts %}
    {% assign loopindex = forloop.index | modulo: 3 %}
    {% if loopindex == 1 %}
      <tr><td><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></td>
    {% elsif loopindex == 0 %}
      <td><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></td></tr>
    {% else %}
      <td><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></td>
    {% endif %}
  {% endfor %}
  {% if loopindex == 0 %}
    </table>
  {% else %}
    </tr></table>
  {% endif %}
{% endfor %}
-->