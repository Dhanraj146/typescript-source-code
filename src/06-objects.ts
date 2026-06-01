const chai = {
  name: "Masala Chai",
  price: 20,
  isHot: true,
};

// { // TS will type infer like this automatically behind the scenes
//     name : string;
//     price : number;
//     isHot : boolean;
// }

let tea: {
  // object declaration
  name: string;
  price: number;
  isHot: boolean;
};

tea = {
  name: "ginger tea",
  price: 25,
  isHot: true,
  //   milk: "powder",
};

type Tea = {
  // reusable
  name: string;
  price: number;
  ingredients: string[];
};

const adrakChai: Tea = {
  name: "dhanraj",
  price: 42,
  ingredients: ["ginger", "tea leaves"],
};

//
type Cup = { size: string };
let smallCup: Cup = { size: "200ml" };
let bigCup = { size: "500ml", material: "steel" };
smallCup = bigCup;

type Brew = { brewTime: number };
const coffee = { brewTime: 5, beans: "Arabica" };
const chaiBrew: Brew = coffee;

type User = {
  username: string;
  password: string;
};

// const u:User = {
//     username : "dhanraj"
// }

type Item = { name: string; quantity: number };
type Address = { street: string; pin: number };

type Order = {
  id: string;
  items: Item[];
  address: Address;
};
