type ChaiOrder = {
  type: string;
  sugar: number;
  strong: boolean;
};

function makeChai(order: ChaiOrder) {
  console.log(order);
}
function serveChai(order: ChaiOrder) {
  console.log(order);
}

type TeaRecipie = {
  water: number | string;
  milk: number;
  powder: "milkpowder" | "waterpowder";
};

class MasalaChai implements TeaRecipie {
  water: number = 100;
  milk: number = 50;
  powder: "milkpowder" | "waterpowder" = "milkpowder";
}

// type CupSize = "small" | "large"; // classes cannot implement these custom types so we have to make an interface here
interface CupSize {
  size: "small" | "large";
}

class Chai implements CupSize {
  size: "small" | "large" = "large";
}

// type respone = { ok: true } | { ok: false };
// class myres implements respone {
//   ok: boolean = true;
// }

type TeaType = "masala" | "ginger" | "lemon"; // literal types (not primitives)

function orderChai(t: TeaType) {
  console.log(t);
}

// intersection
type basechai = {
  tealeaves: number;
};
type extra = {
  masala: number;
};

type masalachai = basechai & extra; // intersection (AND) --> both properties should come
const cup: masalachai = {
  tealeaves: 2,
  masala: 1,
};

type User = {
  username: string;
  bio?: string;
};

const u1: User = {
  username: "hitesh",
};
const u2: User = {
  username: "dhanraj",
  bio: "dhanraj.ai",
};

type config = {
  readonly appname: string; // for this u have to atleast set the value once then after it becomes readonly
  version: number;
};

const cfg: config = {
  appname: "masterji",
  version: 1,
};

// cfg.appname = "dhanraj"; //error
