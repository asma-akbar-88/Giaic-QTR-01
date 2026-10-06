function parentFunction(func) {
    console.log("I'm the parent function");
    func();
}
function childFunction() {
    console.log("I'm the child function");
}
parentFunction(childFunction);
// ---------------------------------------------------------
function processUserInput(callback) {
    let name = "Sir Ameen Alam";
    callback(name);
}
processUserInput(function (name) {
    console.log("Hello, " + name);
});
export {};
