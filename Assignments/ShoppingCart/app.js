import Product from './Product.js';
import ShoppingCart from './Cart.js';
import readline from 'readline';
import { isValidName, isValidPrice, isValidQuantity } from './validator.js';

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
    console.log('4. Display Products');
    console.log('5. Exit');

    rl.question('Enter your choice (1-5): ', choice => {
        switch (choice) {
            case '1':
                addProductsToProduct();
                break;
            case '2':
                removeProductFromProducts();
                break;
            case '3':
                cart.displaySum();
                showMenu();
                break;
            case '4':
                cart.displayProducts();
                showMenu();
                break;
            case '5':
                console.log('Exit');
                rl.close();
                break;
            default:
                console.log('Invalid choice');
                showMenu();
        }
    });
}

// function addProductsToProduct() {
//     rl.question('Enter product name: ', name => {
//         if (!isValidName(name)) {
//             console.log('Product name cannot be empty.');
//             return addProductsToProduct();
//         }

//         rl.question('Enter product price: ', price => {
//             const enteredPrice = parseFloat(price);
//             if (!isValidPrice(enteredPrice)) {
//                 console.log('Price must be a positive number.');
//                 return addProductsToProduct();
//             }

//             rl.question('Enter product quantity: ', quantity => {
//                 const enteredQuantity = parseInt(quantity);
//                 if (!isValidQuantity(enteredQuantity)) {
//                     console.log('Quantity must be a positive integer.');
//                     return addProductsToProduct();
//                 }

//                 const product = new Product(name, enteredPrice, enteredQuantity);
//                 cart.addProduct(product);
//                 showMenu();
//             });
//         });
//     });
// }

function addProductsToProduct() {
    promptForName();
}

function promptForName() {
    rl.question('Enter product name: ', name => {
        if (!isValidName(name)) {
            console.log('Invalid product name.');
            return promptForName();
        }

        if (cart.products.has(name)) {
            console.log(`Product "${name}" already exists in the cart.`);
            return promptForName();
        }

        promptForPrice(name);
    });
}

function promptForPrice(name) {
    rl.question('Enter product price: ', price => {
        const enteredPrice = parseFloat(price);
        if (!isValidPrice(enteredPrice)) {
            console.log('Price must be a number.');
            return promptForPrice(name);
        }

        promptForQuantity(name, enteredPrice);
    });
}

function promptForQuantity(name, price) {
    rl.question('Enter product quantity: ', quantity => {
        const enteredQuantity = parseInt(quantity);
        if (!isValidQuantity(enteredQuantity)) {
            console.log('Quantity must be a number.');
            return promptForQuantity(name, price);
        }

        const product = new Product(name, price, enteredQuantity);
        cart.addProduct(product);
        showMenu();
    });
}


function removeProductFromProducts() {
    if (cart.products.size === 0) {
        console.log('Cart is empty. Nothing to remove.');
        return showMenu();
    }

    rl.question('Enter product name to remove: ', name => {
        if (!isValidName(name)) {
            console.log('Product name cannot be empty.');
            return showMenu();
        }

        cart.removeProduct(name);
        showMenu();
    });
}

showMenu();
