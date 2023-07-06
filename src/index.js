import Button from "./scripts/button"
import Title from "./scripts/title"
import List from "./scripts/list"
import Issue from "./scripts/issues_chart"
import {getIssuesData,getStateData} from "./scripts/fetch"
import Navbar from "./scripts/navbar"
import {loadmap} from "./scripts/us_map"
import Info from "./scripts/info"

let setColor = function(score) {
    if (score <0) {
        return '#F75B5B'
    } else if (score === 0) {
      return '#989898'
    } else if (score === 1 || score === 1) {
        return '#B3E5A2'
    } else if (score > 1) {
        return '#689D55'
    }
}

document.addEventListener("DOMContentLoaded", () => {

    const title = new Title (document.getElementById("title"))

    // debugger
    let back_button = new Button(document.getElementById("back_button"), 'Clear Selection', 'greyedOut')

    const issues_list = new List(document.getElementById("issues_list"), 'block')

    const info = new Info(document.getElementById('info'))
    
    // const state_issues_list = new List(document.getElementById("state_issues_list"), 'none')

    // const navbar = new Navbar(document.getElementById('navbar'))

    loadmap();
})

// let grapharea = document.getElementById('myChart').getContext('2d');
// let myChart = new Chart(grapharea, {type:'bar'})

getIssuesData()
    .then(data => { 

        data.data.issues.edges.forEach(obj => {
            let li = document.createElement("li");
            li.setAttribute('id',`${obj.node.id}`);
            let textNode = document.createTextNode(obj.node.name)
            li.appendChild(textNode)
            li.addEventListener("click", e => {obj.node.states.forEach(state => {
                let pathId = document.querySelector(`#${state.id}`)
                pathId.setAttribute('data-value',`${state.value}`)
                pathId.setAttribute('data-policy',`${state.policy}`)
                pathId.style.fill = setColor(state.value)
                let back_button = new Button(document.getElementById("back_button"), 'Clear Selection', 'greyedOut')
                back_button.setActive()
                // debugger
            })
            })
            issues_list.appendChild(li)
        })
        
        // state_issues_list.forEach(obj => {
        //     let list = new List(obj.node, "none")
        //     obj.node.issues.forEach(issue =>{

        //     })
        // })
    })
    .catch(error => {
        // If our fetch was unnsuccessful, here we can handle our error(s)
        console.error('There has been a problem with your fetch operation: ', error);
    });
