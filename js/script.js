const numbers = document.querySelectorAll(".button-main");
const display = document.querySelector(".black-display")
const operator = document.querySelectorAll(".button-secondary");
const span = document.querySelector("span")
 let firstNum = "";
 
 for (let i = 0; i < numbers.length; i++) {
     let btnNumber = numbers[i]
    btnNumber.addEventListener("click", function () {
    span.classList.add("hidden");
    firstNum += btnNumber.innerHTML
    console.log(this.innerHTML);
    display.innerHTML += btnNumber.innerHTML;
     })
}
