//Closure function
function outer(){
    let count = 0;
    function inner(){
        count ++;
        return count;
    }
    return inner;
}
const counter = outer()
console.log(counter())//1
console.log(counter())//2

//closures with parameters
function makeMultiplier(factor){
    return function(x){
        return x * factor;
    }
}

const double = makeMultiplier(2);
console.log(double(5))//10

