 console.log('Задача №1');
// //Задача №1
// //Створіть функцію reverseArray, яка 
// // приймає масив і повертає новий масив, 
// // елементи якого розташовані у зворотному порядку.

 const standartArray = [1, 2, 3, 4, 5];
 let someReverseArray = [];
 console.log('початковий масив: ', standartArray);

 standartArray[standartArray.length] = 6;
 console.log('доповнений масив: ', standartArray);

 function reverseArray(array) {
     for (let i = standartArray.length - 1; i >=0; i--) {
         someReverseArray[someReverseArray.length] = standartArray[i];
     }
     console.log('Зворотній масив: ', someReverseArray);
 }

 reverseArray(standartArray);

console.log('Задача №2');
//Задача №2
//Створіть функцію uniqueValues, яка 
// приймає два масиви і повертає новий масив, 
// що містить тільки унікальні значення з обох масивів (без дублікатів).

function uniqueValues(array1, array2) {
    const uniqueArray = [];
    
    for (let i = 0; i < array1.length; i++) {
        if (!array2.includes(array1[i])) {
            uniqueArray.push(array1[i]);
        }
    }

    for (let i = 0; i < array2.length; i++) {
        if (!array1.includes(array2[i])) {
            uniqueArray.push(array2[i]);
        }
    }
    
    return uniqueArray;
}

const firstArray = [1, 2, 3, 4, 5];
console.log('Перший масив: ', firstArray); 
const secondArray = [6, 3, 8, 1, 7];
console.log('Другий масив: ', secondArray); 

console.log('Масив з унікальними значеннями: ',uniqueValues(firstArray, secondArray)); 

 console.log('Задача №3');
// //Задача №3
// //Напишіть функцію calculateAverageGrade, яка 
// //приймає на вхід масив об'єктів з інформацією 
// // про студентів (ім'я, вік, середній бал) і 
// // повертає середній бал усіх студентів.


 const students = [
     {
         'name': 'Simon',
         'secondName': 'Riley',
         'call sign': 'Ghost',
         age: 28,
         grades: 5,

     },
     {
         'name': 'John',
         'secondName': 'Price',
         'call sign': 'CaptainPrice',
         age: 55,
         grades: 3,
     },
     {
         'name': 'Johnny',
         'secondName': 'MacTavish',
         'call sign': 'Soap',
         age: 26,
         grades: 4,
     },
 ];

 //console.log(students.length);
 //console.log(students[0].grades)

 function calculateAverageGrade() {
 let GPA = 0;

      for(let i = 0; i < students.length; i++){
         GPA = GPA + students[i].grades;
      }
      console.log('Cередній бал усіх студентів > ',GPA / students.length);
  }
   calculateAverageGrade(students);