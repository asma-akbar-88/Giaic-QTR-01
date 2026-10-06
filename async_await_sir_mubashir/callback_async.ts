function washing(callback: () => void) {
    console.log('Washing started ... ');
    setTimeout(() => {
        console.log('washing done!\n');
        callback(); // Soaking ko start karne ke liye
    }, 5000);
}

function soaking(callback: () => void) {
    console.log('Soaking started ... ');
    setTimeout(() => {
        console.log('Soaking done!\n');
        callback(); // Drying ko start karne ke liye
    }, 3000);
}

function drying() {
    console.log('Drying started ... ');
    setTimeout(() => {
        console.log('Drying done!');
    }, 2000);
}

// Nested Callbacks (Sequential Execution)
// washing(() => {
//     soaking(() => {
//         drying();
//     });
// });
washing(()=>{
    soaking(()=>{
        drying()
    })
});