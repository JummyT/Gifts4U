const data = [
        {
        "productName": "Pyramid Chocolates",
        "category": "chocolates",
        "productImage": "./images/chocolates1.png",
        "price": 15
    },
    {
        "productName": "Chocolates Candy",
        "category": "chocolates",
        "productImage": "./images/chocolates2.png",
        "price": 20
    },
    {
        "productName": "MJ Chocolates",
        "category": "chocolates",
        "productImage": "./images/chocolates3.png",
        "price": 25
    },
    {
        "productName": "Chocolateys",
        "category": "chocolates",
        "productImage": "./images/chocolates4.png",
        "price": 30
    },
    {
        "productName": "Craft1",
        "category": "crafts",
        "productImage": "./images/crafts1.png",
        "price": 10
    },
    {
        "productName": "Craft2",
        "category": "crafts",
        "productImage": "./images/crafts2.png",
        "price": 15
    },
    {
        "productName": "Craft3",
        "category": "crafts",
        "productImage": "./images/crafts3.png",
        "price": 20
    },
    {
        "productName": "Craft4",
        "category": "crafts",
        "productImage": "./images/crafts4.png",
        "price": 25
    },
    {
        "productName": "Gift Item1",
        "category": "giftitems",
        "productImage": "./images/Giftitem1.png",
        "price": 15
    },
    {
        "productName": "Gift Item2",
        "category": "giftitems",
        "productImage": "./images/Giftitem2.png",
        "price": 20
    },
    {
        "productName": "Gift Item3",
        "category": "giftitems",
        "productImage": "./images/Giftitem3.png",
        "price": 25
    },
    {
        "productName": "Gift Item4",
        "category": "giftitems",
        "productImage": "./images/Giftitem4.png",
        "price": 30
    },
    {
        "productName": "Poster Card1",
        "category": "posters",
        "productImage": "./images/poster1.jpeg",
        "price": 10
    },
    {
        "productName": "Poster Card3",
        "category": "posters",
        "productImage": "./images/poster3.png",
        "price": 20
    },
    {
        "productName": "Poster Card2",
        "category": "posters",
        "productImage": "./images/poster2.jpeg",
        "price": 15
    },
    {
        "productName": "Poster Card4",
        "category": "posters",
        "productImage": "./images/poster4.png",
        "price": 15
    },
    {
        "productName": "Sweets1",
        "category": "sweets",
        "productImage": "./images/Sweets1.png",
        "price": 10
    },
    {
        "productName": "Sweets2",
        "category": "sweets",
        "productImage": "./images/Sweets2.png",
        "price": 15
    },
    {
        "productName": "Sweets3",
        "category": "sweets",
        "productImage": "./images/Sweets3.png",
        "price": 15
    },
    {
        "productName": "Sweets4",
        "category": "sweets",
        "productImage": "./images/Sweets4.png",
        "price": 15
    },
    {
        "productName": "Christmas DecoCard1",
        "category": "others",
        "productImage": "./images/others1.png",
        "price": 25
    },
    {
        "productName": "Christmas DecoCard2",
        "category": "others",
        "productImage": "./images/others2.png",
        "price": 25
    },
    {
        "productName": "Christmas DecoCard3",
        "category": "others",
        "productImage": "./images/others3.png",
        "price": 30
    },
    {
        "productName": "Christmas DecoCard4",
        "category": "others",
        "productImage": "./images/others4.png",
        "price": 30
    },

]   



/**
 * removes item to cart and updates the button text to remove from cart
 * 
 * @param {*} index - index of the selected product
 * @param {*} button - the button element clickec
 */
function removeFromCart(index, button) {
    const currentCart = JSON.parse(localStorage.getItem('cart') || '{}');

    delete currentCart[index];

    button.innerText = "Add to Cart";

    button.onclick = addToCart.bind(null, index, button);

    localStorage.setItem('cart', JSON.stringify(currentCart));
    updateCartItemCount();
}

/**
 * Adds item to cart and updates the button text to remove from cart
 * 
 * @param {*} index - index of the selected product
 * @param {*} button - the button element clickec
 */
function addToCart(index, button) {
    const currentCart = JSON.parse(localStorage.getItem('cart') || '{}');

    const updatedCart = {...currentCart, [index]: data[index]};

    button.innerText = "Remove from Cart";

    button.onclick = removeFromCart.bind(null, index, button);

    localStorage.setItem('cart', JSON.stringify(updatedCart));
    updateCartItemCount();
}


/**
 * Adds items to the DOM
 * 
 * @param {*} data - list of all products
 */
function addItemsToDom(data) {
    inventoryView.innerHTML = '';
    for (let i = 0; i < data.length; i++) {
        const card = document.createElement('div');
        card.id = "card";
    
        const img = document.createElement('img');
    
        img.src = data[i].productImage;
        img.alt = data[i].productName;
    
        const pTag = document.createElement('p');
    
        pTag.innerText = data[i].productName;
    
        const button = document.createElement('button');
    
        button.innerText = "Add to Cart";

        button.onclick = addToCart.bind(null, i, button);
    
        card.appendChild(img);
        card.appendChild(pTag);
        card.appendChild(button);
    
        inventoryView.appendChild(card);
    } 
}

/**
 * Updates the cart item count
 
 */
function updateCartItemCount() {
    document.getElementById('cart-counter').innerText = `Cart (${Object.keys(JSON.parse(localStorage.getItem('cart') || '{}')).length})`
}


// Initial setup
// add items to DOM
// set cart to empty object
// update cart item count
document.addEventListener('DOMContentLoaded', () => {
    addItemsToDom(data);
    localStorage.setItem('cart', JSON.stringify({}));
    updateCartItemCount();
});

const inventoryView = document.getElementById('content');

for (let elem of document.querySelectorAll('input[name="category"]')) {
    elem.addEventListener('click', event => {
        switch(event.target.value) {
            case 'chocolates': {
                addItemsToDom(data.filter(item => item.category === 'chocolates'));
                break;
            }
            case 'sweets': {
                addItemsToDom(data.filter(item => item.category === 'sweets'));
                break;
            }
            case 'posters': {
                addItemsToDom(data.filter(item => item.category === 'posters'));
                break;
            }
            case 'crafts': {
                addItemsToDom(data.filter(item => item.category === 'crafts'));
                break;
            }
            case 'giftitems': {
                addItemsToDom(data.filter(item => item.category === 'giftitems'));
                break;
            }
            case 'others': {
                addItemsToDom(data.filter(item => item.category === 'others'));
                break;
            }
            default: {
                addItemsToDom(data);
                break;
            }
        }
    })
}




