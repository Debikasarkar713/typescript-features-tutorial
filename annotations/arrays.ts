const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const CarsByMake: string[][] = [];

//help with inference when extracting values

const newCar = carMakers[0];
const myCar = carMakers.pop();

//prevent incompatible values

carMakers.push('100');

//help with map
carMakers.map((myCar: string) => {
  return myCar.toUpperCase();
});

//flexible types

const importantDates: (Date | string)[] = [new Date()];

//whent to use? any time we need to represent a collection of records with some order
