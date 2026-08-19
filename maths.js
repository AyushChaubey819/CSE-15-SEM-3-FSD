function add(a, b) {
  return a + b;
}

console.log(add(10, 20)); 

function sub(c,d){
    return c-d;
}0,                                                                                             
console.log(sub(10,5)) ;
                           
setTimeout(() => {
    console.log("2.setTimeout");
},0) ;

setImmediate(() =>  {
    console.log("3.setIntermediate") ;
})

process.nexrTick(() => {
    console.log("4.nextTick") ;
})




