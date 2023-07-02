import {getStateData} from "./fetch"
import List from "./list"
const issues_list = new List(document.getElementById("issues_list"),"block")
const state_issues_list = new List(document.getElementById('state_issues_list'),"block")

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
        issues_list.toggleHide()
        let state_id = d3.event.target.id;
        state_issues_list.clearList();
        getStateData(state_id)
          .then(data =>{
            let state_name = data.data.state.name
            let state_description = data.data.state.score.description // (e.g. "High Priority to Achieve Basic Equality")
            let state_kind = data.data.state.score.kind
            let state_issues = data.data.state.issues

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

        // GOAL: trying to hide all other states when a state is click.
        // RESULT: Not working as of Sunday 7/2 6:00 PM

        // document.querySelectorAll('path').forEach(state => {
        //   if (state.id !== state_id) {
        //     state.style.display = 'none !important'
        //   }
        //   debugger
        //   console.log('test')
        // })
        state_issues_list.toggleHide()
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