// #1
// Напишіть функцію, яка рекурсивно обчислює n-те число Фібоначчі. 
// Числа Фібоначчі визначаються як послідовність, у якій кожне число дорівнює сумі двох попередніх чисел 
// Використовуйте рекурсію для обчислення чисел Фібоначчі.
// (наприклад, 0, 1, 1, 2, 3, 5, 8 і так далі). 
console.log('Завдання №1');

// Фібонначі без рекурсії 

// let number =+ prompt('Введіть номер числа Фібоначчі яке хочете побачити');
// let array = [];

// function recursionFibonach(num) {

//     for(let i = 0; i <= num; i++) {
//         if (i == 0 || i ==1) {
//         array.push(i);
//     }
//     }

//     for (let k = 1; k <= num; k++) {
//         array[array.length] = array[k] + array[k-1];
//     }

//     return array;
// }

// recursionFibonach(number)

// console.log('Числа Фібонначі:', array);
// console.log('Ваше число Фібоначчі:', array[number - 1]);


function recursionFibonacci(n) {
    if (n < 2) {
        return n;
    }
    return recursionFibonacci(n - 1) + recursionFibonacci(n - 2);
}

let number = parseInt (prompt('Введіть номер числа Фібоначчі яке хочете побачити'));
let fibonacciNumber = recursionFibonacci(number - 1);

console.log(`Ви обрали число: ${number}. Число Фібоначчі:`, fibonacciNumber);




// #3
// Напишіть функцію, яка приймає масив унікальних елементів і генерує всі можливі перестановки цього масиву. 
// Використовуйте рекурсію для знаходження всіх перестановок. 
// Наприклад, якщо вхідний масив [1, 2, 3], функція має повернути масив, що містить 
// [1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2] і [3, 2, 1].
console.log(' ');
console.log('Завдання №3');

function swap(arr) {
    let result = [];

    function swapElemet(current, lastElement) {
        if (lastElement.length === 0) {
            result.push(current);
        } else {
            for (let i = 0; i < lastElement.length; i++) {
                let curr = current.concat(lastElement[i]);
                
                let last = lastElement.slice(0, i).concat(lastElement.slice(i + 1));

                swapElemet(curr, last);
            }
        }
    }

        swapElemet([], arr);
        return result;
}

let array = [1, 2, 3, 5];
let temp = swap(array);
console.log(temp);


