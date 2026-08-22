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

const number = +prompt("введите число");

if (number % 2 == 0) {
  alert("четное число");
  console.log("четное число");
} else {
  alert("нечетное число");
  console.log("нечетное число");
}
/* ==================================================== */

/* 2 задание */

const age = +prompt("Ваш возраст");

const discount =
  age < 18
    ? "скидка 10%"
    : age >= 18 && age <= 65
      ? "скидка 20%"
      : "скидка 30%";

alert(discount);

/* const age = +prompt("Ваш возраст");

switch (discount) {
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
} */ /*  не работает, не понимаю где ошибка */
/*  ===================================================== */

/* 3 задание */

const username = prompt("Имя пользователя");

switch (username) {
  case "admin":
  case "user":
    alert("Доступ разрешен");
    break;
  default:
    alert("Доступ запрещен");
    break;
}

const password = +prompt("Введите пароль");

switch (password) {
  case (number = 123456):
    alert("Доступ разрешен");
    break;
  default:
    alert("Доступ запрещен");
    break;
}
/* ========================================================= */

/* 4 задание */

const number = +prompt("Введите вес доставки в кг.");

/* if (number <= 0) {
  alert("Некорректный вес посылки");
} else if (number < 1) {
  alert("базовая стоимость 5$");
} else if (number > 1 && number <= 5) {
  alert("базовая стоимость  10$");
} else if (number > 5) {
  alert("базовая стоимость 15$");
} */

const calculation =
  number <= 0
    ? "некорректный вес посылки"
    : number < 1
      ? "базовая стоимость 5$"
      : number > 1 && number <= 5
        ? "базовая стоимость  10$"
        : "базовая стоимость 15$";

alert(calculation);

const variants = prompt("Укажите тип доставки: стандарт, экспресс, премиум");

switch (variants) {
  case "стандарт":
  case "экспресс":
  case "премиум":
    break;
  default:
    alert("Неверный тип доставки");
    break;
}

/* дальше не понимаю что как делать */
