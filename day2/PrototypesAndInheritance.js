//Prototypal inheritance with constructor functions
function Animal(name){
    this.name = name;
}
//prototype to create the object of a function
Animal.prototype.speak = function(){
    return `${this.name} makes a noise`
}

const a = new Animal('Generic Animal')
console.log(a.speak())
const b = new Animal('Tom')
console.log(b.speak())
console.log(a===b)//false

function Dog(name,breed){
    Animal.call(this,name)//call parent constructor super()
    this.breed = breed;
}
//Inherit from Animal
Dog.prototype = Object.create(Animal.prototype)//extends animal funtion
Dog.prototype.constructor = Dog;

//Overide speak method
Dog.prototype.speak = function(){
    return `${this.name} barks.`
}

const d = new Dog('Tim','German Shepered')
console.log(d.speak())

//Inheritance with ES6 classes
class Shape{
    #color;//private field
    static description='This is a shape'
    constructor(color){
        this.color = color;
    }
    describe(){
        return `A${this.color} shape`
    }
}

Shape.description='Updated'
console.log(Shape.description)

class Circle extends Shape{
    constructor(color,radius){
    super(color);
    this.radius = radius;
    }
    area(){
        return Math.PI*this.radius*this.radius
    }
}

const circle = new Circle('red',5);
console.log(circle.describe());
console.log(circle.area());
const shape = new Shape('green')
// Shape.#color = 'blue'//private filed

const obj={
    age:25
}
Object.freeze(obj);//Prevent adding/removing/modifyinf properties
console.log(Object.isFrozen(obj));

obj.age = 30;//Modifying existing property
console.log(obj.age)//25