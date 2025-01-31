//#1
//Написати функцію sqr, яка приймає 2 аргументи: (x, cache), де x є number і cache - зовнішній map.
// Функція має виконувати умови:
// - перевіряти, чи є в cache вже обчислений квадрат від х
// - повертати існуючий запис з cache в разі його наявності
// - обчислювати квадрат від х в разі його відсутності в cache
// - записувати в cache обчислений квадрат від х в разі його відсутності в cache
// - повертати новий запис з cache
console.log('Завдання №1');

// let someCache = 1;
// const temp = someCache;

// function sqr (x, cache) {

//     if (cache !== x * x) {

//         cache = x * x;
//         console.log('Число', cache,'є квадратом числа',x);
        
// } else if(cache == x * x){    
//     console.log('Число', cache,'є квадратом числа',x);
// }
// return cache;
// }

// someCache = sqr (3, someCache);

// if(temp == someCache) {

//     console.log('Запис в кеші без змін: ', someCache);

// }else {

//     console.log('Новий запис в кеші', someCache);

// }

// console.log(someCache)
 
const someCache = new Map ();
someCache.set(3, 9);

console.log('Начальный кеш', someCache);

function sqr (x, cache) {

    if (!cache.has(x)) {

        const square = x * x;
        cache.set(x, square) ;
        console.log(`Добавлено в кэш: ${x} -> ${square}`);
        
} else {
    console.log(`Число ${x} уже в кэше ${cache.get(x)}`);
}
return cache;
}

sqr(3, someCache);

sqr(5, someCache);

sqr(10,someCache);

console.log('Финальний кєш', someCache);

//#2
// Вам необхідно використовувати масив нотифікацій з минулих занять. 
// До отриманого під час групування об'єкта notifications, вам необхідно додати ітератор, щоб 
// під час перебору в циклі for of ми отримували кожен елемент із вкладених списків об'єкта notifications 
// таким чином, немов працюємо з "плоским" масивом.
console.log('Завдання №2');

const notifications = {
    items: [4,5,6,7,8,9,19],
    items2: ['4', '5', '6','7','8','9','19'],
    items3: ['4', '5', '6', 7, 8, 9, null, false, true, 19],
};


notifications[Symbol.iterator] = function () {
    const sources = Object.keys(this);
    let sourceIndex = 0;
    let itemIndex = 0;
    const self = this; // посилання на зовнішній контент 

    return {
        next() {
            if(sourceIndex >= sources.length) {
                return {done: true};
            }

            const currentSource = sources[sourceIndex];
            const currentItems = self[currentSource];
        

            if (itemIndex >= currentItems.length) {
                sourceIndex++;
                itemIndex = 0;

                return this.next(); // Викликаємо наступний елемент ітератора об'єкта
            }

            const currentItem = currentItems[itemIndex];
            itemIndex++;
            return {value:currentItem, 
                    done: false};
        }
    };
}

for (let notification of notifications) {
    console.log(notification);
}

 