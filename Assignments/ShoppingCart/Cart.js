class ShoppingCart {
    constructor() {
        this.products = new Map();
    }

    addProduct(product) {
        const name = product.getName();

        if (this.products.has(name)) {
            const existing = this.products.get(name);
            console.log(`Product "${name}" already exists.`);
        } else {
            this.products.set(name, product);
            console.log(`Added "${name}" to cart.`);
        }
    }

    removeProduct(productName) {
        const name = productName.trim();
        if (!this.products.has(name)) {
            console.log(`Product "${name}" not found in cart.`);
            return false;
        }
        this.products.delete(name);
        console.log(`Removed "${name}" from cart.`);
        return true;
    }

    calculateSum() {
        let total = 0;
        this.products.forEach(product => {
            total += product.price * product.quantity;
        });
        return total;
    }

    displaySum() {
        console.log(`Total Price: ₹${this.calculateSum()}`);
    }

    displayProducts() {
        if (this.products.size === 0) {
            console.log('Cart is empty.');
        } else {
            console.log('Products in Cart:');
            console.log(`name : product : quantity`);
            this.products.forEach((product, name) => {
                console.log(`${name}: ₹${product.price} : ${product.quantity}`);
            });
        }
    }
}

export default ShoppingCart;
