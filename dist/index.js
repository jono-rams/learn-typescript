"use strict";
// classes 101
class MenuItem {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    get details() {
        return `${this.title} costs $${this.price}`;
    }
    format() {
        return `This menu item is called ${this.title} and costs $${this.price}`;
    }
}
class Pizza extends MenuItem {
    constructor(title, price) {
        super(title, price);
        this.base = 'classic';
        this.toppings = [];
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
function printMenuItem(item) {
    console.log(item.details);
}
function printFormatted(val) {
    console.log(val.format());
}
printMenuItem(pizzaOne);
printFormatted(pizzaOne);
