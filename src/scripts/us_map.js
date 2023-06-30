let loadmap = function() {d3.xml("src/scripts/us.svg")
  .then(data => {
    d3.select("#us_map")
    .node().append(data.documentElement)

    d3.selectAll('path').on('click',() =>{console.log('click')})
  })
}

export {loadmap}