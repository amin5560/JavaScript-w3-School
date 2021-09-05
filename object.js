const car = {
    name: "BMW",
    model: 500,
    color: "black",
    weight: "550kg",
    start: function () {
        this.drive();
        console.log("car has started");
    },
    drive: function () {
        console.log("car is driving");
    }
};


console.log(car.weight);
console.log(car["color"], car["name"], car["weight"]);

car.start();