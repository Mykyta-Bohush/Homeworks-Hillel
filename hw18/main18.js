// #1
// sumArrayPromise.Напишіть функцію, яка приймає масив чисел як аргумент і повертає Promise. 
// Promise має бути виконаний через 3 секунди і повернути суму всіх чисел із масиву.


// function sumArrayPromise(arr) {
// }
// let myPromise = new Promise(function(resolve, reject){ 
//     resolve('some result');
// });
// myPromise.then((result) => console.log(result));



function sumArrayPromise(arr) {

    return new Promise((resolve, reject) => {
        if (!Array.isArray(arr)) {

            reject("Ошибка> передан не масив");
            return;
        }

        let sum = arr.reduce((acc, num) => acc + num, 0);

        setTimeout(() => {

            resolve(sum);
        }, 3000);
    });
}


sumArrayPromise([1, 2, 3, 4, 5])
    .then(result => console.log("Сума >", result))
    .catch(error => console.error(error));


// sumArrayPromise([1, 2, 3, 4, 5, 6])
    // .then(result => console.log("Сума >", result))
    // .catch(error => console.error(error));
