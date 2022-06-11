const buttonSum = document.getElementById('sum');
const buttonRest = document.getElementById('rest');
const buttonMulti = document.getElementById('multi');
const buttonDivi = document.getElementById('divi');
const buttonReset = document.getElementById('reset-sum')


function cleanAndPrintOnScreen(operation, contents) {
    const removeOne = document.getElementById('first-num-'+operation);
    const removeTwo = document.getElementById('secound-num-'+operation);
    const screen = document.getElementById('screen-'+operation);
    const buttonReset = document.getElementById('reset-'+operation);
    let button = document.getElementById(operation);

    button.style.display = 'none';
    removeOne.style.display = 'none';
    removeTwo.style.display = 'none';
    screen.style.display = 'block';
    buttonReset.style.display = 'block';
    screen.textContent = contents;
}


function Reset(operation) {
    const buttonReset = document.getElementById('reset-'+operation);
    const screen1 = document.getElementById('first-num-'+operation);
    const screen2 = document.getElementById('secound-num-'+operation);
    const screen = document.getElementById('screen-'+operation);
    const button = document.getElementById(operation);

    screen.style.display = 'none'
    buttonReset.style.display = 'none'
    screen1.style.display = 'block'
    screen2.style.display = 'block'
    button.style.display = 'block'

    document.getElementById('first-num-'+operation).value = '';
    document.getElementById('secound-num-'+operation).value = '';
}


function sum() {
    let num1 = document.getElementById('first-num-sum').value;
    let num2 = document.getElementById('secound-num-sum').value;
    const result = (parseInt(num1)+parseInt(num2));
    operation('sum', result);
}

function rest() {
    let num1 = document.getElementById('first-num-rest').value;
    let num2 = document.getElementById('secound-num-rest').value;
    const result = (parseInt(num1)-parseInt(num2));
    operation('rest', result);
}

function multi() {
    let num1 = document.getElementById('first-num-multi').value;
    let num2 = document.getElementById('secound-num-multi').value;
    const result = (parseInt(num1)*parseInt(num2));
    operation('multi', result);
}

function divi() {
    let num1 = document.getElementById('first-num-divi').value;
    let num2 = document.getElementById('secound-num-divi').value;
    const result = (parseInt(num1)/parseInt(num2));
    operation('divi', result);
}


function operation(op, result) {
    const firstNum = document.getElementById('first-num-'+op).value;
    const secoundNum = document.getElementById('secound-num-'+op).value;


    if (firstNum.length == 0 || secoundNum.length == 0) {
        cleanAndPrintOnScreen(op, 'Debe ingresar 2 valores numericos.');
        
    } else {

        if (isNaN(firstNum) === true || isNaN(secoundNum) === true) {
            cleanAndPrintOnScreen(op, 'Ingrese solo numeros.');

        } else {
            cleanAndPrintOnScreen(op, result);

        }
    }
}


buttonSum.addEventListener('click', sum);
buttonRest.addEventListener('click', rest);
buttonMulti.addEventListener('click', multi);
buttonDivi.addEventListener('click', divi);