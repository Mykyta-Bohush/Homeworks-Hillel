//#1
//logArguments
//Вам необхідно написати функцію-декоратор logArguments(fn), яка 
//приймає на вхід функцію з довільною кількістю аргументів і 
//додає можливість логувати всі аргументи, передані у декоровану функцію.
console.log('Завдання №1');
console.log('');

function logArguments(fn) {

    return function(...args) {

        console.log("Усі аргументи >", args);
        return fn(...args);
    }
}

function someFunction(a, b, c) {
    return a + b * c;
}

const loggedFunction = logArguments(someFunction);
const result = loggedFunction(2, 3, 4);

console.log("Результат >", result);

//#2
// // validate
//Вам необхідно написати функцію-декоратор validate(sum, validator), яка 
//приймає на вхід функцію sum і 
//додає можливість перевіряти аргументи, передані у функцію sum, 
//на відповідність заданому validator (наприклад, всі аргументи мають бути додатними). 
//Якщо аргументи не проходять перевірку, то декоратор має викидати виняток.
console.log('');
console.log('Завдання №2');

function validate (sum, validator = 0) {

    return function (...args) {
        console.log('передані аргументи >', args);
        args.some(arg => {

            try {
                if (arg < 0) {
//someTextForError
                }
    

            }catch (errorObject){
                console.log('Some Error !', errorObject);
            }

        });
         
        return sum.apply(this, [args]);
    }
}

function sum (...args) {

    console.log('Сума >' , args);

}

const validatedSum = validate(sum, 0);

validatedSum(1, 2, 5);
validatedSum(1, 3, 0);
validatedSum(1, 2, -5);