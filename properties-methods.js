const book={
    title:"java",

}

Object.defineProperty(book,'edition',{
    value:2,
    writable:false,
    enumerable:true,
    configurable:true,
})

console.log(book.edition);//2
book.edition = 3
console.log(book.edition);//2