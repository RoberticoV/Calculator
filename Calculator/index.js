// Calculator Program

const display = document.getElementById("display");

function appendToDisplay(input) {
    if (input === '(-)') {
        toggleNegative();
    } else if (input === '%') {
        calculatePercentage();
    } else {
        display.value += input;
    }
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    display.value = eval(display.value);
}

function toggleNegative() {
    if (display.value !== '' && display.value !== '0') {
        display.value = (display.value.startsWith('-')) ? display.value.slice(1) : '-' + display.value;
    }
}

function calculatePercentage() {
    const expression = display.value.trim();
    const percentageIndex = expression.lastIndexOf('%');
    
    if (percentageIndex !== -1) {
        const percentage = parseFloat(expression.substring(percentageIndex - 1, percentageIndex + 1)) / 100;
        const expressionWithoutPercentage = expression.substring(0, percentageIndex - 1);
        display.value = eval(expressionWithoutPercentage) * percentage;
    } else {
        display.value = eval(expression) / 100;
    }
}

document.addEventListener('keydown', function(event) {
    if ((event.key >= '0' && event.key <= '9') || ['+', '-', '*', '/'].includes(event.key)) {
        appendToDisplay(event.key);
    } else if (event.key == "Enter"){
        calculate();
    } else if (event.key == "Backspace"){
        const currentValue = display.value;
        display.value = currentValue.slice(0, -1);
    }
});
