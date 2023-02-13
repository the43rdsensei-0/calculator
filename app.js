const display = document.getElementById('screen');

console.log(display.value);

const wipeAll = () => {
    display.value = '';
}

const wipe = function () {
    let value = display.value;
    display.value = value.slice(0, -1)
    return;
}

const show = (n) => {
    display.value += n;
}

const calc = () => {
    display.value = eval(display.value);
    console.log(display.value);
}

