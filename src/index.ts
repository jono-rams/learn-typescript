// classes 101

type Base = 'classic' | 'thin' | 'thick' | 'garlic'

class Pizza {
  constructor(title: string, price: number) {
    this.title = title;
    this.price = price;
  }

  title: string
  price: number
  base: Base = 'classic'
  toppings: string[] = []

  addTopping(topping: string): void {
    this.toppings.push(topping);
  }
  removeTopping(topping: string): void {
    this.toppings = this.toppings.filter(t => t !== topping);
  }
  selectBase(b: Base): void {
    this.base = b;
  }
}

const pizza = new Pizza('mario special', 15);
pizza.addTopping('mushrooms');
pizza.addTopping('olives');
// pizza.selectBase('crispy');
pizza.selectBase('garlic');
pizza.removeTopping('olives');

console.log(pizza);

