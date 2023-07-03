
async function getIssuesData(url = 'https://hrc-lgbtq-2020.herokuapp.com/api') {

    const response = await fetch(url, 
    {
        method: "POST",
        body: JSON.stringify({"query":"query issues ($after: String, $before: String, $first: Int, $last: Int) {\n    issues (after: $after, before: $before, first: $first, last: $last) {\n        pageInfo {\n            hasPreviousPage\n            hasNextPage\n            startCursor\n            endCursor\n        }\n        edges {\n            node {\n                id\n                name\n                states {\n                    id\n                    name\n                    policy\n                    value\n                }\n            }\n            cursor\n        }\n    }\n}","variables":{}})
    });

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    let issuesData = await response.json();

    return issuesData
}

async function getStateData(state_id,url = 'https://hrc-lgbtq-2020.herokuapp.com/api') {
    
const response2 = await fetch(url, 
    {
        method: "POST",
        body: JSON.stringify({"query":"query state ($id: String!) {\n    state (id: $id) {\n        id\n        name\n        region\n        district\n        score {\n            kind\n            description\n        }\n        issues {\n            name\n            kind\n            policy\n            value\n        }\n    }\n}","variables":{"id":`${state_id}`}})
    });

    if (!response2.ok) {
        throw new Error('Network response was not ok');
    }
    let stateData = await response2.json();

    return stateData
}

export {getIssuesData,getStateData}