---
layout: page
permalink: /publications/
title: Publications
description:
nav: true
nav_order: 1
---

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="pub-filters" role="group" aria-label="Filter publications by kind">
  <button class="pub-filter pub-filter--active" type="button" data-pub-filter="all" aria-pressed="true">All</button>
  <button class="pub-filter" type="button" data-pub-filter="journal" aria-pressed="false">Journal</button>
  <button class="pub-filter" type="button" data-pub-filter="conference" aria-pressed="false">Conference</button>
  <button class="pub-filter" type="button" data-pub-filter="preprint" aria-pressed="false">Preprint</button>
  <button class="pub-filter" type="button" data-pub-filter="abstract" aria-pressed="false">Abstract</button>
  <button class="pub-filter" type="button" data-pub-filter="thesis" aria-pressed="false">Thesis</button>
</div>

<div class="publications publications--page">

{% bibliography %}

</div>

<script defer src="{{ '/assets/js/publications.js' | relative_url }}"></script>
