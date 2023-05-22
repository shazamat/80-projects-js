/** ЗАДАЧА 34 - Массив объектов
 *
 * 1. Создайте массив с 3 объектами "cars"
 *
 * 2. Каждый объект должен иметь три свойства
 *  - carBrand (строка)
 *  - price (число)
 *  - isAvailableForSale (логическое значение)
 *
 * 3. Добавьте еще один объект в массив
 *
 * 4. Выведите результирующий массив в консоль
 */

const cars = [
    {
        carBrand:'Tesla',
        price: 110000,
        isAvailableForSale:false
    },
    {
        carBrand:'Mercedes',
        price: 120000,
        isAvailableForSale: true
    },
    {
        carBrand:'Lada',
        price: 11000,
        isAvailableForSale: false
    }
]

const newCar = {
        carBrand:'Ferrari',
        price: 150000,
        isAvailableForSale: false
}

cars.push(newCar)

console.log(cars);