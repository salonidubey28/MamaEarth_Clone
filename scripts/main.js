// const data = require('../products.json
document.addEventListener('DOMContentLoaded', () => {
    const productsContainer = document.getElementById('products-container');

    fetch('../products.json')
        .then(response => response.json())
        .then(data => {
            // console.log(data, "kkkkkkkkkk");
            data.forEach(product => {
                // console.log(product["Product Name"], "jjjjj");
                const productElement = document.createElement('div');
                productElement.classList.add('product');

                // productElement.innerHTML = `
                // <img src="${product.image}" alt="${product.name}">
                // <h2>${product["Product Name"]}</h2>
                // <p>${product["Reviews"]}</p>
                // <div class="price">$${product["MRP"].toFixed(2)}</div>
                // `;

                if(product) {
                    productElement.innerHTML = `
                        <div class="card">
                            <img src="https://t4.ftcdn.net/jpg/02/73/55/33/360_F_273553300_sBBxIPpLSn5iC5vC8FwzFh6BJDKvUeaC.jpg" alt="Product Image" class="card-image">
                            <div class="card-content">
                                <h2 class="card-title">${product["Product Name"]}</h2>
                                <p class="card-description">${product["Reviews"]}</p>
                                <div class="card-price">$${product["MRP"]}</div>
                            </div>
                        </div>
                    `

                }

                // console.log('productElement', productElement);
                productsContainer.appendChild(productElement);
            });
        })
        .catch(error => console.error('Error fetching the products:', error));
});
