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

export default ShoppingCart