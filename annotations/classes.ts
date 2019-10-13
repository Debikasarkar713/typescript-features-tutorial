class Vehicle {
  //public shortens constructor bc its a modifier
  //they apply to variables as they do to methods
  constructor(public color: string) {}
  protected honk(): void {
    console.log('beep beep');
  }
}

// class Car extends Vehicle {
//   private drive(): void {
//     console.log('vroom');
//   }
//   startDrivingProcess(): void {
//     this.drive();
//     this.honk();
//   }
// }

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

// const car = new Car();
// car.startDrivingProcess();
