---
permalink: /
lang: en
title: "Spatial Cytology | Home"
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
While confocal microscopy generates rich 3D datasets, >80% of published analyses still rely on 2D projections ([*Nature Methods*, 2021](#)). This discards critical spatial information about:
- **Liquid-liquid phase separation (LLPS)** dynamics  
- **Chromatin-nuclear body interactions**  
- **Anisotropic distribution patterns** linked to gene activity  

My tools extract this "hidden" data to reveal how nuclear architecture encodes function.

---

## Featured Work: Nuclear Analysis Suite
### [3D Nuclear Body Quantification Macro](https://github.com/nicimov/3Dnucleus_data)  
*An open-source ImageJ/R pipeline for high-throughput analysis of nuclear condensates*  

**Key Features**:
- Processes 1000+ `.lif` files in <3h  
- Quantifies:  
  - **Cajal/PML body** volume, intensity, spatial distribution  
  - Chromatin proximity (DAPI overlap)  
  - LLPS-driven clustering patterns  
- Modular design adaptable to other condensates (e.g., nucleoli, histone locus bodies)  

**Example Output**:  
![Workflow](/images/macro_workflow.png)  
*Automated segmentation of coilin+ bodies (green) relative to DAPI (blue) in cumulus cell nuclei.*

---

## Recent Projects
### 1. Age-Related Reorganization of Nuclear Bodies  
**Finding**: 3x fewer Cajal bodies in aged mice (12mo vs 2mo), with significant spatial reconfiguration relative to chromatin domains.  
**Implications**: Suggests condensate positioning as a biomarker for reproductive aging.  
**Tools Used**: Custom macro + Leica SP5 confocal.  

### 2. Developing a Unified 3D Analysis Framework  
**Goal**: Standardize quantification of:  
- Nuclear body **shape entropy**  
- **Anisotropy indices**  
- **Multiscale spatial correlations**  

---

## Core Methodologies
| Technique            | Application                          |
|----------------------|--------------------------------------|
| Confocal microscopy  | 3D imaging of nuclear architecture  |
| Immunofluorescence   | Multiplexed condensate labeling      |
| Computational morphometrics | LLPS dynamics quantification |