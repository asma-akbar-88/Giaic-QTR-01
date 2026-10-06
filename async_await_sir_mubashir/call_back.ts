function parentFunction(func: () => void) {
    console.log("I'm the parent function");
    func();
}

function childFunction() {
    console.log("I'm the child function");
}

parentFunction(childFunction);


// ---------------------------------------------------------

function processUserInput(callback: (name: string) => void) {
    let name = "Sir Ameen Alam";
    callback(name);
}

processUserInput(function (name: string) {
    console.log("Hello, " + name);
});