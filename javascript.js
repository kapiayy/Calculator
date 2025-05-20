


function add(x,y){
 return x + y
}
function subtract(x,y){
    return x -y
}

function multiply(x,y){
    return x * y
}

function divide(x,y){
    return x / y
}

function operate(x,y,operator){
    switch(operator){
        case "*" :
            return multiply(x,y)
            
        case "+":
            return add(x,y)
           
        case "-":
            return subtract(x,y)
          
        case "/":
            return divide(x,y)
           
        }
}

const clear = document.querySelector(".clear")
clear.addEventListener("click", () => {
    display.textContent = ""
})

const numbers = document.querySelectorAll(".number")
numbers.forEach((element) => element.addEventListener("click", () => {
    display.textContent = display.textContent + element.textContent
}))

const display = document.querySelector(".display")
display.textContent = ''

let firstNumber = 0
let SecondNumber = 0

let equation = ''




const operators = document.querySelectorAll(".operator")
operators.forEach((element) => element.addEventListener("click", () => {
    display.textContent =''
    equation = `${element.textContent}`
    console.log(equation)
    console.log(firstNumber)
    console.log(SecondNumber)
}))

numbers.forEach((element) => element.addEventListener("click", () => {
    firstNumber = parseInt(display.textContent)
    console.log(firstNumber)
}))


console.log(equation)
const result = document.querySelector(".result")

result.addEventListener("click", () => {
    SecondNumber = parseInt(display.textContent)
    console.log(firstNumber,SecondNumber,equation)
    console.log(operate(firstNumber,SecondNumber,equation))
    display.textContent = operate(firstNumber,SecondNumber,equation)
})
