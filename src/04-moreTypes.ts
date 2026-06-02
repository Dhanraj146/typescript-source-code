let response: any = "42";

//forceful type assertions (as) --> assertion not conversion like Number("42")

let numericLength: number = (response as string).length;

type Book = {
  name: string;
};
let bookstring = '{"name": "who moved my cheese"}';
let bookobject = JSON.parse(bookstring) as Book;

console.log(bookobject.name);

const inputelement = document.getElementById("h1") as HTMLInputElement;

let value: any;

value = "chai";
value = [1, 2, 3];
value = 2.5;
value.toUpperCase(); // no error --> i dont care its of any type

let newvalue: unknown;

newvalue = "chai";
newvalue = [1, 2, 3];
newvalue = 2.5;
// newvalue.toFixed() //error
// newvalue.toUpperCase(); // error
//so for this we have to type narrow for unknown type
if (typeof newvalue === "string") {
  //u have to use type guards
  console.log(newvalue.toUpperCase());
}
if (typeof newvalue === "number") {
  console.log(newvalue.toFixed(2));
}

try {
} catch (err) {
  if (err instanceof Error)
    // then only u get suggestions it doesnt know if it is of type Error or not
    console.log(err.message);
}

const data: unknown = "chai aur code"; //here if u use 'any' then it doesnt gives any error before type assertions just in case to use any methods then we do type assertion but here in 'unknown' u have to do type assertion or else u get error
const strdata: string = data as string;

// type --> never(for missing validation checks(to identify obvious mistakes))

type Role = "admin" | "user" | "superadmin";

function redirect(role: Role): void {
  if (role === "admin") {
    console.log("redirecting to admin");
    return;
  }
  if (role === "user") {
    console.log("redirecting to user");
    return;
  }
  role; //(parameter) role: never --> if u didnt handle any case it will give that case as type
}

function neverreturn(): never {
  while (true) {}
  // return ""
}
