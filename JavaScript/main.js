const firstName = "Kirill";
const lastName = "Gotfrid";
const isStudent = true; /*  являюсь учеником курса */

const age = 29;
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

console.log(result);
