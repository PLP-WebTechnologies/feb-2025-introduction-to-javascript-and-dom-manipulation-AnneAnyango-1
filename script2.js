
// First, I found the paragraph element using its ID ("someText")
const textElement = document.getElementById("someText");

// Then, changed the text content of the paragraph
textElement.textContent = "The text has been changed by JavaScript!";

// Next, found the button element using its ID ("myButton")
const myButton = document.getElementById("myButton");

// I Also, found the container div where we'll display text ("container")
const containerDiv = document.getElementById("container");

// Now, I set up an event listener to respond to button clicks
myButton.addEventListener("click", function() {
  // This function will run every time the button is clicked!

  // I Changed the text inside the container div when the button is clicked
  containerDiv.textContent = "The button was clicked, and this text appeared!";
});


