// Verify D3 is available
if (typeof d3 === 'undefined') {
  console.error("D3.js not loaded! Check your script paths.");
} else {
  console.log("D3.js loaded successfully. Version:", d3.version);
}

// Main chart initialization
function initCharts() {
  // Get CSS variables with fallbacks
  const rootStyles = getComputedStyle(document.documentElement);
  const fontFamily = rootStyles.getPropertyValue('--global-font-family').trim() || 'Arial, sans-serif';
  const textColor = rootStyles.getPropertyValue('--global-text-color-light').trim() || '#333';

  // Chart 1 Data
  const skillsData1 = [
    { skill: 'Electron Microscopy (TEM)', level: 3 },
    { skill: 'Confocal Microscopy', level: 6 },
    { skill: 'Immunohistochemistry', level: 5 },
    { skill: 'FISH', level: 3 },
    { skill: 'Data analysis using R', level: 7 },
    { skill: 'ImageJ macros', level: 8 },
    { skill: 'Karyotyping', level: 3 }
  ];

  // Chart 2 Data
  const skillsData2 = [
    { skill: 'Non-coding RNA', level: 6 },
    { skill: 'Interfase nucleus', level: 8 },
    { skill: 'Eukaryotic transcription', level: 3 },
    { skill: 'Cytogenetics', level: 4 },
    { skill: 'Apoptosis', level: 5 },
    { skill: 'Vesicular transport', level: 7 },
    { skill: 'Gametogenesis', level: 5 },
    { skill: 'Cell signalling', level: 6 },
    { skill: 'Modern optical systems', level: 4 }
  ];

  // Initialize both charts with required parameters
  drawRadar1(skillsData1, fontFamily, textColor);
  drawRadar2(skillsData2, fontFamily, textColor);
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

  const container = d3.select("#radar-chart-1")
    .style("visibility", "visible")
    .style("overflow", "visible");

  const svg = container.append("svg")
    .attr("width", config.width)
    .attr("height", config.height)
    .attr("viewBox", `0 0 ${config.width} ${config.height}`)
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
    .text(d => d.skill);

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

  const container = d3.select("#radar-chart-2")
    .style("visibility", "visible")
    .style("overflow", "visible");

  const svg = container.append("svg")
    .attr("width", config.width)
    .attr("height", config.height)
    .attr("viewBox", `0 0 ${config.width} ${config.height}`)
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
    .text(d => d.skill);

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

// Simplified initialization - D3 is loaded via <script> tag
document.addEventListener('DOMContentLoaded', () => {
  document.body.style.visibility = 'visible';
  initCharts();
});