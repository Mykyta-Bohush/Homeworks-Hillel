  //Напишіть функцію capitalizeStrings, яка приймає на вхід масив рядків і 
  // повертає новий масив, у якому кожен рядок має першу літеру у верхньому регістрі, а 
  // решту літер - у нижньому регістрі.
  console.log('1 Завдання:');

  const array = ['game', 'oVer', 'heLLO', 'World'];
  let finalArray = []; 
  const someSeparator = ' ';


  let string = array.join(someSeparator);


   function capitalizeStrings(str, separator) {
   finalArray = str.split(separator);


   let result = '';


   for (let i = 0; i < finalArray.length; i++){


       result = result + finalArray[i][0].toUpperCase() + finalArray[i].slice(1).toLowerCase();
       if(i !== finalArray.length - 1) {
          result = result + separator;
       }
   }
 
  result = result.split(separator);


   return result;


   }


   console.log('Новий масив: ', capitalizeStrings(string, someSeparator));



  //Напишіть функцію findCommonElements, яка приймає на вхід два масиви і 
  //повертає новий масив, що містить елементи, які є в обох вихідних масивах.
  console.log('2 Завдання:');


 const someArray = [1, 3, 4, 5, 6, 7];
 const someSecondArray = [8, 4, 9, 10, 23, 5]
 let arrayWithCommon = [];


 function findCommonElements (array1, array2) {
    
     for (let i = 0; i <array1.length; i++) {
         if (array2.includes(array1[i])) {
             arrayWithCommon.push(array1[i]);
         }
     }
    
     return arrayWithCommon;
    
 }
 console.log('Перший масив: ', someArray);
 console.log('Другий масив: ', someSecondArray);
 console.log('Масив зі спілними значеннями: ', findCommonElements(someArray, someSecondArray));


  //Напишіть функцію analyzeArray, яка приймає на вхід масив чисел і повертає об'єкт з такими властивостями:
// sum - сума всіх елементів масиву
// average - середнє значення елементів масиву
// min - мінімальне значення в масиві
// max - максимальне значення в масиві
  console.log('3 Завдання:');

const arrayForAnalyze = [4, 2, 1, 4];
const operation = prompt('Введіть операцію яку хочете виконати: (доступно sum');


function analyzeArray(array, operation) {


    let result = 0;
    
    if (operation == 'sum') {
    for (let i = 0; i < array.length; i++) {
        result = result + array[i];  
    }
    return result;
    
}else if(operation == 'average') {
        let arraySum = 0;
        for (let i = 0; i < array.length; i++) {
             arraySum = arraySum + array[i];  
    }
    result = arraySum / array.length;
    return result;    

}else if (operation == 'min') {
     result = array[0];
    for (let i = 1; i < array.length; i++) {
         if (result > array[i]) {
            result = array[i];
         }
    }
    return result;
}else if (operation == 'max') {
    result = array[0];
   for (let i = 1; i < array.length; i++) {
        if (result < array[i]) {
           result = array[i];
        }
   }
   return result;
}
}


console.log(analyzeArray(arrayForAnalyze, operation));