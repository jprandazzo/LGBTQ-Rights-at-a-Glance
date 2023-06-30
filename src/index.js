import Example from "./scripts/example"
import List from "./scripts/list"
import Issue from "./scripts/issue"
import getData from "./scripts/fetch"
import {loadmap,setClass} from "./scripts/us_map"

document.addEventListener("DOMContentLoaded", () => {
    const title = document.getElementById("title")
    new Example(title)

    const issues_list = document.getElementById("issues_list")
    new List(issues_list)
    loadmap();
})

let color_scheme = function(num){
    if (num < 0){ 
        return '#F75B5B'
    } else if (num === 0 || num === 1) {
        return '#B3E5A2'
    } else if (num > 1){
        return '#689D55'
    }
}

getData()
    .then(data => {
        let issue_list = data.data.issues.edges
        issue_list.forEach(obj => {
            new Issue(obj);
            let li = document.createElement("li");
            li.setAttribute('id',`${obj.node.id}`);
            let textNode = document.createTextNode(obj.node.name)
            li.appendChild(textNode)
            li.addEventListener("click", e => {obj.node.states.forEach(state => {
                let path_id = document.querySelector(`#${state.id}`)
                path_id.setAttribute('data-value',`${state.value}`)
                path_id.setAttribute('data-policy',`${state.policy}`)
                path_id.setAttribute('class',setClass(state.value))
                // debugger
                console.log('test')
            })
            })
            document.getElementById('issues_list').appendChild(li)
        })
        // issues.forEach(obj => console.log(obj))
    })
    .catch(error => {
        // If our fetch was unnsuccessful, here we can handle our error(s)
        console.error('There has been a problem with your fetch operation: ', error);
    });

let issues_d3 = d3.select('#issues_list')
issues_d3.selectAll('li')
    .on('mouseover',() =>{console.log('hover')})
    