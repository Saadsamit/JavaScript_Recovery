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

// Task 3 — Largest number
// Accept an array and return the largest number. Example: findLargest([10, 5, 20, 8]) // 20

let numbers = [10, 5, 20, 8, 100];

function findLargest(arr) {
  let largest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (largest < arr[i]) {
      largest = arr[i];
    }
  }
  return largest;
}

function findLargest2(arr) {
  return Math.max(...arr);
}

console.log(findLargest(numbers));

console.log(findLargest2(numbers));

//  Arrays — 40 minutes

const products = [
  { id: 1, name: "Laptop", price: 800, category: "electronics" },
  { id: 2, name: "Phone", price: 500, category: "electronics" },
  { id: 3, name: "Shoes", price: 100, category: "fashion" },
  { id: 4, name: "Watch", price: 200, category: "fashion" },
  { id: 5, name: "Keyboard", price: 80, category: "electronics" },
];

// Task A — map()
// Create an array containing only product names. Expected: ["Laptop", "Phone", "Shoes", "Watch","Keyboard"].

const productName = products.map((item) => item.name);

console.log(productName);

// Task B — filter()
// Get products costing more than $200.

const productFilter = products.filter((item) => item.price > 200);

console.log(productFilter);

// Task C — filter()
// Get only electronics.

const productFilterCategory = products.filter(
  (item) => item.category == "electronics",
);

console.log(productFilterCategory);

// Task D — map()
// Create strings such as "Laptop - $800", "Phone - $500", etc.

products.map((item) => {
  console.log(`${item?.name} - $${item?.price}`);
});

// Task E — reduce()
// Calculate the total price of all products.

const totalPrice = products.reduce((total, item) => {
  return total + item.price;
}, 0);

console.log(totalPrice);

// Task F — find()
// Find the product where id === 3.

const productFind = products.find((item) => item.id === 3);

console.log(productFind);

// Task G — some()
// Check whether at least one product costs more than $1000.

const productCheck = products.some((item) => item.price > 1000);

console.log(productCheck);

// Objects & Destructuring — 20 minutes

const user = {
  id: 1,
  name: "Samit",
  email: "samit@example.com",
  role: "developer",
};

// Task A — Destructuring
// Extract name, email, and role using destructuring:

const { name, email, role } = user;

console.log(name, email, role);

// Task B — Spread operator
// Create a new object where role becomes "full-stack developer":

const updateUser = { ...user, role: "full-stack developer" };

console.log(updateUser);

/*
Task C — Explain
Explain why the original user object is not changed by the spread-based update.

the original user object is not changed by the spread-based update because I 
create a new object and change the value of new object. I did't touch the user
object.
*/

// Async JavaScript — 30 minutes

async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  // console.log(data);
  return data;
}

// Task A
// Modify it to fetch the users, extract their names, and print the names.

async function getNames() {
  const users = await getUsers();
  users?.forEach((item) => {
    console.log(item.name);
  });
  return;
}

// getNames();

// Task B
// Add try/catch error handling around the asynchronous operation.

async function handlingEror() {
  try{
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json()

    const userNames = data?.map(item=>item.name)

    console.log(userNames);

  }catch(error){
    console.error(error);
  }
  return
}

handlingEror()

// Task C — Understand
// Be able to explain fetch(), Promise, await, response.json(), and try/catch.
