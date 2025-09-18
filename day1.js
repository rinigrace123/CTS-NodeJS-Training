// cts = {}
// function sum(a,b,c){
//     console.log('v1')
//     return a+b+1;
// }

// cts.sum = sum;
// var sum=(a,b)=>{
//     return a+b
// }

// var result = sum(2,3,4,6);
// console.log(result)//5

// var result1 = cts.sum(2,3,4,6);
// console.log(result)//6

// function foo(){
//     console.log(this)
//     // console.log(a,b)
// }
// var cts ={}
// cts.foo = foo;
// cts.foo() //Context is cts object//will return foo function
// console.log('-------------------')
// foo()//context is global object// will return the blobal object 

// const customcContextext = {name : 'Rini'}
// foo.apply(customcContextextext , [1,2])
// // foo.apply(customcContextextext , [1])//will return undefined

// function star(){
//    for( let i=1;i<=5;i++){
//        let pattern = " "
//        for(let j=5;j<1;j--){
//            pattern +="* "
//        }
//        console.log(pattern)
//    }
// }
// star()

// function foo(a,b)
// {
//     console.log(this);
//     console.log(a,b);
//     const outer = this
//     function inner(){
//         console.log('inner context',outer)
//     }
//     inner(this);
// }

function foo(a,b)
{
    console.log(this);
    console.log(a,b);
    // const outer = this
     inner = () => { //arrow function takes context of wrapper function //arrow functions
        // don't accept global objects 
        console.log('inner context',outer)
    }
    inner();
}

const cts = {};
cts.foo = foo;
cts.foo()
