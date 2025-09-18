const object ={
    a :1,
    getA(){
        return this;
    }
}
console.log(object.getA.call({test:123}))
console.log(object.getA())
const getARef = object.getA;
const newGetA = getARef.bind({bindtest:123})
console.log(newGetA())
// call bind apply use to change the function context

function sortArray(arr){
    const array1 = [3,1,4,,11,2];
    array1.pop()//2
    array1.splice(2,2)//4,11 splice(index,till)
    array1.sort(function(a,b){
        return a-b;
    })
    console.log(array1)
}
sortArray()