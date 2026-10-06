const promise = new Promise((resolve, reject) => {
    return reject("Fail.... !")
})

// console.log(promise); //Promise { 'succsse' }

promise.then((abc) => {
    console.log(abc);
})
.catch((ab) => {
    console.log(ab);
})


// -----------------------------------------------------
const returnMoney = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Failure !!');
    }, 3000);
});

returnMoney
    .then((value) => {
        console.log(value);
        console.log('Thank you for returning money');
    })
    .catch((value) => {
        console.log(value);
        console.log("Sorry, I'm are unable to return money");
    });