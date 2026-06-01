//type guards
function getChai(kind: string | number) {
  if (typeof kind === "string") return `marking ${kind.toUpperCase()} chai`;
  return `chai order : ${kind.toFixed()}`;
}

function serveChai(msg?: string) {
  // optional msg --> we can pass the msg or not if not passed it becomes undefined or empty
  if (msg) return `serving ${msg}`;
  return `serving default masala chai`;
}

function orderChai(size: "small" | "medium" | "large" | number) {
  if (size === "small") {
    return `small cutting chai....${size.toUpperCase()}`;
  }
  if (size === "medium" || size === "large") {
    return `make extra chai...`;
  }
  return `chai order ${size.toFixed()}`;
}

class KulhadChai {
  serve() {
    return `serving kulhad chai`;
  }
  order() {
    return `order placed`;
  }
}
class Cutting {
  serve() {
    return `serving kulhad chai`;
  }
}

function serve(chai: KulhadChai | Cutting) {
  if (chai instanceof KulhadChai) {
    //if this object is an instanceof kulhadchai class then u will get suggestions of that class methods and props only
    return chai.order();
  }
  return chai.serve(); // we are not getting suggestion of order() method becoz chai here is of type Cutting class
}

// we can make our own types using 'type' keyword --> custom types

type ChaiOrder = {
  // here type is keyword
  type: string; // here type is property of this object type
  sugar: number;
};

function isChaiOrder(obj: any): obj is ChaiOrder {
  //doubt
  return (
    !Array.isArray(obj) &&
    typeof obj === "object" &&
    obj !== null &&
    typeof obj.type === "string" &&
    typeof obj.sugar === "number"
  );
}

function serverOrder(item: ChaiOrder | string) {
  if (isChaiOrder(item)) return `serving ${item.type} && ${item.sugar}`;
  return `serving custom chai: ${item.toUpperCase()}`; // here its a string now becoz validation is over right
}

type MasalaChai = {
  type: "masala";
  spicelevel: number;
};
type GingerChai = {
  type: "ginger";
  quantity: number;
};
type ElaichiChai = {
  type: "elaichi";
  aroma: number;
};

type Chai = MasalaChai | GingerChai | ElaichiChai;

function MAkeChai(order: Chai) {
  switch (order.type) {
    case "masala":
      return `Masala Chai`;
      break;
    case "elaichi":
      return `elaichi Chai`;
      break;
    case "ginger":
      return `ginger Chai`;
      break;

    default:
      break;
  }
}

function brew(order: MasalaChai | GingerChai) {
  if ("spicelevel" in order) {
    //u will get MasalaChai properties and methods here now as the validation says MasalaChai only has spicelevel
  }
}

// function isStringArray(arr: unknown): arr is string[] {
//   // unknown is more preferred
//   return ["dhanraj", "charan"];
// }
