var instrument = "guitar";

5/2 //=> 2.5

Math.floor(5/2) //=> 2

5/2 //=> 2.5

console.log("I love music!"); //=> "I love music!"

var array = [1,2,3,4,5]
for (var i = 0; i < array.length; i++) {array[i] += 1};
//=> [2,3,4,5,6]

if (conditional) {
	block1;
} else {
	block2;
};

switch (conditional) {
	case value1:
		block1
		break;
	case value2:
		block2
		break;
	default:
		block3
};

function methodName(arguments) {
	block;
};

object = {property1: value1, property2: value2};

newObject = new Object();

Math.random()*(max - min) + min; //returns a random number between min and max
Math.random()*(7-3) + 3; //returns a random number between 3 and 7
Math.random()*4 + 3 //returns a random number between 3 and 7