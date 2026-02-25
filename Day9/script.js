// Access DOM Elements
let heading = document.getElementById("heading");
let text = document.getElementById("text");

// Change Content Function
function changeContent(){
    heading.innerHTML = "Content Updated Successfully!";
    text.innerHTML = "This content is changed using JavaScript DOM Manipulation.";
}

// Change Style Dynamically
function changeColor(){
    heading.style.color = "green";
    text.style.fontSize = "20px";
}

// Reset Function
function resetContent(){
    heading.innerHTML = "Welcome to DOM Manipulation";
    text.innerHTML = "Click the button below to change this text and style.";
    heading.style.color = "black";
    text.style.fontSize = "16px";
}