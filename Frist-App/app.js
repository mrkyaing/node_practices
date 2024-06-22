var logger=require('./logger');
 function sayHello(name){
    console.log('Hello,'+name);//global scope
 }
var message='hi';
var hi=function(){
    alert("hi")
}
//window.hi();
 sayHello("Mg Kyaing");
 //console.log(logger);
 logger.log("hi")
 console.log(logger.url);
 console.log(logger.myProfile);
 //console.log(module);
 let user={name:'MK',email:'mr.kyaing7@gmail.com'};
 console.log(user.name);