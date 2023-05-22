/** ЗАДАЧА 6 - Типы данных
 *
 * 1. Объявите несколько переменных и присвойте им значения:
 *  - строка
 *  - число
 *  - логическое
 *  - null
 *  - undefined
 *  - объект
 *  - массив
 *
 * 2. Выведите в консоль тип каждого из значений
 * используя оператор typeof
 */


const timerPromise = () => {
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(), 2000)
    })
};

const asyncFn = async () => {
    console.log('Timer starts');
    const startTime = performance.now();
    await timerPromise();
    const endTime = performance.now();
    console.log('Timer ended', endTime - startTime);
}

asyncFn()