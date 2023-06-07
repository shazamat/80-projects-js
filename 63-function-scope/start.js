/** ЗАДАЧА 63 - Зона видимости функции
 *
 * Что будет выведено в консоль?
 * Ответьте на вопрос без запуска кода
 */

const b = 2
let d = 15

function myFn1(a) {
  let b
  let d = 10
  myFn2(b)
}

function myFn2(a) {
  let c = 5
  console.log(a, b, c, d)
}

myFn1()

/**
 * birinchi a ning qiymati undefined qaytaradi,
 * ikkinchi b ning qiymatini globaldan olib 2 qaytaradi,
 * uchinchi c ning qiymatini scopening ichida bor 5 qaytaradi,
 * to'rtinchi d ning qiymatini yana globaldan oladi scopening ichida yoq bo'lgani uchun,
 * 
 * yuqori ustunlik scopening ichida boladi agarda ichidan topmasa globaldan qarab ko'radi;
 */