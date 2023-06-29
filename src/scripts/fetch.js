let state = 'CA'
export default async function getData(url = 'https://hrc-lgbtq-2020.herokuapp.com/api') {
    // We set a default value for the url to our api. This is recommended, but not required.

    // We await our fetch, which will return a promise object
    // Because we're using the await keyword, 
        // we have declared getData with to be an async function
    const response = await fetch('https://hrc-lgbtq-2020.herokuapp.com/api', 
    {
        method: "POST",
        body: JSON.stringify({"query":"query state ($id: String!) {\n    state (id: $id) {\n        id\n        name\n        region\n        district\n        score {\n            kind\n            description\n        }\n        issues {\n            name\n            kind\n            policy\n            value\n        }\n    }\n}","variables":{"id":`${state}`}})
    });

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();

    // response.json() parses JSON response into native JavaScript objects
    // response.json() is asynchronous
    return data
}

// async function getData() {fetch('https://hrc-lgbtq-2020.herokuapp.com/api', 
// {
//     method: "POST",
//     body: JSON.stringify({"query":"query state ($id: String!) {\n    state (id: $id) {\n        id\n        name\n        region\n        district\n        score {\n            kind\n            description\n        }\n        issues {\n            name\n            kind\n            policy\n            value\n        }\n    }\n}","variables":{"id":`${state}`}})
// });

//     if (!response.ok) {
//         throw new Error('Network response was not ok');
//     }
//     const data = await response.json();

//     // response.json() parses JSON response into native JavaScript objects
//     // response.json() is asynchronous
//     return data

// }

// fetch('https://hrc-lgbtq-2020.herokuapp.com/api', 
// {
//     method: "POST",
//     body: JSON.stringify({"query":"query state ($id: String!) {\n    state (id: $id) {\n        id\n        name\n        region\n        district\n        score {\n            kind\n            description\n        }\n        issues {\n            name\n            kind\n            policy\n            value\n        }\n    }\n}","variables":{"id":`${state}`}})
// })
//   .then(response => response.json())
//   .then(data => console.log(data))