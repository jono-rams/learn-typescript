// classes 101

type Base = 'classic' | 'thin' | 'thick' | 'garlic'

class Pizza {
  constructor(private title: string, private price: number) {
    // this.title = title;
    // this.price = price;
  }

  // private title: string
  // private price: number
  private base: Base = 'classic'
  private toppings: string[] = []

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

const pizzaOne: Pizza = new Pizza('mario special', 15);
const pizzaTwo = new Pizza('luigi special', 10);

function addMushroomsToPizzas(pizzas: Pizza[]): void {
  pizzas.forEach(pizza => {
    pizza.addTopping('mushrooms');
  });
}

addMushroomsToPizzas([pizzaOne, pizzaTwo]);

console.log(pizzaOne, pizzaTwo);

