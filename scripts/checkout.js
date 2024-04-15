const checkoutContent = document.getElementById('content');

const cart = JSON.parse(localStorage.getItem('cart') || '{}');


for (let item of Object.keys(cart)) {
    const checkoutItem = document.createElement('div');
    checkoutItem.className = 'item';

    const checkoutItemDescription = document.createElement('div');

    checkoutItemDescription.className = 'item-description';

    const img = document.createElement('img');
    img.src ='.'+cart[item].productImage;
    img.alt = cart[item].productName;

    const pTag = document.createElement('p');

    pTag.innerText = cart[item].productName;

    const container = document.createElement('div');
    container.className = 'item-action';


    const button = document.createElement('button');
    button.innerText = "remove";

    button.onclick = removeFromCart.bind(null, item);
    const price = document.createElement('p');

    price.innerText = "₦" + cart[item].price;
    
    container.appendChild(price);
    container.appendChild(button);

    checkoutItemDescription.appendChild(img);
    checkoutItemDescription.appendChild(pTag);

    checkoutItem.appendChild(checkoutItemDescription);
    checkoutItem.appendChild(container);

    checkoutContent.appendChild(checkoutItem);
}

const total = document.getElementById('total-cost');

total.innerText = `Checkout (Total: ₦${Object.keys(cart).reduce((acc, item) => acc + cart[item].price, 0)})`;

function removeFromCart(index) {
    const currentCart = JSON.parse(localStorage.getItem('cart') || '{}');

    delete currentCart[index];

    localStorage.setItem('cart', JSON.stringify(currentCart));

    location.reload();
}