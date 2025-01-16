/* Задача 3. Фільтрація масиву чисел
Напиши функцію filterArray(numbers, value), яка приймає масив чисел (numbers) та значення (value) як параметри. Функція повинна повертати новий масив лише тих чисел із масиву numbers, які більші за значення value.
Усередині функції:
 - Створи порожній масив, у який будеш додавати підходящі числа.
 - Використай цикл для ітерації кожного елемента масиву numbers.
 - Використовуй умовний оператор if усередині циклу для перевірки кожного елемента 
 і додавання до свого масиву.
 - Поверни свій новий масив з підходящими числами як результат.
*/

'use strict';

console.log("<=== TASK-3 ============================================>");

function filterArray(numbers, value) {
  const filteredNumbers = []; // Створюємо порожній масив для збереження чисел

  for (let number of numbers) {
    if (number > value) {
      filteredNumbers.push(number); // Додаємо число, якщо воно більше за value
    }
  }

  return filteredNumbers; // Повертаємо новий масив з підходящими числами
}

console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
