const car = {
    name: "Fiat",
    model: 501,
    weight: "850kg",
    color: "white",

    start: function () {
        this.drive();
        console.log("car has start");
    },
    drive: function () {
        console.log("car is Driving");
    }
}
console.log(car.color);
console.log(car['weight']);
car.start();

//Object Methods

//let y = "Rahim"; //literal syntax
//let y = new String("Rahim");

let x = 5;
console.log(x);

let a = new Number(5);
console.log(typeof a);
