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