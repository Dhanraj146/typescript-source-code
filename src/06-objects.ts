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
  // object declaration--> not reusable
  name: string;
  price: number;
  isHot: boolean;
};

tea = {
  name: "ginger tea",
  price: 25,
  isHot: true,
  // milk: "powder",
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
//we can split types like this
type Item = { name: string; quantity: number };
type Address = { street: string; pin: number };

type Order = {
  id: string;
  items: Item[];
  address: Address;
};

type Chai = {
  name: string;
  price: number;
  isHot: boolean;
};

// const func = (updates: Chai) => {
//   console.log(updates);
// };

// func({
//   name: "Dhanraj",
// });

const updateChai = (updates: Partial<Chai>) => {
  //Make all properties in T optional
  console.log("updating chai with ", updates);
};

updateChai({
  name: "Dhanraj",
});
// updateChai({
//   quantity:2
// });
updateChai({});

type ChaiOrder = {
  name?: string;
  quantity?: number;
};
const placeOrder = (order: Required<ChaiOrder>) => {
  //Make all properties in T required
  console.log(order);
};
placeOrder({
  name: "dhanraj",
  quantity: 2,
});
// placeOrder({})

type Chiaseeds = {
  name: string;
  price: number;
  bubbled: boolean;
  ingredients: string[];
};

type basicSeedsinfo = Pick<Chiaseeds, "name" | "price">;
//From T, pick a set of properties whose keys are in the union K
const seedsinfo: basicSeedsinfo = {
  name: "chia",
  price: 25,
  // bubbled:true
};

type privateChai = {
  name: string;
  price: number;
  isHot: boolean;
  secretIngredients: string;
};

type publicChai = Omit<privateChai, "secretIngredients">;
