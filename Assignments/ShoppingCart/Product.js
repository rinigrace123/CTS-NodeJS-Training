class Product {
    #name;
    constructor(name, price,quantity) {
        this.#name = name;
        this.price = price;
        this.quantity = quantity;
    }

    getName() {
        return this.#name;
    }
}
export default Product