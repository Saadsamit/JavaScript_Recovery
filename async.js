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