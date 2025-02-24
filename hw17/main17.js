// #1
// randomDelayPrint. Створіть функцію randomDelayPrint, яка прийматиме рядок message як аргумент і виводитиме кожну букву цього 
// рядка з довільною затримкою від 0 до 1 секунди. 
// Використовуйте setTimeout, щоб додати випадкову затримку перед виведенням кожної літери.

const string = 'Message';

function randomDelayPrint(str) {
    for(let i = 0; i < str.length; i++){
        let delay = parseInt(Math.random() * 1000);
    
    setTimeout(function() { 
        console.log(str[i]);
    }, delay);
}
}

randomDelayPrint(string);



// #2
// debounce. Створіть функцію debounce, яка приймає функцію зворотного виклику і затримку (в мілісекундах) як аргументи. 
// Функція debounce повинна повертати нову функцію, яка викликає вихідну функцію тільки після того, 
// як минула вказана кількість часу без викликів. 
// Це дасть змогу ігнорувати часті виклики функції та виконувати її лише один раз через зазначену затримку після останнього виклику.




// #3 
// intervalRac.Створіть функцію intervalRace, яка прийматиме масив функцій та інтервал часу t у мілісекундах. 
// Функція intervalRace має викликати кожну функцію з масиву по черзі через заданий інтервал часу t. 
// Коли всі функції виконано, intervalRace має повернути масив із результатами.

let someArray = [
    () => console.log("Функція 1"),
    () => console.log("Функція 2"),
    () => console.log("Функція 3"),
];

function intervalRace (arr, t) {
    let i = 0;

    let intervalID = setInterval(function(){
        arr[i]();
        i ++;
        if (i === arr.length) {
            clearInterval(intervalID);
        }
    }, t);
    
    
}      


intervalRace(someArray, 2000);

