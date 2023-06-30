let loadmap = function() {d3.xml("src/scripts/us.svg")
  .then(data => {
    d3.select("#us_map")
    .node().append(data.documentElement)

    d3.selectAll('path').on('click',() =>{console.log('click')})
  })
}

let setClass = function(score) {
    if (score <0) {
        return 'color_red'
    } else if (score === 0 || score === 1) {
        return 'color_pale_green'
    } else if (score > 1) {
        return 'color_green'
    }
}

export {loadmap,setClass}