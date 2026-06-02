const chaiFlavours: string[] = ["masala", "adrak"];
const chaiPrice: number[] = [10, 20];
const flag: boolean[] = [false, true];

const rating: Array<number> = [4.5, 5];

type Chai = {
  name: string;
  price: number;
};

const menu: Chai[] = [
  { name: "Masala", price: 15 },
  { name: "adrak", price: 20 },
  { name: "elachi", price: 25 },
]; //both are same thing
const Menu: Array<Chai> = [
  { name: "Masala", price: 15 },
  { name: "adrak", price: 20 },
  { name: "elachi", price: 25 },
];

const citites: readonly string[] = ["Delhi", "Jaipur"];
// citites.push("Pune")//Property 'push' does not exist on type 'readonly string[]'.

//heterogeneous arrays
let arr: (string | number)[];
arr = ["Masala", 20];
arr = [20, "Masala"];

//2 dimensional arrays
const table: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

let chaiTuple: [string, number];
chaiTuple = ["Masala", 20];
// chaiTuple = [20, "masla"];

let userInfo: [string, number, boolean?];
userInfo = ["hitesh", 100];
userInfo = ["hitesh", 100, true];

const location: readonly [number, number] = [10, 20];
// location[0] = 50;

//named tuple
const chaiItems: [name: string, price: number] = ["Masla", 25];

//enums
// enum CupSize {//Standard practise is that whatever the values are there in enums are said to be in all caps only
//   SMALL,
//   MEDIUM
//   LARGE,
// }

// const size = CupSize.MEDIUM;// by default we have 0 i.e  0 based indexing --> enum of numbers
// console.log(size);

enum CupSize {
  SMALL = 10,
  MEDIUM = 20,
  LARGE = 30,
}

const size = CupSize.MEDIUM;
console.log(size);

enum Status {
  //enum of numbers
  PENDING = 100,
  SERVED, // 101 -> auto increment
  CANCELLLED, //102
}

const statusss = Status.SERVED;
console.log(statusss);

//we can use this enums like environment vairables
enum ChaiType {
  // enum of strings
  MASALA = "masala",
  GINGER = "ginger",
}
function makeChai(typee: ChaiType) {
  // it means this func parameter only accepts values from given enum
  console.log(`making ${typee}`);
}
makeChai(ChaiType.GINGER);
makeChai(ChaiType.MASALA);
// makeChai("masala") // u cannot give any custom values

//we can also have heterogeneous enums not only homogeneous consistent valued enums

enum RandomEnum {
  // mostly not used
  ID = 1,
  NAME = "Chai",
}
// RandomEnum.ID = 2; //--> we cannot change the enum values

const enum Sugars {
  LOW = 1,
  MEDIUM = 2,
  HIGH = 3,
}

const s = Sugars.HIGH;
// Sugars.HIGH = 3123

let t: [string, number] = ["chai", 10]; // its a tuple but under the hood its an array only
t.push("extra"); // so we can push elements into it as well
console.log(t); //[ 'chai', 10, 'extra' ]
