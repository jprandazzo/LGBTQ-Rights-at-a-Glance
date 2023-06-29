import Example from "./scripts/example"
import getData from "./scripts/fetch"

document.addEventListener("DOMContentLoaded", () => {
    const main = document.getElementById("main")
    new Example(main)
})

getData()
    .then(data => {
        // If the fetch was successful, here we can manipulate the data we received
        console.log(data);
    })
    .catch(error => {
        // If our fetch was unnsuccessful, here we can handle our error(s)
        console.error('There has been a problem with your fetch operation: ', error);
    });