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
    format() {
        let formatted = this.details + '\n';
        // base
        formatted += `Pizza on a ${this.base} base with `;
        // toppings
        if (this.toppings.length < 1) {
            formatted += 'no toppings';
        }
        else {
            formatted += `toppings: ${this.toppings.join(', ')}`;
        }
        return formatted;
    }
}
const pizzaOne = new Pizza('mario special', 15);
pizzaOne.addTopping('mushrooms');
function printMenuItem(item) {
    console.log(item.details);
}
function printFormatted(val) {
    console.log(val.format());
}
printMenuItem(pizzaOne);
printFormatted(pizzaOne);
