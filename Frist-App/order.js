//place an order with number
function placeAnOrder(orderNumber) {
    console.log('Customer order:' + orderNumber);
    cookAnDeliverFood(function () {
        console.log('Deliver food order:' + orderNumber)
    });
}

//simulate a 5 seconds operation
function cookAnDeliverFood(callback) {
    setTimeout(callback, 5000);//wait 5 second to deliver the ordered food
}

//simulate  users web request
placeAnOrder(1);
placeAnOrder(2);
placeAnOrder(3);
placeAnOrder(4);
placeAnOrder(5);

var mk = {
    favFood: 'bancon',
    favMovie: 'steave job'
}
var person = mk;
//person.favFood='pork';
console.log(person.favFood);
console.log(mk.favFood);
console.log(1 == 1);//true
console.log(1 === '1')//false

var zms = {
    printFullName: function () {
        console.log('Hi,I am zin min soe');
        console.log(this == zms);
    }
}
zms.printFullName();
function doSomething() {
    console.log('\ni do somethings');
    console.log(this == zms);//false
    console.log(this == global);//true
}
doSomething();
module.exports.placeAnOrder=placeAnOrder