//when creating interface use capital letter
interface Reportable {
  summary(): string;
}

//because they are both of type Reportable they will both work.
const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  }
};
const drinkItem = {
  color: 'brown',
  carbonated: true,
  sugarContent: 40,
  summary(): string {
    return `My drink has ${this.sugarContent}`;
  }
};
const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);
printSummary(drinkItem);
//we can use a single interface to describe very different objects
