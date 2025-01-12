// Hw2

// Задача №1
// Вам необхідно написати програму, яка приймає на вхід число і виводить у консоль повідомлення залежно від значення числа. 
// Якщо число ділиться на 3, то повідомлення має бути Fizz, якщо число ділиться на 5, то повідомлення має бути Buzz, 
// а якщо число ділиться і на 3, і на 5, то повідомлення має бути FizzBuzz. Наприклад, для числа 15 повідомлення має бути FizzBuzz.

const divisibleByThree='Fizz';
const divisibleByFive='Buzz';
const divisibleByThreeFive='FizzBuzz';

const newVar=prompt('Введіть число');

    
if(!newVar){
console.log('Ви не ввели число');
}
else if (newVar%3===0&&newVar%5===0){
     console.log(divisibleByThreeFive, newVar);
 }
  else if(newVar%5===0){
      console.log(divisibleByFive, newVar);
  }else if(newVar%3===0){
      console.log(divisibleByThree, newVar);
  }else {
      console.log('Вы ввели неверное значение');
  }

// Задача №2 
// Вам необхідно написати програму, яка приймає на вхід число і 
//виводить у консоль повідомлення, що вказує, чи є введений рік високосним.

const yes='Так, цей рік високосний';
const no='Ні, цей рік не є високосним, або ви ввели невірне значення';

const year=prompt('Введіть рік');


if(!year){
    console.log('Ви не ввели рік');
    }
else if(year%100==0&&year%400==0){
    console.log(yes, year);
}
else if (year%4==0){
    console.log(yes, year);
}else{
    console.log(no, year);
}

//Задача №3
// Вам необхідно написати програму, яка приймає на вхід число і 
// виводить у консоль повідомлення у форматі Вам N рік / роки / років. 
// Залежно від числа N слово рік має змінюватися на років або року. 
// Наприклад, Вам 1 рік, Вам 5 років, Вам 42 роки.

const newNum=prompt('Введіть ваш вік');
if(!newNum){
    console.log('Ви не ввели вік');
    }
else if(newNum>=11&&newNum<=14){
    console.log('Вам',newNum,'років');
}
else if(newNum%10==1){
    console.log('Вам',newNum,'рік');
}
else if(newNum%10==0||newNum%5==0){
console.log('Вам',newNum,'років');
}else if(newNum%10==2){
    console.log('Вам',newNum,'роки');
}else if(newNum%10==3){
    console.log('Вам',newNum,'роки');
}else if(newNum%10==4){
    console.log('Вам',newNum,'роки');
}else if(newNum%10==6){
    console.log('Вам',newNum,'років');
}else if(newNum%10==7){
    console.log('Вам',newNum,'років');
}else if(newNum%10==8){
    console.log('Вам',newNum,'років');
}else if(newNum%10==9){
    console.log('Вам',newNum,'років');
}