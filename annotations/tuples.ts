const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
};

type Drink = [string, boolean, number];
// this is what makes it a tuple an order to this array
const pepsi: Drink = ['brown', true, 40];

const carSpecs: [number, number] = [400, 3354];

const CarStats = {
  horsePower: 400,
  weight: 3354
};
