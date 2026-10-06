function washing() {
    console.log('Washing started ... ');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('washing done!\n');
        }, 5000);
    });
}

function soaking() {
    console.log('Soaking started ... ');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Soaking done!\n');
        }, 3000);
    });
}

function drying() {
    console.log('Drying started ... ');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Drying done! \n');
        }, 2000);
    });
}

async function runWashingMachine() {
    try {
        const result1 = await washing();
        console.log(result1);

        const result2 = await soaking();
        console.log(result2);

        const result3 = await drying();
        console.log(result3);
    } catch (error) {
        // Agar koi bhi step fail hoga, code yahan jump kar jayega
        console.log("Error aa gaya:", error);
    }
}

runWashingMachine();

