var PersonOne = require('./person');

var personOne = PersonOne("Brant", 100);
personOne.selfIntroduce();

console.log("PersonTwo", PersonTwo);

var PersonTwo = require('./person');
var personTwo = PersonTwo("Larry", 19);
personTwo.selfIntroduce();

console.log("PersonOne === PersonTwo ? ", PersonOne === PersonTwo);