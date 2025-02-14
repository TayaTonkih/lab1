alert("Hello World");
const data = {
    id: 3,
    e1: 12345,
    e2: "Поле 2",
};
const sumThreeNumbers = (num1, num2, num3) => num1 + num2 + num3;
const resultSum = sumThreeNumbers(10, 20, 30);
console.log(resultSum); // Вывод: 60
const constNumber = 42;
let variableString = "Hello, TypeScript!";
const constBoolean = true;
let variableArray = [1, 2, 3, 4, 5];
const constObject = { key: "example", value: 100 };
let variableAny = "This can be anything";
const constTuple = ["tuple", 10];
let variableUnion = "I can be a string or a number";
const dataJson = JSON.stringify(data);
console.log(dataJson);
