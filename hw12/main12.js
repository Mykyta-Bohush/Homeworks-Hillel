// #1
// Вам необхідно написати функцію summarize(num), яка 
// приймає на вхід число і повертає функцію, яка 
// під час виклику додає це число до аргументу і повертає результат. 
// Якщо аргумент не передано, то додається одиниця. 
// Наприклад, якщо функція викликається з аргументом 5, то функція, що 
// повертається, повинна при виклику з аргументом 3 повернути 8 (тому що 3 + 5 = 8) або 6, якщо аргумент не буде передано.
console.log('Завдання №1');
console.log('');

let number = +prompt('Введіть число:');
console.log('Ваше число:', number);

function summarize(num) {
    let counter = +prompt('Введіть аргумент (або натисніть "Enter"):');
    console.log('Ваш аргумент:', counter);
    if (counter == '' || counter == 0) {
        counter = 1;
    }

    return function(...arg) {

        let result = arg[0] + counter;
        console.log('Результат >', result);

        return result;

    }

}

const callFunction = summarize();

callFunction(number);

// #2
// Вам необхідно написати функцію counter(startValue, step), яка 
// приймає на вхід два параметри - стартове значення лічильника і його крок. 
// Функція повертає нову функцію, яка при кожному виклику збільшує лічильник на значення і повертає його поточне значення. 
// Лічильник повинен мати методи increment, decrement і reset, які збільшують або зменшують значення на step і скидають значення до стартового, відповідно.
console.log('');
console.log('Завдання №2');


function someCounter(startValue, step) {
    console.log('Стартове значення лічильника:', startValue);
    console.log('Крок:', step);
    
    let temp = startValue;

    return function(...args) {
        //console.log(args);

        return {
            increment: function() {
                temp += step;
                return temp;
            },
            decrement: function() {
                temp -= step;
                return temp;
            },
            reset: function() {
                temp = startValue;
                return temp;
            },
            getValue: function() {
                return temp;
            }

        };
    }
}

const someNewCounter = someCounter(0,3);
const result = someNewCounter();

console.log('Збільшення значення:', result.increment());
console.log('Збільшення значення:', result.increment());
console.log('Зменьшення значення:', result.decrement());
//console.log(result.decrement());
console.log('Скидання значення до стартового:', result.reset());
//console.log(result.decrement());



