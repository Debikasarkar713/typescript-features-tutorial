let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

//built in objects

let now: Date = new Date();

//Array

let colors: string[] = ['red, green, blue'];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

//Classes

class Car {}
let car: Car = new Car();

// Object literal
//declaring a variable called point and assigning properties which can only take a number type

let point: { x: number; y: number } = {
  x: 10,
  y: 20
};

//function
// : to void is type

const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

//when to use annotations

//1 function that returns the any type
const json = '{"x": 10, "y":20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

//2 when we declare a var on one line and initialize it later

let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

//3 Var whose type cannot be infered correctly

let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
