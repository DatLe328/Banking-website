$(document).ready(function(){
  let productListElement = document.getElementById("product-list");
  let products = [];
  fetch("card-service.json")
    .then((response) => response.json())
    .then((data) => {
      products = data.products;
      for (let product of products) {
        const listItem = document.createElement("li");
        listItem.classList.add("item");
        listItem.innerHTML = `
          <div class="product-card wow animate__animated animate__fadeInUp">
              <img src="${product.src}" class="product-img">
          </div>
          <a href="../Onbuild/onbuild.html"><p class="product-name wow animate__animated animate__fadeInUp">${product.name}</p></a>
          <div class="product-detail-box">
            <a href="../Onbuild/onbuild.html" class="product-detail"><b>XEM SẢN PHẨM</b></a>
          </div>
        `;
        productListElement.appendChild(listItem);
      }

      
    })
    .catch((error) => {
      console.error("Error fetching the products:", error);
    });
});

