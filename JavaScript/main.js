const FIRSTNAME = "Kirill";
const LASTNAME = "Gotfrid";
const ISSTUDENT = "являюсь учеником курса";
const STUDENT = "не являюсь учеником курса";

const AGE = 29;
const CURRENTYEAR = 2026;
const BIRTHYEAR = CURRENTYEAR - AGE;

const TEXT = `Меня зовут ${FIRSTNAME} ${LASTNAME}, мне ${AGE} лет.
Я ${ISSTUDENT}`;

console.log(TEXT);

let a = "123";
let b = +"456";
let c = Number("789");
let d = Boolean(0);
let e = Boolean(" ");
let result = a + b + c + d + e;

console.log(result);
