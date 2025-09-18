import Product from './Product.js';
import ShoppingCart from './Cart.js';
import readline from "readline"

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
