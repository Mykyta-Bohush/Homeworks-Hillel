//Задача №1
//Вам необхідно написати функцію doubleLetter(str), яка 
// приймає на вхід рядок і 
// повертає новий рядок, у якому кожен символ повторюється двічі 
// hello ⇒ hheelllloo.

 const letter = prompt ('Введіть рядок: ');
 let someNewLetter = '';

 function doubleLetter(str){

     for (i = 0; i <= letter.length - 1; i++){
         let t = str[i];
         someNewLetter = someNewLetter + t.repeat(2);
     }
     return someNewLetter;
 }

 doubleLetter(letter);
 console.log('новий рядок >', someNewLetter);


//Задача №2
//Вам необхідно написати функцію padString(str, length, symbol, toLeft), яка 
// приймає на вхід рядок, число, що є довгим рядком, який ми хочемо отримати в результаті 
// та символ, яким доповниться рядок, якщо це буде потрібно, 
// четвертим параметром є буремний «прапор», чи додавати символи зліва або справа(за замовчуванням). 
// Якщо 2 параметр менше, ніж довжина вихідного рядка, то виводимо вихідний рядок без змін. 
// Приклад виклику: padString('Ivan', 6, '*') // 'Ivan**'.

 const someString = prompt('Введіть рядок: '); 
 const someLength = +prompt('Введіть довжину нового рядка: ');
 const someSymbol = prompt('Введіть символ який буде додано: ');
 const someFlag = prompt('Символи будуть додані: `toLeft` або `toRight` ')
 let someNewStr = '';

//  let lengthSymbol = someLength - someString.length
//  lengthSymbol = parseInt(lengthSymbol);
//  console.log(lengthSymbol);

  if (someFlag == 'toLeft') {
    
   function padString(str, length, symbol, flag) {

      someNewStr = someString.padStart(length,symbol);
    
      console.log(someNewStr);
   }

    padString(someString, someLength, someSymbol, someFlag)

  } else if (someFlag == 'toRight') {

     function padString(str, length, symbol, flag) {

         someNewStr = someString.padEnd(length,symbol);
       
         console.log('Новий рядок > ', someNewStr);
      }
   
       padString(someString, someLength, someSymbol, someFlag)
  }



  


//Задача №3
// Вам необхідно написати функцію camelCase(str, separator), яка 
// приймає на вхід рядок і 
// перетворює його до формату camelCase.

//  const anotherString = prompt('Введіть строку: ');
// const someSeparator = " ";
//  let splitted = '';

//  function camelCase (str, separator) {
//  for (i = 0; i < anotherString.length; i++) {
//     if (anotherString[i] !=" ") {
//        splitted = splitted + anotherString[i];
//     }
//  }
//  console.log(splitted);
//  }

//  camelCase(anotherString,someSeparator);


 const anotherString = prompt('Введіть строку: ');
 const someSeparator = ' ';
 let everyWord = ' ';
 function camelCase(str, separator) {
    everyWord = str.split(separator);
    let result = everyWord[0].toLowerCase();

    for (let i = 1; i < everyWord.length; i++){
        
        result = result + everyWord[i][0].toUpperCase() + everyWord[i].slice(1).toLowerCase();            
    }

    return result;

 }

 

 console.log('Верблюжа мова > ', camelCase(anotherString, someSeparator));