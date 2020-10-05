$(document).ready(function(){

	
var magic8Ball = {};
magic8Ball.answersList = ["It is certain", "It is decidedly so", "Without a doubt", "OF COURSE !", "Yes, definitely", "Outlook good", "Concentrate and ask again!"];

	
magic8Ball.askQuestion = function(question) {
	var randomNumber= Math.random();
	var randomNumberFromList= randomNumber * this.answersList.length;
	var randomIndex = Math.floor(randomNumberFromList);
	var answer = this.answersList[randomIndex];

	$("#answer").text( answer );

	console.log(question);
	console.log(answer);
};

var onClick = function() {
	var question = prompt("ASK ANY YES/ NO QUESTION. What do you want to know?");
	magic8Ball.askQuestion(question);
};

$('#questionButton').click(onClick);


});