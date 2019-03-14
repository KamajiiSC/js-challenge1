const MARK_MASS = 100; //kg
const MARK_HEIGHT = 1.8; //meters

const JOHN_MASS = 85;
const JOHN_HEIGHT = 1.7;

//Calculate John and Marks Bmi's
let johnBmi = JOHN_MASS / (JOHN_HEIGHT * JOHN_HEIGHT);
let markBmi= MARK_MASS / (MARK_HEIGHT * MARK_HEIGHT);
 
//Compare their bmi numbers
let isBmiHigher = markBmi > johnBmi;

//console.log(johnBmi);
//console.log(markBmi);

console.log('Is Mark\'s BMI higher than John\'s? ' + isBmiHigher);
