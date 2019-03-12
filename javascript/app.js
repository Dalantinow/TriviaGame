var theQuestions = [
    {
        numberone: "What is Spider-man's real name?",
        answers: {
            one: "Peter Parker",
            two: "John Smith",
            three: "Harry Osbourne",
            four: "Peter Porker"
        },
        correct: "Peter Parker"
    },
    {
        numbertwo: "What planet is Superman from?",
        answers: {
            one: "Mars",
            two: "Krypton",
            three: "Earth",
            four: "Pluto",
        },
        correct: "Krypton"
    },
    {
        numberthree: "What metal covers Wolverine's skeleton?",
        answers: {
            one: "Vibranium",
            two: "steel",
            three: "bronze",
            four: "Adamantium",
        },
        correct: "Adamantium",
    },
    {
        numberfour: "What city does Batman brood in?",
        answers: {
            one: "Gotham City",
            two: "Metropolis",
            three: "Philadelphia",
            four: "Batmantown",
        },
        correct: "Gotham City",
    },
]

function printQuestions() {
    gameStuff = "<p>" + theQuestions[0].numberone + "</p>" + "<form id='sup'><input type='radio' name='jawn' value='Peter Parker'>" + theQuestions[0].answers.one + "<input type='radio' name='jawn' value='JS'>" + theQuestions[0].answers.two + "<input type='radio' name='jawn' value='no'>" + theQuestions[0].answers.three + "<input type='radio' name='jawn' value='no'>" + theQuestions[0].answers.four + "</form>" +
        "<p>" + theQuestions[1].numbertwo + "</p>" + "<form><input type='radio' name='jawn' value='no'>" + theQuestions[1].answers.one + "<input type='radio' name='jawn' value='Krypton'>" + theQuestions[1].answers.two + "<input type='radio' name='jawn' value='no'>" + theQuestions[1].answers.three + "<input type='radio' name='jawn' value='no'>" + theQuestions[1].answers.four + "</form>" +
        "<p>" + theQuestions[2].numberthree + "</p>" + "<form><input type='radio' name='jawn' value='no'>" + theQuestions[2].answers.one + "<input type='radio' name='jawn' value='no'>" + theQuestions[2].answers.two + "<input type='radio' name='jawn' value='no'>" + theQuestions[2].answers.three + "<input type='radio' name='jawn' value='Adamantium'>" + theQuestions[2].answers.four + "</form>" +
        "<p>" + theQuestions[3].numberfour + "</p>" + "<form><input type='radio' name='jawn' value='Gotham City'>" + theQuestions[3].answers.one + "<input type='radio' name='jawn' value='no'>" + theQuestions[3].answers.two + "<input type='radio' name='jawn' value='no'>" + theQuestions[3].answers.three + "<input type='radio' name='jawn' value='no'>" + theQuestions[3].answers.four + "</form>";
    $("#quiz").html(gameStuff);

}
var wrongAnswers = 0;
var rightAnswers = 0;
var counter = 30;
var intervalId;

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000)
}
function stop() {
    clearInterval(intervalId);
    $("#quiz").remove();
    $(".clock").remove();
}
function resultGuy() {
    for (var i = 0; i < theQuestions.length; i++) {
        var answer;
        // I can't get answer to equal the checked radio button
        if (answer === theQuestions[i].correct) {
            rightAnswers++;
        }
        else if (answer !== theQuestions[i].correct) {
            wrongAnswers++;
        }
    }
    $("#total").html("<p>Correct Answers: " + rightAnswers + "</p>" + "<p>Incorrect Answers: " + wrongAnswers + "</p>");

}

function decrement() {
    counter--;
    $(".clock").html("<p>Time Left: " + counter + "</p>");

    if (counter === 0) {
        stop();
        resultGuy();
    }


}


$("#start").on("click", function () {
    $("#start").remove();
    printQuestions();
    run();

})

