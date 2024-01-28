/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2){
    return number1 + number2; 
}

function addNumbers(){
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);

    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
substract = function(sub1, sub2) {
        return sub1 - sub2;
}

function subtractNumbers(){
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);

    document.querySelector('#difference').value = substract(subtractNumber1, subtractNumber2);
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);
/* Arrow Function - Multiply Numbers */
multiply = (mult1, mult2) => mult1 * mult2;

function multiplyNumbers(){
    let factor1 = Number(document.querySelector('#factor1').value);
    let factor2 = Number(document.querySelector('#factor2').value);
    
    document.querySelector('#product').value = multiply(factor1, factor2);
}

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */
divide = (div1, div2) => div1 / div2;

function divideNumbers(){
    let dividend = Number(document.querySelector('#dividend').value);
    let divisor = Number(document.querySelector('#divisor').value);
    
    document.querySelector('#quotient').value = divide(dividend, divisor);
}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);


/* Decision Structure */
document.querySelector('#getTotal').addEventListener('click', getTotal);

function getTotal(){
    let subtotal = Number(document.querySelector('#subtotal').value);
    let membership = document.querySelector('#member').checked;

    if(membership){
        subtotal *= 0.8;
    }

    document.querySelector('#total').innerHTML = `$${subtotal.toFixed(2)}`;
}
/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let array1 = [];

for(let i = 0; i < 13; i++){
    array1.push(i+1);
}

document.querySelector('#array').innerHTML = array1;
/* Output Odds Only Array */
function isOdd(num){
    if(num%2 !== 0){
        return true;
    }
    else{
        return false;
    }
}
let odds = array1.filter(isOdd);

document.querySelector('#odds').innerHTML = odds;
/* Output Evens Only Array */

let evens = array1.filter(num => num % 2 === 0);

document.querySelector('#evens').innerHTML = evens;

/* Output Sum of Org. Array */
let sumArray = array1.reduce((sum, number) => sum + number);

document.querySelector('#sumOfArray').innerHTML = sumArray;

/* Output Multiplied by 2 Array */
let multArray = array1.map(num => num * 2);

document.querySelector('#multiplied').innerHTML = multArray;

/* Output Sum of Multiplied by 2 Array */
let sumMultArray = (array1.map(num => num * 2)).reduce((sum, num) => sum + num);

document.querySelector('#sumOfMultiplied').innerHTML = sumMultArray;
