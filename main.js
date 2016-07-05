var PersonOne = require('./person');
var PersonTwo = require('./person');

var personOne = PersonOne("Brant", 100);
personOne.selfIntroduce();

var personTwo = PersonTwo("Larry", 19);
personTwo.selfIntroduce();

console.log("PersonOne === PersonTwo ? ", PersonOne === PersonTwo);