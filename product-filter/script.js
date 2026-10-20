const productsData = async () => {
  const res = await fetch("http://localhost:3000/items");
  const data = await res.json();
  return data;
};

const cardContainer = document.querySelector(".card-container");
const search = document.getElementById("search");
const category = document.getElementById("category");
const sort = document.getElementById("sort");

const Main = async () => {
  const data = await productsData();

  data?.forEach((item) => {
    const card = document.createElement("div");
    card.className = "card";

    const title = document.createElement("h3");
    title.textContent = item.name;

    const price = document.createElement("p");
    price.textContent = `$${item.price}`;

    card.appendChild(title);
    card.appendChild(price);
    cardContainer.appendChild(card);
  });
};

Main();
