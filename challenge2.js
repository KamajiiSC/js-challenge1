// Adding then dividing their final scores to get an average score
const scoreJohn = (89 + 120 + 103) / 3;
const scoreMike = (116 + 94 + 123) / 3;
const scoreMary = (97 + 134 + 105) / 3;

/*
if(scoreJohn > scoreMike){
  console.log("John wins on average compared to Mike, John scores " + scoreJohn);
} else if(scoreJohn === scoreMike){
  console.log("John and Mike on average have the same score of" + scoreJohn);
}else{
  console.log("Mike wins on average compared to John, Mike scores " + scoreMike);
}
*/

if (scoreJohn > scoreMary && scoreJohn > scoreMike){
  console.log("John wins out of the three with an average of " + scoreJohn);
}else if(scoreMike > scoreJohn && scoreMike > scoreMary){
  console.log("Mike wins out of the three with an average of " + scoreMike);
}else if(scoreMary > scoreJohn && scoreMary > scoreMike){
  console.log("Mary wins out of the three with an average of " + scoreMary);
}else if(scoreJohn === scoreMike && scoreJohn !== scoreMary ){
  console.log("John and Mike tied with an average of " + scoreJohn);
}else if(scoreJohn === scoreMary && scoreJohn !== scoreMike){
  console.log("John and Mary tied with an average of " + scoreJohn);
}else if(scoreMike === scoreMary && scoreMike !== scoreJohn){
  console.log("Mike and Mary tied with an average of " + scoreMike);
}else{
  console.log("There was a three way tie with a score of " + scoreJohn);
}