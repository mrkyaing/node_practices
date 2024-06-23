var url = 'http://mylogger.io/log';
var myProfile = "https://mrkyaing.github.io/profile/";
function log(message) {
    //send an http request
    console.log(message);
}
console.log(__filename);
console.log(__dirname);
function diff_between_var_let() {
    var a = 12;
    if (true) {
        var b = 56;
        let c = 89;
        console.log("in the brace");
        console.log('a=' + a);
        console.log('b=' + b);
        console.log('c=' + c);
    }
    console.log("after the brace");
    console.log('a=' + a);
    console.log('b=' + b);
    //console.log('c=' + c);error bacause c is let variable type 
}
const print=function(){
    console.log('printing time man');
}
const sayPrint=setTimeout(print,1000);
module.exports.log = log;//export the log func to access via other.
module.exports.url = url;//export the variable url to access via other
module.exports.myProfile = myProfile;//export the variable myprofile to access via other.
module.exports.diff=diff_between_var_let;
module.exports.say=sayPrint;