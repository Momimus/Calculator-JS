const display = document.getElementById('display');

document.getElementById('ac').addEventListener('click', () => {
    display.value = '';
});

document.getElementById('delete').addEventListener('click', () => {
    display.value = display.value.toString().slice(0,-1);
});

document.getElementById('dot').addEventListener('click', () => {
    display.value += '.';
});

document.getElementById('divide').addEventListener('click', () => {
    display.value += '/';
});

document.getElementById('seven').addEventListener('click', () => {
    display.value += '7';
});

document.getElementById('eight').addEventListener('click', () => {
    display.value += '8';
});

document.getElementById('nine').addEventListener('click', () => {
    display.value += '9';
});

document.getElementById('multiply').addEventListener('click', () => {
    display.value += '*';
});

document.getElementById('four').addEventListener('click', () => {
    display.value += '4';
});

document.getElementById('five').addEventListener('click', () => {
    display.value += '5';
});

document.getElementById('six').addEventListener('click', () => {
    display.value += '6';
});

document.getElementById('minus').addEventListener('click', () => {
    display.value += '-';
});

document.getElementById('one').addEventListener('click', () => {
    display.value += '1';
});

document.getElementById('two').addEventListener('click', () => {
    display.value += '2';
});

document.getElementById('three').addEventListener('click', () => {
    display.value += '3';
});

document.getElementById('plus').addEventListener('click', () => {
    display.value += '+';
});

document.getElementById('doubleZero').addEventListener('click', () => {
    display.value += '00';
});

document.getElementById('zero').addEventListener('click', () => {
    display.value += '0';
});

document.getElementById('equals').addEventListener('click', () => {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";       
    }
});