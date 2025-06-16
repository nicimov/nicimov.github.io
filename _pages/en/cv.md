---
layout: archive
title: "CV"
lang: en
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

Education
======
* M.S. in Biology, Saint Petersburg State University, 2026 (expected)
* B.S. in Biology, Saint Petersburg State University of Veterinary Medicine, 2024
* Pearson Edexcel International Advanced Levels (A-Levels), 2019

Specialised skills evaluation
======

<div id="radar-chart-1"></div>

<style>
.radar-chart {
  margin: 20px auto;
  font-family: var(--global-font-family, Arial, sans-serif);
  color: var(--global-text-color-light, #333);
}
.legend {
  cursor: pointer;
  font-size: 12px;
  font-family: inherit;
  fill: currentColor;
}
.legend:hover {
  font-weight: bold;
}
.tooltip {
  position: absolute;
  background: rgba(0,0,0,0.8);
  color: white;
  padding: 5px 10px;
  border-radius: 3px;
  pointer-events: none;
  opacity: 0;
  font-size: 14px;
  font-family: inherit;
}
.radar-area {
  stroke-width: 2px;
  fill-opacity: 0.3;
}
.grid-circle {
  fill: none;
  stroke: #ccc;
  stroke-width: 0.5px;
}
</style>

<script>
// GitHub Pages compatible D3 loading
function loadD3AndDrawCharts() {
  if (typeof d3 === 'undefined') {
    const script = document.createElement('script');
    script.src = 'https://d3js.org/d3.v7.min.js';
    script.onload = function() {
      initializeCharts();
    };
    document.head.appendChild(script);
  } else {
    initializeCharts();
  }
}

function initializeCharts() {
  // Get CSS variables
  const rootStyles = getComputedStyle(document.documentElement);
  const globalFontFamily = rootStyles.getPropertyValue('--global-font-family').trim() || 'Arial, sans-serif';
  const globalTextColor = rootStyles.getPropertyValue('--global-text-color-light').trim() || '#333';

  // First chart data
  const skillsData1 = [
    { skill: 'Electron Microscopy (TEM)', level: 3, link: '' },
    { skill: 'Confocal Microscopy', level: 6, link: '' },
    { skill: 'Immunohistochemistry', level: 5, link: '' },
    { skill: 'FISH', level: 3, link: '' },
    { skill: 'Data analysis using R', level: 7, link: '' },
    { skill: 'ImageJ macros', level: 8, link: '' },
    { skill: 'Karyotyping', level: 3, link: '' }
  ];

  // Second chart data
  const skillsData2 = [
    { skill: 'Non-coding RNA', level: 6, link: '' },
    { skill: 'Interfase nucleus', level: 8, link: '' },
    { skill: 'Eukatyotic transcription', level: 3, link: '' },
    { skill: 'Cytogenetics', level: 4, link: '' },
    { skill: 'Apoptosis', level: 5, link: '' },
    { skill: 'Vesicular transport', level: 7, link: '' },
    { skill: 'Gametogenesis', level: 5, link: '' },
    { skill: 'Cell signalling', level: 6, link: '' },
    { skill: 'Modern optical systems', level: 4, link: '' }
  ];

  // Draw both charts
  drawRadar1(skillsData1, globalFontFamily, globalTextColor);
  drawRadar2(skillsData2, globalFontFamily, globalTextColor);
}

function drawRadar1(skillsData, fontFamily, textColor) {
  const config = {
    width: 600,
    height: 600,
    levels: 5,
    maxValue: 10,
    color: '#4285F4',
    dotRadius: 5,
    fontFamily: fontFamily,
    textColor: textColor
  };

  const margin = { top: 80, right: 80, bottom: 80, left: 80 };
  const width = config.width - margin.left - margin.right;
  const height = config.height - margin.top - margin.bottom;
  const radius = Math.min(width, height) / 2;
  const angleSlice = (Math.PI * 2) / skillsData.length;

  const svg = d3.select("#radar-chart-1")
    .append("svg")
    .attr("width", config.width)
    .attr("height", config.height)
    .append("g")
    .attr("transform", `translate(${config.width/2},${config.height/2})`);

  const rScale = d3.scaleLinear()
    .range([0, radius])
    .domain([0, config.maxValue]);

  for (let i = 0; i < config.levels; i++) {
    const levelFactor = radius * ((i + 1) / config.levels);
    svg.append("circle")
      .attr("class", "grid-circle")
      .attr("r", levelFactor)
      .style("stroke-dasharray", i ? "3,3" : "none");
  }

  const axis = svg.selectAll(".axis")
    .data(skillsData)
    .enter()
    .append("g")
    .attr("class", "axis");

  axis.append("line")
    .attr("x2", (d, i) => radius * Math.cos(angleSlice * i - Math.PI/2))
    .attr("y2", (d, i) => radius * Math.sin(angleSlice * i - Math.PI/2))
    .attr("class", "line")
    .style("stroke", "#ccc")
    .style("stroke-width", "1px");

  axis.append("text")
    .attr("class", "legend")
    .attr("x", (d, i) => (radius + 20) * Math.cos(angleSlice * i - Math.PI/2))
    .attr("y", (d, i) => (radius + 20) * Math.sin(angleSlice * i - Math.PI/2))
    .attr("text-anchor", "middle")
    .style("font-family", config.fontFamily)
    .style("fill", config.textColor)
    .text(d => d.skill)
    .on("click", (e, d) => d.link && window.open(d.link, "_blank"));

  const radarLine = d3.lineRadial()
    .curve(d3.curveLinearClosed)
    .radius(d => rScale(d.level))
    .angle((d, i) => i * angleSlice);

  svg.append("path")
    .datum(skillsData)
    .attr("class", "radar-area")
    .attr("d", radarLine)
    .style("fill", config.color)
    .style("stroke", config.color)
    .style("stroke-width", "2px");

  svg.selectAll(".radar-dot")
    .data(skillsData)
    .enter()
    .append("circle")
    .attr("class", "radar-dot")
    .attr("r", config.dotRadius)
    .attr("cx", (d, i) => rScale(d.level) * Math.cos(angleSlice * i - Math.PI/2))
    .attr("cy", (d, i) => rScale(d.level) * Math.sin(angleSlice * i - Math.PI/2))
    .style("fill", config.color)
    .on("mouseover", function(e, d) {
      d3.select(this).attr("r", config.dotRadius * 1.5);
      tooltip.transition().style("opacity", 1);
      tooltip.html(`${d.skill}<br>Level: ${d.level}`)
        .style("left", `${e.pageX}px`)
        .style("top", `${e.pageY - 28}px`);
    })
    .on("mouseout", function() {
      d3.select(this).attr("r", config.dotRadius);
      tooltip.transition().style("opacity", 0);
    });

  const tooltip = d3.select("#radar-chart-1")
    .append("div")
    .attr("class", "tooltip")
    .style("font-family", config.fontFamily);
}

function drawRadar2(skillsData, fontFamily, textColor) {
  const config = {
    width: 600,
    height: 600,
    levels: 5,
    maxValue: 10,
    color: '#F47142',
    dotRadius: 5,
    fontFamily: fontFamily,
    textColor: textColor
  };

  const margin = { top: 80, right: 80, bottom: 80, left: 80 };
  const width = config.width - margin.left - margin.right;
  const height = config.height - margin.top - margin.bottom;
  const radius = Math.min(width, height) / 2;
  const angleSlice = (Math.PI * 2) / skillsData.length;

  const svg = d3.select("#radar-chart-2")
    .append("svg")
    .attr("width", config.width)
    .attr("height", config.height)
    .append("g")
    .attr("transform", `translate(${config.width/2},${config.height/2})`);

  const rScale = d3.scaleLinear()
    .range([0, radius])
    .domain([0, config.maxValue]);

  for (let i = 0; i < config.levels; i++) {
    const levelFactor = radius * ((i + 1) / config.levels);
    svg.append("circle")
      .attr("class", "grid-circle")
      .attr("r", levelFactor)
      .style("stroke-dasharray", i ? "3,3" : "none");
  }

  const axis = svg.selectAll(".axis")
    .data(skillsData)
    .enter()
    .append("g")
    .attr("class", "axis");

  axis.append("line")
    .attr("x2", (d, i) => radius * Math.cos(angleSlice * i - Math.PI/2))
    .attr("y2", (d, i) => radius * Math.sin(angleSlice * i - Math.PI/2))
    .attr("class", "line")
    .style("stroke", "#ccc")
    .style("stroke-width", "1px");

  axis.append("text")
    .attr("class", "legend")
    .attr("x", (d, i) => (radius + 20) * Math.cos(angleSlice * i - Math.PI/2))
    .attr("y", (d, i) => (radius + 20) * Math.sin(angleSlice * i - Math.PI/2))
    .attr("text-anchor", "middle")
    .style("font-family", config.fontFamily)
    .style("fill", config.textColor)
    .text(d => d.skill)
    .on("click", (e, d) => d.link && window.open(d.link, "_blank"));

  const radarLine = d3.lineRadial()
    .curve(d3.curveLinearClosed)
    .radius(d => rScale(d.level))
    .angle((d, i) => i * angleSlice);

  svg.append("path")
    .datum(skillsData)
    .attr("class", "radar-area")
    .attr("d", radarLine)
    .style("fill", config.color)
    .style("stroke", config.color)
    .style("stroke-width", "2px");

  svg.selectAll(".radar-dot")
    .data(skillsData)
    .enter()
    .append("circle")
    .attr("class", "radar-dot")
    .attr("r", config.dotRadius)
    .attr("cx", (d, i) => rScale(d.level) * Math.cos(angleSlice * i - Math.PI/2))
    .attr("cy", (d, i) => rScale(d.level) * Math.sin(angleSlice * i - Math.PI/2))
    .style("fill", config.color)
    .on("mouseover", function(e, d) {
      d3.select(this).attr("r", config.dotRadius * 1.5);
      tooltip.transition().style("opacity", 1);
      tooltip.html(`${d.skill}<br>Level: ${d.level}`)
        .style("left", `${e.pageX}px`)
        .style("top", `${e.pageY - 28}px`);
    })
    .on("mouseout", function() {
      d3.select(this).attr("r", config.dotRadius);
      tooltip.transition().style("opacity", 0);
    });

  const tooltip = d3.select("#radar-chart-2")
    .append("div")
    .attr("class", "tooltip")
    .style("font-family", config.fontFamily);
}

// Start everything when page loads
document.addEventListener('DOMContentLoaded', loadD3AndDrawCharts);
</script>

Scale Labels (1–10, self assesed):
* 1–2: Theoretical comprehension
* 3–4: Successful execution (1-2 documented instances)
* 5–6: Repeated independent execution (5+ documented instances)
* 7–8: Advanced proficiency
* 9–10: Methodological mastery

Relative domain knowledge assesment
======

<div id="radar-chart-2"></div>

Scale Labels (1–10, self assesed):
* 1–2: Basic Awareness
* 3–4: Fundamental Understanding
* 5–6: Working Knowledge
* 7–8: Advanced Proficiency
* 9–10: Expert-Level Mastery

Work experience, courses
======
* Summer 2025: Laboratory practice regarding electron microscopy
  * Institute of Cytology RAS
  * Duties included: Tissue preparation, Ultratome manipulation 
  * Supervisor: Dmitry S. Bogolyubov, Ph.D., D.Sc., Principal Investigator

* Fall 2024: Laboratory practice regarding confocal microscopy 
  * Institute of Cytology RAS
  * Duties included: Tissue preparation, Microscope manipulation
  * Supervisor: Irina O. Bogolyubova, Ph.D., D.Sc., Leading Researcher

* Summer 2023: Field practice in a National Park
  * Valdaysky National Park
  * Duties included: Hydrochemical and Hydrozoological analysis of limnological objects
  * Supervisor: Ksenia A. Kornoukhova, Research Associate

* Summer 2022: Internship at the Department of Natural History
  * University Museum of Bergen, University of Bergen (Norway)
  * Duties included: Sorting, labeling and identification of entomological and marine samples
  * Supervisors: Dr. Steffen Roth, entomology collection manager and Dr. Nataliya Budaeva, Associate Professor

* Spring 2022: Laboratory practice regarding mircoplastic contamination in fish
  * Saint Petersburg State University of Veterinary Medicine
  * Duties included: Microplastic isolation (from animal tissues), microplastic count and analysis
  * Supervisor: Zlata G. Kaurova, Ph.D., Associate Professor of Biology 

* Fall 2021: Elective histotechnology course
  * Saint Petersburg State University of Veterinary Medicine
  * Obtained skills: Basic microtome operation, tissue staining and preparation

* Summer 2020: Mixed iternship in a veterinarian clinic and a laboratory vivarium
  * Saint Petersburg State University of Veterinary Medicine
  * Duties included: Inventory management, animal care