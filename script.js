let container = document.getElementById("container");

fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((data) => {
    let categories = {};

    data.forEach((product) => {
      if (!categories[product.category]) {
        categories[product.category] = [];
      }
      categories[product.category].push(product);
    });

    for (let category in categories) {
      let categoryDiv = document.createElement("div");
      categoryDiv.classList.add("category");
      categoryDiv.innerHTML = `<h2>${category}</h2>`; // ✅ FIXED

      let productsDiv = document.createElement("div");
      productsDiv.classList.add("products");

      categories[category].forEach((product) => {
        let item = document.createElement("div");
        item.classList.add("product-box");
        item.innerHTML = ` 
                            <h3>${product.title}</h3>
                            <img src="${product.image}" alt="Product Image">
                            <p>${product.price} USD</p>
                            <button>Add to Cart</button>
                        `;
        productsDiv.appendChild(item);
      });

      categoryDiv.appendChild(productsDiv);
      container.appendChild(categoryDiv);
    }
  })
  .catch((error) => console.error("Error fetching data:", error));
