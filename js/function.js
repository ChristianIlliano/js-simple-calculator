const numbers = document.querySelectorAll(".button-main");
const display = document.querySelector(".black-display")
const span = document.querySelector("span")
 let firstNum = "";

 for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", function () {
    firstNum += numbers[i].innerHTML
    console.log(numbers[i]);
    display.innerHTML += numbers[i].innerHTML
    span.classList.add(".hidden")
     })
}

