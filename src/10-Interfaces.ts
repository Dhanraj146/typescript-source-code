// main goal --> is to give shape to ur object or data

//almost type and interface both can be used interchangebly but
// interface is mostly used in
// object shapes
// classes
// OOP-style contracts

// type
// More powerful and flexible.
// Can represent:
// objects
// unions
// tuples
// primitives
// functions
// mapped types
// conditional types

interface Chai {
  flavor: string;
  price: number;
  milk?: boolean;
}

const masala: Chai = {
  flavor: "masala",
  price: 30,
};

interface Shop {
  readonly id: number;
  name: string;
}

const s: Shop = {
  id: 1,
  name: "chaicode cafe",
};

// s.id = 2 // readonly property

//function definition or declaration
interface DiscountCalculator {
  (price: number): number;
}

const apply50: DiscountCalculator = (p) => p * 0.5;

interface TeaMachine {
  start(price: number): number;
  stop(): void;
}

const machine: TeaMachine = {
  start(p) {
    console.log("Started");
    return p * 0.5;
  },
  stop() {
    console.log("Stopped");
  },
};

//index signatures
interface ChaiRatings {
  [flavour: string]: number;
}

const rating: ChaiRatings = {
  masala: 4.5, // like this u can take any number of values in the structure
  ginger: 10,
  adrak: 50,
  //   elachi:"20"
};

//interfaces can be doubled and wherever u write inrerfaces with the same name then all will get merged and if u use that interface or a class implements that interface then the object u are using or the class implementing it should consider all the properties
//interfaces will be merged -- feature
interface User {
  name: string;
}
interface User {
  age: number;
}

const user: User = {
  name: "Hitesh",
  age: 42,
};

interface A {
  a: string;
}
interface B {
  b: string;
}

interface C extends A, B {} // C should implement all the methods and properties in A and B
