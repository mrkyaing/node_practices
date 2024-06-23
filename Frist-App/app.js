var _logger = require('./logger');//import module logger.js file
var _order = require('./order');//import module order.js 
var _movies = require('./movie');//import module movie.js
function sayHello(name) {
    console.log('Hello,' + name);//global scope
}
var message = 'hi';
var hi = function () {
    alert("hi")
}
//window.hi();
sayHello("Mg Kyaing");
//console.log(logger);
_logger.log("hi")
console.log(_logger.url);
console.log(_logger.myProfile);
//console.log(module);
let user = { name: 'MK', email: 'mr.kyaing7@gmail.com' };
console.log(user.name);
_logger.diff();
_logger.say
_order.placeAnOrder(1);
_movies.add(1, 2);//3
_movies.sub(2, 2);//0
_movies.mult(2, 2);//4
