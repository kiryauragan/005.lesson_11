let numbers = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];


let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
let positiveNumbers = numbers.filter((num) => num > 0);
let minNumber = Math.min(...numbers);
let minIndex = numbers.indexOf(minNumber);
let maxNumber = Math.max(...numbers);
let maxIndex = numbers.indexOf(maxNumber);

console.log(`
Сума масиву: ${sum}
Позитивні числа: ${positiveNumbers}

Мінімальне значення: ${minNumber}
Індекс мінімального значення: ${minIndex}

Максимальне значення: ${maxNumber}
Індекс максимального значення: ${maxIndex}


`)
// console.log(positiveNumbers);
