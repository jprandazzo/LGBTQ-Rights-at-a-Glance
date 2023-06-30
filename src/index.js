import Example from "./scripts/example"
import List from "./scripts/list"
import Issue from "./scripts/issue"
import getData from "./scripts/fetch"
import {loadmap} from "./scripts/us_map"

document.addEventListener("DOMContentLoaded", () => {
    const title = document.getElementById("title")
    new Example(title)

    const issues_list = document.getElementById("issues_list")
    new List(issues_list)
    loadmap();
})

let color_scheme = {
    '<0': '#F75B5B',
    '0-1': '#B3E5A2',
    '2-6': '#689D55'
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
                debugger
                path_id.setAttribute('data-policy',`${state.policy}`)
                // path_id.style.color = function() {
                //     if path_id.getAttribute('data-value')
                // }
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
    