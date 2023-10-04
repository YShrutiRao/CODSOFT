function calculate() {
    const display = document.getElementById('display');
    try {

        display.value = eval(display.value);
    } catch (error) {

        display.value = 'Error';
    }
}


function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}


function appendValue(value) {
    const display = document.getElementById('display');
    display.value += value;
}


document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.button');

    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            const value = button.value;

            if (value === '=') {
                calculate();
            } else if (value === 'C') {
                clearDisplay();
            } else {
                appendValue(value);
            }
        });
    });
});

