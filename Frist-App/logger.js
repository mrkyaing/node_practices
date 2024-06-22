var url='http://mylogger.io/log';
var myProfile="https://mrkyaing.github.io/profile/";
function log(message){
    //send an http request
    console.log(message);
}
console.log(__filename);
console.log(__dirname);
module.exports.log=log;//export the log func to access via other.
module.exports.url=url;//export the variable url to access via other
module.exports.myProfile=myProfile;//export the variable myprofile to access via other.