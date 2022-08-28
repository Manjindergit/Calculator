let operate = false;
let operand = '';
const inputDisplay = document.querySelector('.input');
const resultDisplay = document.querySelector('.resultOutput');
const numpad=document.querySelectorAll('.numpad')
//inputDisplay.textContent='';
//resultDisplay.textContent='';

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
            resultDisplay.textContent=subtract(parseInt(resultDisplay.textContent),parseInt(inputDisplay.textContent))
            inputDisplay.textContent=0;            
            break;
        case '*':
            resultDisplay.textContent=multiply(parseInt(resultDisplay.textContent),parseInt(inputDisplay.textContent))
            inputDisplay.textContent=0;
            break;
        case '/':
            resultDisplay.textContent=division(parseInt(resultDisplay.textContent),parseInt(inputDisplay.textContent))
            inputDisplay.textContent=0;
            break;
        default:
        // code block
    }
    
    for(x in numpad){
        numpad[x].disabled=true;
    }
}

function input(number) {
    if (operate === false) {
        resultDisplay.textContent += number;
    }
    
    inputDisplay.textContent += number;
}

function operator(operandSign) {
    operate = true;
    operand=operandSign;
    for(x in numpad){
        numpad[x].disabled=false;
    }
}

