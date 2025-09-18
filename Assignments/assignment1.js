// Assignment-1
 
// Create a Product class with properties: name(immutable), price(mutable).
// Create a ShoppingCart class with an array to store products.
// In ShoppingCart  class , Add methods to add/remove products and calculate total price.
// Create 3 instances and display the total.
// Use either ES6 or ES5 syntax.

const readline = require('readline');

class Product {
    #name;
    constructor(name, price) {
        this.#name = name;
        this.price = price;
    }

    getName() {
        return this.#name;
    }
}

class ShoppingCart {
    constructor() {
        this.products = [];
    }

    addProduct(product) {
        this.products.push(product);
    }

    removeProduct(productName) {
        this.products = this.products.filter(product => product.getName() !== productName);
    }

    calculateTotal() {
        return this.products.reduce((total, product) => total + product.price, 0);
    }

    displaySum() {
        console.log(`Total Price: ${this.calculateTotal()}`);
    }
}

// //product istances
// const product1 = new Product('Spoon',20)
// const product2 = new Product('Plate',30)
// const product3 = new Product('Fork',10)

// const cart = new ShoppingCart();

// //adding products to cart
// cart.addProduct(product1);
// cart.addProduct(product2);
// cart.addProduct(product3);
// cart.displaySum()//60
// cart.removeProduct('Fork')//removes Fork

// cart.displaySum()//50

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const cart = new ShoppingCart();

function showMenu() {
    console.log('\nChoose an option:');
    console.log('1. Add Product');
    console.log('2. Remove Product');
    console.log('3. Display Total');
    console.log('4. Exit');

    rl.question('Enter your choice (1-4): ', choice => {
        switch (choice) {
            case '1':
                addProductToProducts();
                break;
            case '2':
                removeProductFromProducts();
                break;
            case '3':
                cart.displaySum();
                showMenu();
                break;
            case '4':
                console.log('Exit');
                rl.close();
                break;
            default:
                console.log('Invalid choice');
                showMenu();
        }
    });
}

function addProductToProducts() {
    rl.question('Enter product name: ', name => {
        rl.question('Enter product price: ', price => {
            const product = new Product(name, parseFloat(price));
            cart.addProduct(product);
            console.log(`Added ${name} to cart.`);
            showMenu();
        });
    });
}

function removeProductFromProducts() {
    rl.question('Enter product name to remove: ', name => {
        cart.removeProduct(name);
        console.log(`Removed ${name} from cart.`);
        showMenu();
    });
}


showMenu();
