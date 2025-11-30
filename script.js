const display = document.getElementById('display');

function append(val) {
    display.value += val;
}

function clearDisplay() {
    display.value = '';
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try{
        let exp = display.value.replace('%','/100');
        display.value = eval(exp);
    } catch {
        display.value = 'Error';
    }
}