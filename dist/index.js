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
const pizza = new Pizza('mario special', 15);
pizza.addTopping('mushrooms');
pizza.addTopping('olives');
// pizza.selectBase('crispy');
pizza.selectBase('garlic');
pizza.removeTopping('olives');
// pizza.title = 'luigi special';
console.log(pizza);
