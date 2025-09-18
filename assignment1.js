// Assignment-1
 
// Create a Product class with properties: name(immutable), price(mutable).
// Create a ShoppingCart class with an array to store products.
// In ShoppingCart  class , Add methods to add/remove products and calculate total price.
// Create 3 instances and display the total.
// Use either ES6 or ES5 syntax.

class Product {
    #name;
    constructor(name,price){
        this.#name = name;
        this.price= price;
    }
    
    getName() {
        return this.#name;
    }
}

class ShoppingCart {
    constructor(){
        this.products = [];
    }

    addProduct(product){
        this.products.push(product)
    }

    removeProduct(productName){
        this.products = this.products.filter(product => product.getName() !== productName)
    }

    calculateTotal(){
        return this.products.reduce((total,product)=> total+product.price,0)
    }

    displaySum(){
        console.log(`Total Price : ${this.calculateTotal()}`)
    }
}

//product istances
const product1 = new Product('Spoon',20)
const product2 = new Product('Plate',30)
const product3 = new Product('Fork',10)

const cart = new ShoppingCart();

//adding products to cart
cart.addProduct(product1);
cart.addProduct(product2);
cart.addProduct(product3);
cart.displaySum()//60
cart.removeProduct('Fork')//removes Fork

cart.displaySum()//50

