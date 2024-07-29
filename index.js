// Code your solutions in this file

function countDown(number) {
    let currentNumber = number;
    while (currentNumber >= 0) {
        console.log(currentNumber);
        currentNumber--;
    }
}

function writeCards(names, event) {
    return names.map(name => `Thank you, ${name}, for the wonderful ${event} gift!`);
}

