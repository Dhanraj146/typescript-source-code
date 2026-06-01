let subs: number | string = "1M";
subs = 1000000;

// we can make custom annotations like this also not only default types
let apiRequestStatus: "pending" | "success" | "error" = "pending";
// apiRequestStatus = "dhanraj"
apiRequestStatus = "error";

let airlineSeats: "aisle" | "window" | "middle" = "aisle";
airlineSeats = "middle";

const orders = ["10", "20", "30", "42"];

//avoid 'any' type

// let currentorder; // let currentorder: any
let currentorder: string | undefined;
// currentorder can store any type of data now it doesnt care means its type is any so avoid doing this
for (let order of orders) {
  if (order === "30") {
    currentorder = order;
    break;
  }
}

console.log(currentorder); //let currentorder: string | undefined
