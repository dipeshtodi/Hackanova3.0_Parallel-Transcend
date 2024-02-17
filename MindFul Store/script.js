
const products = [
    {
        name: 'Doodle Book',
        description: 'Scrible your thoughts and express yourself freely.',
        price: 199.00,
        image: 'book1.jpg'
    },
    {
        name: 'Periodic Table of Human Emotions',
        description: 'Understand your emotions and feelings better.',
        price: 349.00,
        image: 'Image-1-scaled.jpg'
    },
    {
        name: 'ikiguide Cards',
        description: 'Discover your lifes purpose with these important questions.',
        price: 999.00,
        image: '1-min.png'
    },
    {
        name: 'Angry & After',
        description: 'Tame your anger with simple healthy hacks to stay calm.',
        price: 399.00,
        image: '2-min-1.png'
    },
    {
        name: 'Heart It Out Merchandise - Badges',
        description: 'Fierce reminder of how special YOU are.',
        price: 49.00,
        image: 'all2.png'
    },
    {
        name: 'Pocket Notebooks',
        description: 'A mini-brain dump for notions, plans and scribbles.',
        price: 149.00,
        image: '15-min.png'
    }
    
];



function createProductCard(product) {
    const productCard = document.createElement('div');
    productCard.classList.add('col-md-4', 'mb-4');

    productCard.innerHTML = `
        <div class="card">
            <img src="${product.image}" class="card-img-top" alt="${product.name}">
            <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text">${product.description}</p>
                <p class="card-text">₹${product.price.toFixed(2)}</p>
                <button class="btn btn-success btn-block" onclick="buyNow('${product.name}', ${product.price})">Buy Now</button>
            </div>
        </div>
    `;

    return productCard;
}


function initializeProducts() {
    const productContainer = document.getElementById('product-container');

    products.forEach(product => {
        const productCard = createProductCard(product);
        productContainer.appendChild(productCard);
    });
}


function buyNow(productName, amount) {
  
    window.location.href = `payment.html?product=${productName}&amount=${amount}`;

}



initializeProducts();
