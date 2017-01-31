var quiz = [

			{
				question: "Who was Ferris Bueller's girlfriend?",
				choices: ["Brittany", "Sloane", "Liz", "Jenny"],
				correctAnswer: 1
			},

			{
				question: "John McClane was the lead character in what movie?",
				choices: ["Lethal Weapon", "Tin Man", "Die Hard", "Witness"],
				correctAnswer: 2


			},
			{   
				question: "What is the name of the bully in Back to the Future?",
				choices: ["Biff", "Eddie", "Spike", "Leo"],
				correctAnswer: 0
			},
			{
				question: "Which character brought a flare gun to school in The Breakfast Club?",
				choices: ["Tommy", "Brian", "Adam", "Kenny"],
				correctAnswer: 1
			},
			{
				question: "What film features two brothers named Raymond and Charlie?",
				choices: ["Silverado", "Dead Poets Society", "Night Shift", "Rain Man"],
				correctAnswer: 3
			},
			{
				question: "What is the name of Gary's older brother in Weird Science?",
				choices: ["Paul", "Chet", "Bobby", "Dexter"],
				correctAnswer: 1
			},
			{
				question: "Who is Daniel’s sensei in The Karate Kid?",
				choices: ["Mr. Miyagi", "Doc Brown", "Mr. Foley", "Yoshi"],
				correctAnswer: 0
			},
			{
				question: "What is the name of the computer in the movie War Games?",
				choices: ["Hal", "DJB8", "Joshua", "Norab"],
				correctAnswer: 2
			},
			{
				question: "What two friends travel back in time to complete a school history report?",
				choices: ["Wyatt and Gary", "Jack and Reggie", "Romy and Michelle", "Bill and Ted"],
				correctAnswer: 3
			},
			{
				question: "Her parents forgot her birthday in Sixteen Candles, what is her name?",
				choices: ["Claire", "Molly", "Samantha", "Andie"],
				correctAnswer: 2
			}


];
		

		
         
       $(document).ready(function() {

				$(".start_btn").click(function() {



				$(".box").addClass("hidden");

				$(".question").html(quiz[0].question);
				var html = "";

				for (var i = 0; i < quiz[0].choices.length; i++) {
 
					html += "<li> <input type='radio'>"  + quiz[0].choices[i] + "</li>";

				}

				$(".choiceList").html(html);

				$(".quizContainer").removeClass("hidden");

		});	

			$(".checkButton").click(function() {

				 value = $("input[type='radio']:checked").val();

				if (value == undefined) {
                $(document).find(".quizMessage").text("Please select an answer");
                $(document).find(".quizMessage").show();
           }


           	var currentQuestion = 0;
         	var usersAnswer = 1;
         	var score = 0;
         
         function checkAnswer(currentQuestion) {
           
            if (userAnswer == quiz[currentQuestion].correctAnswer) {
              
              	console.log("quiz[currentQuestion].correctAnswer");
              		
            } else {

            	console.log(correctAnswer + " is the right answer.")
            }

            checkAnswer(currentQuestion);
           currentQuestion++;
         }
              
});
});

// I have created the if statement (the else is more of a placeholder at this point of what i want it to say).
// I think the reason that userAnswer can have any property (ie any item or name in the string) is it doesnt matter
// because we are giving what the answer should be: to me correct answer would be quiz[currentQuestion].correctAnswer.
// But it doesn't run-two lines of code. Also i ran this console.log(quiz[currentQuestion].correctAnswer) in repl and it works.
// so i know i'm right there but i missing something....



























