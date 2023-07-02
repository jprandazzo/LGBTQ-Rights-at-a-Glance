import {getStateData} from "./fetch"
// const issues_list = document.getElementById("issues_list")

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
        toggleHide(issues_list)
        let state_id = d3.event.target.id
        getStateData(state_id)
          .then(data =>{
            console.log('fetched')
            let state_name = data.data.state.name
            let state_description = data.data.state.score.description // (e.g. "High Priority to Achieve Basic Equality")
            let state_kind = data.data.state.score.kind
            let state_issues = data.data.state.issues

            let state_issues_list = document.getElementById('state_issues_list')
            // state_issues_list.appendChild(document.createTextNode(state_name))

            state_issues.forEach(issue => {
              let li = document.createElement('li')
              li.setAttribute('data-id',document.createTextNode(issue.kind))
              li.setAttribute('data-value',document.createTextNode(issue.value))
              let textNode = document.createTextNode(`${issue.name}: ${issue.policy}. Score: ${issue.value}`)
              li.appendChild(textNode)
              
              state_issues_list.appendChild(li)

            })
        })
        toggleHide(state_issues_list)
    })
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