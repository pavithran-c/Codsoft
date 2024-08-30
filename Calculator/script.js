let display = document.getElementById('display');
let currentInput = '';

function appendNumber(number) {
    if (currentInput === '0' && number !== '.') {
        currentInput = number;
    } else {
        currentInput += number;
    }
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    updateDisplay();
}

function deleteLastChar() {
    currentInput = currentInput.slice(0, -1);
    if (currentInput === '') {
        currentInput = '0';
    }
    updateDisplay();
}

function calculateResult() {
    try {
        currentInput = new Function('return ' + currentInput)().toString();
    } catch {
        currentInput = 'Error';
    }
    updateDisplay();
}

function updateDisplay() {
    display.innerText = currentInput;
}

function handleKeyPress(event) {
    const key = event.key;

    if (key >= '0' && key <= '9') {
        appendNumber(key);
    } else if (key === '/' || key === '*' || key === '-' || key === '+' || key === '%') {
        appendNumber(key);
    } else if (key === 'Enter' || key === '=') {
        calculateResult();
    } else if (key === 'Escape') {
        clearDisplay();
    } else if (key === '.') {
        appendNumber(key);
    } else if (key === 'Backspace') {
        deleteLastChar();
    } else if (key === '(' || key === ')') {
        appendNumber(key);
    }
}

document.addEventListener('keydown', handleKeyPress);
