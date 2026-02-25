const heading = document.getElementById("heading");
const text = document.getElementById("text");
const body = document.body;

document.getElementById("contentBtn").addEventListener("click",()=>{
heading.textContent = "Content Updated!";
text.textContent = "You successfully handled a click event and dynamically updated the DOM content.";
});

document.getElementById("styleBtn").addEventListener("click",()=>{
heading.style.color = "crimson";
text.style.fontSize = "18px";
text.style.fontWeight = "bold";
});

document.getElementById("toggleBtn").addEventListener("click",()=>{
body.classList.toggle("dark-mode");
});

document.getElementById("resetBtn").addEventListener("click",()=>{
location.reload();
});
