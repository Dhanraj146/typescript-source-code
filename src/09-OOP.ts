//Type suggestions and predictable behaviour

// class Chai {
//   flavour: string;
//   price: number;

//so if u do declare variables here then use the constructor as well

//   //   constructor(flavour: string, price: number) {
//   //     this.flavour = flavour;
//   //     this.price = price;
//   //   }
//   constructor(flavour: string) {
//     this.flavour = flavour;
//   }
// }

// // const masalaChai = new Chai("ginger", 40);
// // masalaChai.flavour = "masala";
// // masalaChai.price = 30;
// const masalaChai = new Chai("ginger");

//access modifiers

class Chai {
  public flavour: string = "masala";

  private secretIngredients = "Cardamom";

  reveal() {
    return this.secretIngredients;
  }
}

const c = new Chai();
console.log(c.flavour);
// console.log(c.secretIngredients) // not accesible

class Shop {
  protected shopName = "Chai Corner";
}

class Branch extends Shop {
  getName() {
    return this.shopName; // ok
  }
}

// new Branch().getName()

class Walet {
  #balance = 100; // this is JS private access modifier and in JS all are by efault public

  getBalance() {
    return this.#balance;
  }
}

const w = new Walet();
console.log(w.getBalance());

class Cupp {
  readonly capacity: number = 20;

  constructor(capacity: number) {
    this.capacity = capacity;
  }
}

// const cc = new Cupp(100);

//controlled gates --> getters and setters

class ModernChai {
  private _sugar = 2;

  get sugar() {
    return this._sugar;
  }

  set sugar(value: number) {
    if (value > 5) throw new Error("Too Sweet");
    this._sugar = value;
  }
}

const ccc = new ModernChai();
ccc.sugar = 3;
console.log(ccc.sugar);

class EkChai {
  static shopName = "chaicode caffe";

  constructor(public flavour: string) {}
}

console.log(EkChai.shopName);

//abstract classes

abstract class heyChai {
  abstract makeChai(): void;
}

class MasalaChai extends heyChai {
  makeChai() {
    console.log("Making masala chai");
  }
}

const chai = new MasalaChai();
chai.makeChai();

// const chai = new heyChai();

class Heater {
  heat() {}
}

class ChaiMaker {
  // composition -- aggregation(rarely used inheritance is mostly used)
  constructor(private heater: Heater) {}
  make() {
    this.heater.heat;
  }
}
