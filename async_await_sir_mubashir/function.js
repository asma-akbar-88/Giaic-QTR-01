//EXPECT NUMBER
function add(a, b) {
    return a + b;
}
//EXPECT STRING
function greet(name) {
    return `Hello ${name}`;
}
//EXPECT BOOLEAN
function powerOutage(light) {
    if (light) {
        console.log('There is light');
    }
    else {
        console.log('Power outage');
    }
}
//EXPECT ARRAY
function customFind(arr, element) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return true;
        }
    }
}
//EXPECT OBJECT
function logPersonName(person) {
    console.log(person.name);
}
const person = {
    name: 'John',
    age: 30,
};
logPersonName(person);
export {};
