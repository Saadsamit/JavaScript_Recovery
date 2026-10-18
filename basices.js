// Warm-up
//Make your own examples using: string, number, boolean, array, object, null, undefined.

// String
{
  const name = "samit";

  console.log(`string= ${name}`);

  // number
  const age = 25;

  console.log(`number= ${age}`);

  // boolean
  const IsDev = true;

  console.log(`boolean= ${IsDev}`);

  // array
  const array = [1, 2, 3, 4, 5, 6, 7, 8];

  console.log(array);

  // object
  const object = {
    name,
    age,
    IsDev,
    array,
  };

  console.log(object);
}

// 2. Functions — 20 minutes

// Task 1 — Square
// Accept a number and return its square. Example: square(5) // 25
const square = (num) => {
  return num * num;
};

console.log(square(3));

// Task 2 — Greeting
// Accept a name and return: Hello, Samit!

function Greeting(name) {
  return `Hello, ${name}!`;
}

console.log(Greeting("samit"));