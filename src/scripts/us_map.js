import List from "./list"
const issues_list = document.getElementById("issues_list")

const toggleHide = function(target){
    if (target.style.display === "none") {
      target.style.display = "block";
    } else {
      target.style.display = "none";
    }
}

let loadmap = function() {d3.xml("src/scripts/us.svg")
  .then(data => {
    d3.select("#us_map")
    .node().append(data.documentElement)

    d3.selectAll('path').on('click',() =>{
        // console.log('click')
        // debugger
        toggleHide(issues_list)})
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