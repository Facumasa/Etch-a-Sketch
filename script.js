
//Global variables
let numSquaresGlobal = 40;

// DOM modification -----------------------------------------------------------

// number of squares button
const squaresButton = document.createElement("button"); // Create button
squaresButton.classList.add("button1"); // Add a class for CSS styling (class name is button1)

squaresButton.textContent = "Number of Squares per side"; // Set button text

// document.body.appendChild(squaresButton); // Add the button to the page (this would ad it at the bottom of the body created from the html file, so AFTER the container)
document.body.prepend(squaresButton); //the prepend method appends to the body but before any other child present in the body

const container = document.querySelector("#container");
// the #cointainer is thelling the querySelector that I am looking for something with id="container"

// creates all the divs
for (let i = 0; i < (16*16); i++) {
    const someDiv = document.createElement("div");
    someDiv.classList.add("content");
    // adds the "content" class to the <div>, so it can be styled with CSS or selected later in JavaScript.
    container.appendChild(someDiv);

    someDiv.addEventListener("mouseover", () => {
        someDiv.style.backgroundColor = "black"; // Change color on hover
    });
}


// Go back to white button
const deleteButton = document.createElement("button"); // Create button
deleteButton.classList.add("button2"); // Add a class for CSS styling (class name is button2)

deleteButton.textContent = "Delete"; // Set button text

const squares = document.querySelectorAll(".content"); // Select all elements with class "content"

deleteButton.addEventListener("click", () => {
    squares.forEach(square => {
        square.style.backgroundColor = "white"; // Change background color
    });
});

document.body.appendChild(deleteButton); // Add the button to the page


squaresButton.addEventListener("click", () => {
    // prompt box syntax
    let numberSquares = prompt("Please enter your name", "Just the number here");
    if (numberSquares == null || numberSquares == "" || isNaN(numberSquares)) {
      alert("Error, number of squares assumed 40");
      numberSquares = 40;
    }
    numSquaresGlobal = parseInt(numberSquares); //updates the value to the number given
    
});
