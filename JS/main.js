/* const firstName = "Kirill";
const lastName = "Gotfrid";
const isStudent = true; /*  являюсь учеником курса */

/* const age = 29;
const currentYear = 2026;
const birthYear = currentYear - age;

const text = `Меня зовут ${firstName} ${lastName}, мне ${age} лет.
Я ${isStudent}`;

console.log(text);

let a = "123";
let b = +"456";
let c = Number("789");
let d = Boolean(0);
let e = Boolean(" ");
let result = a + b + c + d + e;

console.log(result); */

/* ================================================================================================================================== */

/* Практика по условиям */

/* 1 задание */

/* const number = 10;

if (number % 2 == 0) {
  console.log("четное число");
} else {
  console.log("нечетное число");
} */

/* const number = +prompt("введите число");

if (number % 2 == 0) {
  alert("четное число");
  console.log("четное число");
} else {
  alert("нечетное число");
  console.log("нечетное число");
} */
/* ==================================================== */

/* 2 задание */

/* const age = +prompt("Ваш возраст");

const discount =
  age < 18
    ? "скидка 10%"
    : age >= 18 && age <= 65
      ? "скидка 20%"
      : "скидка 30%";

alert(discount); */

/* const age = +prompt("Ваш возраст");

switch (true) {
  case age < 18:
    alert("скидка 10%");
    break;
  case age >= 18 && age <= 65:
    alert("скидка  20%");
    break;
  case age > 65: {
    alert("скидка 30%");
    break;
  }
} */
/*  ===================================================== */

/* 3 задание */

/* const username = prompt("Имя пользователя");
const password = +prompt("Пароль");

if ((username === "admin" || username === "user") && password === "123456") {
  alert("Допуск разрешен");
} else {
  alert("Допуск запрещен");
} */

/* ========================================================= */

/* 4 задание */

/* const weight = +prompt("Укажите вес доставки");
const delivery = prompt("Укажите тип доставки: Стандарт, Экспресс, Премиум");

let basicCost = 10;

if (weight <= 0 || isNaN(weight)) {
  alert("Некорректный вес посылки");
} else if (weight < 1) {
  basicCost = 5;
} else if (weight <= 5) {
  basicCost = 10;
} else {
  basicCost = 15;
}

let ratio = 0;

switch (delivery) {
  case "Стандарт":
    ratio = 1;
    break;
  case "Экспресс":
    ratio = 1.5;
    break;
  case "Премиум":
    ratio = 2;
    break;
  default:
    alert("Некорректный тип доставки");
    ratio = 0;
}

if (basicCost !== undefined && ratio !== 0) {
  const totalCost = basicCost * ratio;
  alert(`Итоговая стоимость доставки: ${totalCost}`);
}
 */
/* ================================================================================================================================= */

/* Практика по циклам */

/* 1 задание */

/* for (let i = 1; i <= 20; i++) {
  if (i % 4 === 0) {
    continue;
  }
  console.log(i);
} */

/* 2 задание */

/* const number = +prompt("Введите число");
let factorial = 1;

for (let i = 1; i <= number; i++) {
  factorial *= i;
}
console.log(factorial); */

/* 3 задание  Шахмотная доска */

/* const boardSize = 8;
let board = "";

for (let i = 1; i <= boardSize; i++) {
  let row = "";
  for (let j = 1; j <= boardSize; j++) {
    row += (i + j) % 2 === 0 ? "Ч " : "Б ";
  }
  board += row += "\n";
}

console.log(board); */

/* ================================================================================================================================= */

/* Практика по функиям */

/* 1 задание */

/* function calculateFinalPrice(baseСost, basicDiscount, taxRate) {
  const discount = baseСost * (basicDiscount / 100);
  const discountedPrice = baseСost - discount;
  const tax = discountedPrice * taxRate;
  return discountedPrice + tax;
}
console.log(calculateFinalPrice(100, 10, 0.2));
console.log(calculateFinalPrice(100, 10, 0));
 */

/* 2 задание */

/* const name = prompt("Имя пользователя");
const password = +prompt("Пароль");

function checkAccess(name, password) {
  if (name === "admin" && password === "123456") {
    return "Доступ разрешен";
  } else {
    return "Доступ запрещен";
  }
}

alert(checkAccess()); */

/* Не понимаю почему при вводе корректных данных доступ запрещен? */

/* 3 задание */

/* function getTimeOfDay() {
  const time = +prompt("Текущее время");

  switch (true) {
    case time >= 0 && time <= 5:
      return "Ночь";
    case time >= 6 && time <= 11:
      return "Утро";
    case time >= 12 && time <= 17:
      return "День";
    case time >= 18 && time <= 23:
      return "Вечер";
    default:
      return "Некорректный время";
  }
}

alert(getTimeOfDay()); */

/* 4 задание */

function findFirstEven(start, end) {
  for (i = start; i <= end; i++) {
    if (i % 2 === 0) return i;
  }
  return "Четных чисел нет";
}
const result1 = findFirstEven(1, 10);
const result2 = findFirstEven(9, 9);

console.log(result1);
console.log(result2);
