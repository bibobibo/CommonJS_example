var obj1 = require('./simpleObj').obj;

console.log(obj1);

var obj2 = require('./simpleObj').obj;
console.log(obj2);
obj2.motto = "Just give up!!!";

console.log(obj2);
console.log(obj1);