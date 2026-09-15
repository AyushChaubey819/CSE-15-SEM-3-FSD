Promise 

const promise = new Promise ((resolve , reject) => {
    setTimeout(() => {
        resolve("found data");
    },2000) ;
});

promise.then((error)=>{
    console.log(error);
});