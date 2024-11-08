"use strict";
// classes 101
class Pizza {
    constructor(title, price) {
        this.title = title;
        this.price = price;
        // private title: string
        // private price: number
        this.base = 'classic';
        this.toppings = [];
        // this.title = title;
        // this.price = price;
    }
    addTopping(topping) {
        this.toppings.push(topping);
    }
    removeTopping(topping) {
        this.toppings = this.toppings.filter(t => t !== topping);
    }
    selectBase(b) {
        this.base = b;
    }
}
const pizzaOne = new Pizza('mario special', 15);
const pizzaTwo = new Pizza('luigi special', 10);
function addMushroomsToPizzas(pizzas) {
    pizzas.forEach(pizza => {
        pizza.addTopping('mushrooms');
    });
}
addMushroomsToPizzas([pizzaOne, pizzaTwo]);
console.log(pizzaOne, pizzaTwo);
