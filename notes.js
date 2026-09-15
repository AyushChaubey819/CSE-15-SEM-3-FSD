// synchronous is a blocking  architecture , so the execution of each operationis dependent on the comletion of the one before it
function sum(){
    console.log("2") ;

}

function example(){
    console.log("1");
    sum();
    console.log("3");
}

example();
// Asynchronous is a non-blocking architecture , so the exectution of one task isn't depedent on another. Tasks can run simultaneoulsy.
function sum(){
    setTimeout(() => {
        console.log("2");

    },2000);
}

function example(){
    console.log("1") ;
    sum();
    console.log("3");
}

example();
// promise is an object ... it have thrree types :- 
// 1.Pending -> work is in process
// 2.Fulfilled-> completed
// 3.Rejected-> work rejected

