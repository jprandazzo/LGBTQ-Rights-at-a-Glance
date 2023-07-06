import {getStateData} from "./fetch"
import List from "./list"
import Button from './button'
const issues_list = new List(document.getElementById("issues_list"),"block")
// const state_issues_list = new List(document.getElementById('state_issues_list'),"block")

let grapharea = document.getElementById('myChart');
let myChart = new Chart(grapharea, {type:'bar'});
myChart.globalCompositeOperation='destination-over';
grapharea.style.display = 'none';


let loadmap = function() {d3.xml("https://aa-lgbtq-rights-map.s3.us-east-2.amazonaws.com/images/us.svg")
  .then(data => {
    d3.select("#us_map")
    .node().append(data.documentElement)

    d3.selectAll('path').on('click',() =>{
        issues_list.obj.style.display = 'none';
        grapharea.style.display = 'block';
        let state_id = d3.event.target.id;
        // state_issues_list.clearList();
        let back_button = new Button(document.getElementById("back_button"), 'Clear Selection', 'greyedOut')
        back_button.setActive();
        getStateData(state_id)
          .then(data =>{
            let state_name = data.data.state.name
            let state_description = data.data.state.score.description // (e.g. "High Priority to Achieve Basic Equality")
            let state_kind = data.data.state.score.kind
            let state_issues = data.data.state.issues.map((issue, idx) => {return {x:idx,y:issue.value, policy: issue.policy}})

            // state_issues_list.appendChild(document.createTextNode(state_name))
            myChart.destroy()
            Chart.defaults.font.size = 16;
            myChart = new Chart(grapharea, {
              type: 'bar',
              data: {
                labels: data.data.state.issues.map(issue => issue.name),
                datasets: [{
                  data: state_issues,
                  borderWidth: 1,
                  backgroundColor: state_issues.map(el => setColor(el.y))
                }]
              },
              options: {
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    display: false
                  },
                  title: {
                    display: true,
                    text: `Score on each issue for state of ${state_name}`
                  },
                  tooltip: {
                    displayColors: false,
                    callbacks: {
                      label: ((tooltipItem,data) =>{
                          return `Policy: ${tooltipItem.raw.policy}`
                      })
                    }
                  }
                },
                scales: {
                  y: {
                    beginAtZero: true
                  }
                }
              }
            });
            // Chart.defaults.global.defaultFontColor = "#000000";

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
        // state_issues_list.toggleHide()
    })
  })
}

let setColor = function(score) {
    if (score <0) {
        return '#F75B5B'
    } else if (score === 0) {
      return '#5d5c61'
    } else if (score === 1 || score === 1) {
        return '#B3E5A2'
    } else if (score > 1) {
        return '#689D55'
    }
}

export {loadmap,setColor}
