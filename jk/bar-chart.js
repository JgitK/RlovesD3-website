const data = [
  { name: "A", value: 1 },
  { name: "B", value: 5 },
  { name: "C", value: 8 },
  { name: "D", value: 10 },
];

const width = 360;
const height = 240;
const margin = { top: 20, right: 20, bottom: 35, left: 35 };

const chart = d3
  .select("#bar-chart")
  .attr("viewBox", `0 0 ${width} ${height}`)
  .attr("preserveAspectRatio", "xMidYMid meet");

const x = d3
  .scaleBand()
  .domain(data.map((item) => item.name))
  .range([margin.left, width - margin.right])
  .padding(0.2);
const y = d3
  .scaleLinear()
  .domain([0, d3.max(data, (item) => item.value)])
  .nice()
  .range([height - margin.bottom, margin.top]);

chart
  .append("g")
  .attr("transform", `translate(0,${height - margin.bottom})`)
  .call(d3.axisBottom(x));
chart
  .append("g")
  .attr("transform", `translate(${margin.left},0)`)
  .call(d3.axisLeft(y).ticks(5));

chart
  .append("g")
  .attr("fill", "#7a978a")
  .selectAll("rect")
  .data(data)
  .join("rect")
  .attr("x", (item) => x(item.name))
  .attr("y", (item) => y(item.value))
  .attr("width", x.bandwidth())
  .attr("height", (item) => y(0) - y(item.value));