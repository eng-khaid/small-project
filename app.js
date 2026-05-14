// select container
const container = document.querySelector("#container");

// create new div
const newDiv = document.createElement("div");

// add text
newDiv.textContent = "Hello, world!";

// add class
newDiv.classList.add("my-class");

// add id
newDiv.id = "helloDiv";

// append div to container
container.appendChild(newDiv);

// click event
container.addEventListener("click", (event) => {
    container.textContent =
        "You clicked on " + event.target.id;
});
container.addEventListener("click", (event) => {
    container.textContent =
        "You clicked on " + event.target.id;
});