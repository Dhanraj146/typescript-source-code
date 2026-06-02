//Generics and interfaces are templates but generics makes code more resuable
//when u desgin librarires and frameworks then these will be used
//for ex :- prisma and drizzle are typescript first so in their source code we can see these many implementations
//Generic functions
function wrapInArray<T>(item: T): T[] {
  return [item];
}

wrapInArray("masala");
wrapInArray(42);
wrapInArray({ flavor: "Ginger" });

function pair<A, B>(a: A, b: B): [A, B] {
  return [a, b];
}

pair("masala", "test");
pair("masala", { flavour: "Ginger" });
pair("masala", 42);

//we can make generic interfaces as well

interface Box<T> {
  content: T;
}

const numberBox: Box<string> = { content: "10" };
const stringBox: Box<number> = { content: 10 };

//we can make generic classes

//real world implementations of generics are in API responses or form states in react

interface ApiPromise<T> {
  status: number;
  data: T;
}

const res: ApiPromise<{ flavor: string }> = {
  status: 200,
  data: { flavor: "masala" },
};
