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