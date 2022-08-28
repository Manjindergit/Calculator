let operate = false;
let operand = '';
const inputDisplay = document.querySelector('.input');
const resultDisplay = document.querySelector('.resultOutput');

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function division(a, b) {
    return a / b;
}

function calculate() {
    
    switch (operand) {
        case '+':
            resultDisplay.textContent=add(parseInt(resultDisplay.textContent),parseInt(inputDisplay.textContent))
            inputDisplay.textContent=0;
            
            break;
        case '-':
            // code block
            break;
        case '*':
            // code block
            break;
        case '/':
            // code block
            break;
        default:
        // code block
    }
}

function input(number) {
    if (operate === false) {
        resultDisplay.textContent = number;
    }
    
    inputDisplay.textContent = number;
}

function operator(operandSign) {
    operate = true;
    operand=operandSign;
}

