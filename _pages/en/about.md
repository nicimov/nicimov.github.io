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
### [3D Nuclear Body Quantification Macro](https://github.com/nicimov/3Dnucleus_data)  
*An open-source ImageJ/R pipeline for high-throughput analysis of nuclear condensates*  

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

## Recent Work: Educational 3D nucleus reconstructin

<div class="sketchfab-embed-wrapper"> <iframe title="V1_CB_DAPI_rec2 iteration 1" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/3e9640fef610406484c2abb49b563e71/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/v1-cb-dapi-rec2-iteration-1-3e9640fef610406484c2abb49b563e71?utm_medium=embed&utm_campaign=share-popup&utm_content=3e9640fef610406484c2abb49b563e71" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> V1_CB_DAPI_rec2 iteration 1 </a> by <a href="https://sketchfab.com/sleepyday?utm_medium=embed&utm_campaign=share-popup&utm_content=3e9640fef610406484c2abb49b563e71" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> A.A. </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=3e9640fef610406484c2abb49b563e71" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div> 