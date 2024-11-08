// classes 101

type Base = 'classic' | 'thin' | 'thick' | 'garlic'

interface HasFormatter {
  format(): string;
}

abstract class MenuItem implements HasFormatter {
  constructor(private title: string, private price: number) {}

  get details(): string {
    return `${this.title} costs $${this.price}`;
  }

  abstract format(): string;
}

class Pizza extends MenuItem {
  constructor(title: string, price: number) {
    super(title, price);
  }

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

  format(): string {
    let formatted = this.details + '\n';
    
    // base
    formatted += `Pizza on a ${this.base} base with `;

    // toppings
    if (this.toppings.length < 1) {
      formatted += 'no toppings';
    } else {
      formatted += `toppings: ${this.toppings.join(', ')}`;
    }

    return formatted;
  }
}

const pizzaOne: Pizza = new Pizza('mario special', 15);
pizzaOne.addTopping('mushrooms');


function printMenuItem(item: MenuItem): void {
  console.log(item.details);
}

function printFormatted(val: HasFormatter): void {
  console.log(val.format());
}

printMenuItem(pizzaOne);
printFormatted(pizzaOne);
