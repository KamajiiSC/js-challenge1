const MARK_MASS = 100;
const MARK_HEIGHT = 1.8;
const JOHN_MASS = 85;
const JOHN_HEIGHT = 1.7;

let johnBmi = JOHN_MASS / (JOHN_HEIGHT * JOHN_HEIGHT);
let markBmi= MARK_MASS / (MARK_HEIGHT * MARK_HEIGHT);
 
let higherBmi = markBmi > johnBmi;

console.log(johnBmi);
console.log(markBmi);
