const numbers = document.querySelectorAll(".button-main");
const display = document.querySelector(".black-display")
const operator = document.querySelectorAll(".button-secondary");
const equal = document.querySelector(".button-equal")
const span = document.querySelector("span")
const reset = document.querySelector(".button-reset")
let firstNum = "";

for (let i = 0; i < numbers.length; i++) {
    let btnNumber = numbers[i]
    btnNumber.addEventListener("click", function () {
        // span.classList.add("hidden");
        display.innerHTML += btnNumber.innerHTML;
        console.log(display.innerHTML);
    })
}

let operatorValue = "";
for (let i = 0; i < operator.length; i++) {
    let btnOperator = operator[i]
    btnOperator.addEventListener("click", function () {
        operatorValue = btnOperator.innerHTML
        console.log(btnOperator.innerHTML);
        firstNum += display.innerHTML
        console.log(firstNum, operatorValue);
        display.innerHTML = "0"
    })
}


equal.addEventListener('click', function() {

    switch (operatorValue) {
        case '+': display.innerHTML = parseInt(firstNum) + parseInt(display.innerHTML);
            console.log('somma');
            break;

        case '-': display.innerHTML = parseInt(firstNum) - parseInt(display.innerHTML);
            console.log('sottrazione');
            break;

        case '*': display.innerHTML = parseInt(firstNum) * parseInt(display.innerHTML);
            console.log('sottrazione');
            break;

        case '/': display.innerHTML = parseInt(firstNum) / parseInt(display.innerHTML);
            console.log('sottrazione');
            break;
    
        default:
            break;
    }
    console.warn(parseInt(firstNum), operatorValue, parseInt(display.innerHTML));
});

reset.addEventListener('click', function() {
    firstNum = "0";
    operatorValue = "";
    display.innerHTML = "0";
    console.log('resettato');
});