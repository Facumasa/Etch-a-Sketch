// DOM modification -----------------------------------------------------------

const container = document.querySelector("#container");
// the #cointainer is thelling the querySelector that I am looking for something with id="container"


for (let i = 0; i < (16*16); i++) {
    const someDiv = document.createElement("div");
    someDiv.classList.add("content");
    container.appendChild(someDiv);
}

// adds the "content" class to the <div>, so it can be styled with CSS or selected later in JavaScript.

