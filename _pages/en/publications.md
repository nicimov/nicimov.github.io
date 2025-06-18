---
layout: archive
lang: en
title: "Publications"
permalink: /publications/
author_profile: true
---

1. "Structural-Functional Compartmentalization of Cumulus Cell Nuclei: Age-Related Dynamics in Mice"

### Study Overview
This research is a part of my master’s thesis, investigating nuclear organization in cumulus cells across age groups in BALB/c mice. The project focuses on:

- **3D nuclear architecture**: Quantifying spatial reorganization of nuclear bodies (e.g., Cajal bodies) during aging.
- **Methodological innovation**: Developed a novel modular macro for ImageJ/RStudio to:
  - Automate nucleus segmentation.
  - Quantify 3D parameters of nuclear bodies.
  - Exclude artifacts.

### Tool Description
The custom macro:
- **Standardizes analysis**: Reduces subjective errors in fluorescence microscopy data.
- **Cross-adaptability**: Compatible with other nuclear proteins (e.g., PML bodies).
- **Open access**: [GitHub-hosted code](https://github.com/nicimov/3Dnucleus_data) with [DOI:10.5281/zenodo.15395330](https://doi.org/10.5281/zenodo.15395330).

### Preliminary Findings
Application revealed:
- A **threefold decrease** in coilin-positive bodies in aged mice (12 mo.) vs. young (2–3 mo.).
- Age-dependent spatial reconfiguration relative to DAPI-dense regions.

### Publication Timeline
Manuscript in preparation; target submission: **2025–2026** 

<!-- {% if site.author.googlescholar %}
  <div class="wordwrap">You can also find my articles on <a href="{{site.author.googlescholar}}">my Google Scholar profile</a>.</div>
{% endif %} -->

{% include base_path %}

<!-- New style rendering if publication categories are defined -->

<!--
{% if site.publication_category %}
  {% for category in site.publication_category  %}
    {% assign title_shown = false %}
    {% for post in site.publications reversed %}
      {% if post.category != category[0] %}
        {% continue %}
      {% endif %}
      {% unless title_shown %}
        <h2>{{ category[1].title }}</h2><hr />
        {% assign title_shown = true %}
      {% endunless %}
      {% include archive-single.html %}
    {% endfor %}
  {% endfor %}
{% else %}
  {% for post in site.publications reversed %}
    {% include archive-single.html %}
  {% endfor %}
{% endif %}
-->


