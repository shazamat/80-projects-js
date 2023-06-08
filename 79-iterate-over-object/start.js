/** ЗАДАЧА 79 - Перебор свойств объекта
 *
 * 1. Создайте функцию "sumObjectValues", которая будет суммировть
 * все значения свойств, которые являются числами.
 *
 * 2. Сумму чисел необходимо вернуть из функции
 *
 * 3. Убедитесь, что итерация выполняется только
 * по собственным свойствам объекта
 */

const objectWithNumbers = {
  a: 10,
  b: 20,
  c: 'string',
  d: 12,
}

function sumObjectValues(numbers) {
  let n = 0;
  Object.keys(numbers).forEach((key) => {
    if (typeof numbers[key] === 'number') {
      n += numbers[key]
    }
  })
  return n;
}

const result = sumObjectValues(objectWithNumbers)
console.log(result)
//42
