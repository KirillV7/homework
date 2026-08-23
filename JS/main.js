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

if (username("admin" || "user") && password("123456")) {
  alert("Допуск разрешен");
} else {
  alert("Допуск запрещен");
} */

/* ========================================================= */

/* 4 задание */

const weight = +prompt("Укажите вес доставки");
const delivery = prompt("Укажите тип доставки: Стандарт, Экспресс, Премиум");
const basicCost = 10;

if (weight <= 0) {
  alert("Некорректный вес посылки");
} else if (weight < 1) {
  alert("Базовая стоимость 5$");
} else if (weight > 1 && weight <= 5) {
  alert("Базовая стоимость 10$");
} else if (weight > 5) {
  alert("Базовая стоимость 15$");
}

switch (cost) {
  case "тандарт":
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
}

const totalCost = basicCost * ratio;
alert(`Итоговая стоимость доставки: ${totalCost}`);
