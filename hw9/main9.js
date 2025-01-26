//#1
// Вам необхідно написати функцію, яка 
// приймає на вхід масив чисел і повертає новий масив, що 
// містить тільки ті числа, які є простими числами.
console.log('Завдання №1');

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log('Початковий масив: ', arr);
const newArray = [];
let statusIsPrime = true;

function isPrime(array) {
    
    for(let i = 0; i < array.length; i ++) {
        statusIsPrime = true;
        if (array[i] < 2) {
            statusIsPrime = false;
        }
        for (let j = 2; j < array[i]; j++) {
            if (array[i] % j == 0) {
                console.log('число', array[i], 'є складеним, ділиться на: ', j);
                statusIsPrime = false;
                break;
            } 
        }
           if(statusIsPrime == true) {
            console.log('число', array[i], 'є простим');
            newArray.push(array[i]);
           } 
            }
        }

isPrime(arr);

console.log('Масив простих чисел: ', newArray);

//#2
// Вам необхідно написати функцію, яка 
//  приймає на вхід масив об'єктів, де 
//  кожен об'єкт описує сповіщення та має поля source / text / date.
//  Вам необхідно перетворити цей масив на об'єкт, де 
//  ключем буде джерело сповіщення, а значенням - масив сповіщень із цього джерела.
console.log('Завдання №2');

 const someNewArray = [
     {
         'source': 'source1',
         'text': 'text1',
         'date': 2022,
     },
     {
         'source': 'source2',
         'text': 'text2',
         'date': 2023,
     },
     {
         'source': 'source3',
         'text': 'text3',
         'date': 2024,
     },
 ];

 const result = Object.groupBy(someNewArray, Object => Object.source);
 console.log(result);



//#3
// Вам необхідно написати функцію, яка 
// приймає на вхід масив і 
// повністю повторює поведінку методу масиву group
console.log('Завдання №3');



const testArray = [
    {
        'source': 'source1',
        'text': 'text1',
        'date': 2022,
    },
    {
        'source': 'source2',
        'text': 'text2',
        'date': 2023,
    },
    {
        'source': 'source3',
        'text': 'text3',
        'date': 2024,
    },
];

//console.log(Object.groupBy(testArray, item => item.source));

function customGroupBy (items, cb) {

    return items.reduce((grouped, item) => {
        if(!grouped.hasOwnProperty(cb(item)))
            grouped[cb(item)] = [];

        grouped[cb(item)].push(item);

        return grouped;

    }, {});
}

const resultGroup = customGroupBy(testArray, item => item.source);

console.log('result >', resultGroup);