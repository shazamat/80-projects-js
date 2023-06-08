/** ЗАДАЧА 68 - Проверка наличия аргументов в вызове функции
 *
 * Измените функцию "square" так, чтобы в случае ее вызова
 * без аргумента генерировалась ошибка
 * "Функция "square" не может быть вызвана без аргумента"
 */

function square(a) {

  // Birinchi metod
  // if (a === undefined) {
  //   throw new Error('Функция "square" не может быть вызвана без аргумента');
  // }


  // Ikkinchi metod
  if (arguments.length === 0) {
    throw new Error('Функция "square" не может быть вызвана без аргумента');
  }

  console.log(a * a)
}

square(10)
// 100

square()
// ДО: NaN
// ПОСЛЕ: Uncaught Error: Функция "square" не может быть вызвана без аргумента
