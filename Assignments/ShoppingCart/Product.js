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
export default Product