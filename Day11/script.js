const display = document.getElementById("display");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");

numbers.forEach(button=>{
button.addEventListener("click",()=>{
display.value += button.textContent;
});
});

operators.forEach(button=>{
button.addEventListener("click",()=>{
display.value += button.textContent;
});
});

document.getElementById("equals").addEventListener("click",()=>{
try{
display.value = eval(display.value);
}catch{
display.value = "Error";
}
});

document.getElementById("clear").addEventListener("click",()=>{
display.value = "";
});

document.getElementById("del").addEventListener("click",()=>{
display.value = display.value.slice(0,-1);
});

document.getElementById("themeToggle").addEventListener("click",()=>{
document.body.classList.toggle("dark");
});