const [a, b, c] = [123, 'second', true];
console.log(a);
async function f() {
    return 1;
}
f().then(hi());
function hi() {
    console.log('hi');
}
async function sayHello() {
    const waitTime = 3000;
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('done after ' + (waitTime / 1000) + ' second(s)'), waitTime);
    });
    let result = await promise;
    console.log(result);
}

const sum = (a, b) => a + b;
console.log(sum(1, 2));
function print(a = 5) {
    console.log(a);
}
console.log(print())
sayHello();
var p = { lastname: "Clinton", firstname: "Bill", age: 30 };
console.log("The person is", p);
