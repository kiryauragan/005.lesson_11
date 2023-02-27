let numbers = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];


let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
let positiveNumbers = numbers.filter((num) => num > 0);
let minNumber = Math.min(...numbers);
let minIndex = numbers.indexOf(minNumber);
let maxNumber = Math.max(...numbers);
let maxIndex = numbers.indexOf(maxNumber);
let negativeNumbers = numbers.filter((num) => num < 0);
let notEvenNumbers = positiveNumbers.filter(number => number % 2 != 0);
let evenNumbers = positiveNumbers.filter(number => number % 2 === 0);
let sumEvenNumbers = evenNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
let sumNotEvenNumbers = notEvenNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
let positiveMultiplication = positiveNumbers.reduce((accumulator, currentValue) => accumulator * currentValue);
let biggestNumber = numbers.map((num, index) => index === maxIndex ? num : 0);

console.log(`
Сума масиву: ${sum};
Позитивні числа: ${positiveNumbers} та їх кількість ${positiveNumbers.length};

Мінімальне значення: ${minNumber};
Індекс мінімального значення: ${minIndex};

Максимальне значення: ${maxNumber};
Індекс максимального значення: ${maxIndex};

Негативні числа: ${negativeNumbers} та їх кількість ${negativeNumbers.length};

Непарні позитивні числа: ${notEvenNumbers} та їх кількість ${notEvenNumbers.length};

Парні позитивні числа: ${evenNumbers} та їх кількість ${evenNumbers.length};

Сума парних позитивних елементів: ${sumEvenNumbers};

Сума непарних позитивних елементів: ${sumNotEvenNumbers};

Добуток позитивних елементів: ${positiveMultiplication};

Найбільший серед елементів масиву: ${biggestNumber};

`)

