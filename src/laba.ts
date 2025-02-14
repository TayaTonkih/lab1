alert("Hello World");
interface Entity {
    id: number;
}

interface ToJsonStringify extends Entity {
    e1?: number; 
    e2: string;
}


const data: ToJsonStringify = {
    id: 3,
    e1: 12345,
    e2: "Поле 2",
};


const sumThreeNumbers = (num1: number, num2: number, num3: number): number => num1 + num2 + num3;


const resultSum = sumThreeNumbers(10, 20, 30);
console.log(resultSum); // Вывод: 60


const constNumber: number = 42; 
let variableString: string = "Hello, TypeScript!";
const constBoolean: boolean = true;
let variableArray: number[] = [1, 2, 3, 4, 5];
const constObject: { key: string; value: number } = { key: "example", value: 100 }; 
let variableAny: any = "This can be anything";
const constTuple: [string, number] = ["tuple", 10];
let variableUnion: string | number = "I can be a string or a number";


const dataJson: string = JSON.stringify(data);
console.log(dataJson); 