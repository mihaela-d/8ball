$(document).ready(function(){

	
var magic8Ball = {};
magic8Ball.answersList = ["It is certain", "It is decidedly so", "Without a doubt", "OF COURSE !", "Yes, definitely", "Outlook good", "Concentrate and ask again!", "You already know the answer"];
$("#answer").hide();
	
magic8Ball.askQuestion = function(question) {
	$("#answer").fadeIn(2000);

	var randomNumber= Math.random();
	var randomNumberFromList= randomNumber * this.answersList.length;
	var randomIndex = Math.floor(randomNumberFromList);
	var answer = this.answersList[randomIndex];

	$("#answer").text( answer );
	$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png");

	console.log(question);
	console.log(answer);
};

var onClick = function() {

	$("#answer").hide();
	$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png");
    $("#8ball").effect( "shake" );

    setTimeout(
       function() {
           var question = prompt("ASK ANY YES/ NO QUESTION. What do you want to know?");
			magic8Ball.askQuestion(question);
       }, 500);
	
};

$('#questionButton').click(onClick);


});
