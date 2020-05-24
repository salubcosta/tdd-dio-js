function sum(a, b){
    return (a && b)? a+b: 'It is necessary two parameters';
}

function multiply(a, b){
    return a * b;
}

function findValue(value){
    return  value ? 'value is not found' : 'value is required';
}

module.exports = { sum, multiply, findValue };