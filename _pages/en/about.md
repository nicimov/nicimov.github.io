---
permalink: /
lang: en
title: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

## Current Focus: Decoding Nuclear Biocondensates in 3D
I investigate how **spatial organization** of nuclear condensates (Cajal bodies, PML-nuclear bodies, speckles, nucleoli) correlates with cellular function and aging. My work combines:
- **Advanced microscopy** (confocal, super-resolution)
- **Custom computational pipelines** for 3D segmentation/analysis
- **Open-source tool development** to democratize spatial cytology

### Why 3D Matters
While confocal microscopy generates rich 3D datasets, 2D projections require fewer computational resources and are easier to interpret [(MDPI, 2021)](https://www.mdpi.com/2078-2489/12/6/239). This discards critical spatial information about:
- **Liquid-liquid phase separation (LLPS)** dynamics  
- **Chromatin-nuclear body interactions**  
- **Anisotropic distribution patterns** linked to gene activity  

My tools extract this "hidden" data to reveal how nuclear architecture encodes function. I aim to provide a simmpler aproach to **bridge bioinformatics and cellular morphology**. 

<div style="
  background: rgba(3, 102, 214, 0.08);
  border-left: 4px solid #0366d6;
  padding: 12px;
  margin: 12px 0;
  border-radius: 3px;
  color: inherit;
">
As a cytologist, I leverage my expertise in cellular metabolism to critically evaluate and contextualize statistical methodologies developed by mathematicians. This domain-specific knowledge enables me to ensure tool alignment with empirical cell behavior and experimental validity.
</div>

## Featured Work: Nuclear Analysis Suite

<div markdown="1" style="
  background: rgba(95, 237, 131, 0.08);
  border-left: 4px solid #5FED83;
  padding: 12px;
  margin: 12px 0;
  border-radius: 3px;
  color: inherit;
">[**3Dnucleus_data**](https://github.com/nicimov/3Dnucleus_data)  
*An open-source ImageJ/R pipeline for high-throughput analysis of nuclear condensates*
</div> 

To really understand how the tools we use in cytology work, I built my own image analysis pipeline using ImageJ macros. Writing the code myself forced me to learn exactly how these methods process and quantify cellular data — no magic boxes, just full control and transparency.

**Key Features**:
- Processes 1000+ `.lif` files in <3h  
- Quantifies:
  - Cajal/PML body volume, intensity, spatial distribution  
  - Chromatin proximity (DAPI overlap)  
  - LLPS-driven clustering patterns  
- Modular design adaptable to other condensates (e.g., nucleoli, histone locus bodies)  

**Example Output**:

![Workflow](/images/workflow.png)  
*Automated segmentation of coilin+ bodies (green) concentrated DAPI regions (red) and poorly-stainded DAPI regions (Blue) in cumulus cell nuclei.*

**Example of macro workflow for statistical data extraction:**  

![svggraph1](/images/svggraph1.svg)

*Volume distribution (kernel density estimate) of individual coilin+ body volumes within each nucleus (n=12). Violin graphs, Rstudio*

## Recent Work: Educational 3D nucleus reconstructon

As part of my research in cellular imaging, I successfully generated a **3D volumetric reconstruction** of a cumulus cell nucleus using serial confocal microscopy images. This project combined advanced imaging techniques with computational 3D modeling to create an interactive educational tool for visualizing nuclear morphology.

<div class="sketchfab-embed-wrapper"> <iframe title="V1_CB_DAPI_rec2 iteration 1" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share width="640" height="480" src="https://sketchfab.com/models/3e9640fef610406484c2abb49b563e71/embed?autospin=1&autostart=1"> </iframe> 
</div>
*3D reconstruction of segmented nucleus objects from a cumulus cell (located in mammalian follicle). Segmented objects – 
<span style="color: #0066FF;">nuclear envelope</span>, 
<span style="color: #FF3333;">DAPI regions</span> and 
<span style="color: #00AA55;">coilin+ bodies</span>.*