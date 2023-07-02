import Button from "./scripts/button"
import Example from "./scripts/example"
import List from "./scripts/list"
import Issue from "./scripts/issue"
import {getIssuesData} from "./scripts/fetch"
import {loadmap,setClass} from "./scripts/us_map"

document.addEventListener("DOMContentLoaded", () => {
    const title = document.getElementById("title")
    new Example(title)

    const button = document.getElementById("back_button")
    new Button(button, 'Go back')

    const issues_list = document.getElementById("issues_list")
    new List(issues_list, 'block')

    
    const state_issues_list = document.getElementById("state_issues_list")
    new List(state_issues_list, 'none')

    loadmap();
    // document.querySelectorAll('path').forEach(state => {
    //     state.addEventListener('click', (event) =>{
    //         state_id = event.target.id
    //         debugger
    //         console.log(state_id)
    //     })
    // })
})

// let color_scheme = function(num){
//     if (num < 0){ 
//         return '#F75B5B'
//     } else if (num === 0 || num === 1) {
//         return '#B3E5A2'
//     } else if (num > 1){
//         return '#689D55'
//     }
// }

getIssuesData()
    .then(data => { 

        data.data.issues.edges.forEach(obj => {
            new Issue(obj);
            let li = document.createElement("li");
            li.setAttribute('id',`${obj.node.id}`);
            let textNode = document.createTextNode(obj.node.name)
            li.appendChild(textNode)
            li.addEventListener("click", e => {obj.node.states.forEach(state => {
                let pathId = document.querySelector(`#${state.id}`)
                pathId.setAttribute('data-value',`${state.value}`)
                pathId.setAttribute('data-policy',`${state.policy}`)
                pathId.setAttribute('class',setClass(state.value))
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


    