function makeChai(type: string, cups: number) {
  console.log(`Making ${cups} cups od ${type}`);
}
makeChai("Masala", 2);

function getChaiPrice(type: string, cups: number): number {
  return 25;
}
getChaiPrice("Masala", 2);

function makeOrder(order: string) {
  if (!order) return null;
  return order;
}

function logChai(): void {
  // if the function doesnt returns anything keep void
  console.log("Chai is ready");
}

// function orderChai(type?:string){

// }
function orderChai(type: string = "Masala") {}

function createChai(order: {
  type: string;
  sugar: number;
  size: "small" | "large";
}): number {
  return 4;
}
