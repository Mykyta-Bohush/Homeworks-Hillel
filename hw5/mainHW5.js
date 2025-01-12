//Задача №1
//Вам необхідно написати функцію reverseString(str), 
// яка приймає на вхід рядок і 
// повертає його у зворотному порядку.

 const someString = prompt('Введіть рядок');
 let reverseString1 = '';

 function reverseString(str) {
     for (i = str.length - 1; i >= 0; i--) {
          console.log(str[i]);
         reverseString1 = reverseString1 + str[i];
     }
     return reverseString1;
 }

 reverseString(someString);
 console.log(reverseString1);

//Задача №2
//Вам необхідно написати функцію isPalindrome(str), яка приймає на вхід рядок і 
// перевіряє, чи є введений рядок паліндромом.

  const someNewString = prompt('Введіть рядок');
  let reverseNewString = '';

  function isPalendrome(str) {
      for (i = str.length - 1; i >= 0; i--) {
        
          reverseNewString = reverseNewString + str[i];
      }
  }

  isPalendrome(someNewString);

  if (someNewString === reverseNewString) {
      console.log ('Так цей рядок є палендромом');
  }else {
      console.log ('Ні, цей рядок не є палендромом')
  }


//Задача №3
// Вам необхідно написати функцію findGCD(a, b), 
// яка приймає на вхід два числа і 
// повертає їхній НСД.



function findGCD (a,b){
    while (b != 0){
        let t = b;
        b = a % b;
        a = t;
    }

    return a;
}

const result = findGCD(12,15)

console.log(result);



// function findGCD (a, b) {
// let GreatestOfA = 0;
// let GreatestOfB = 0;

//     for (let i = 1; i <= a; i++) {

//         for (let j = 2; j <= i; j++) {
            
//             if (i % j === 0) {
//                 GreatestOfA = j;   
//             }
//         }
    
//     }
//         console.log (GreatestOfA);

//     for (let i = 1; i <= b; i++) {

//         for (let j = 2; j <= i; j++) {
            
//             if (i % j === 0) {
//                 GreatestOfB = j;   
//             }
//         }
    
//     }
//         console.log (GreatestOfB);


//     if (GreatestOfA % GreatestOfB === 0){
//         console.log ('НСД = ', GreatestOfB)
//     }else if(GreatestOfB % GreatestOfA ===0){
//         console.log ('НСД = ', GreatestOfA)
//     }



// }

// findGCD(20, 36);




 