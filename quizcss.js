//---------------Get elements
var queno = document.getElementById('queno');
var paraQues = document.getElementById('question');
var opt1 = document.getElementById('op1');
var opt2 = document.getElementById('op2');
var opt3 = document.getElementById('op3');
var opt4 = document.getElementById('op4');
var sp1 = document.getElementById('s1');
var sp2 = document.getElementById('s2');
var sp3 = document.getElementById('s3');
var sp4 = document.getElementById('s4');
quiz.setAttribute('style', 'visibility:hidden');
var sco = document.getElementById('scoreDiv');
sco.setAttribute('style', 'visibility:hidden');
var result = document.getElementById('result');

//-------------------Declare Obj

var fn = document.getElementById('name');
fna = localStorage.getItem('fname');
fn.innerHTML = 'Hi,' + fna;
var quizObj = [{
        "question": "CSS stands for ",
        "op1": "Cascade Style Sheet",
        "op2": "Cascade Simple Sheet",
        "op3": "Camel Style Sheet",
        "op4": "None",
        'correct': '0'
    },

    {
        'question': 'Which prefix do you need to get CSS3 properties to work on older Mozilla Firefox browsers? ',
        'op1': '-webkit-',
        'op2': '-moz-',
        'op3': '-o-',
        'op4': '-gecko-',
        'correct': '1'
    },

    {
        'question': 'What does the a stand for in RGBa',
        'op1': 'about',
        'op2': 'Apple',
        'op3': 'alpha',
        'op4': ' aqua',
        'correct': '2'
    },

    {
        'question': 'How do four values work on border-radius',
        'op1': 'top, bottom, left, right ',
        'op2': 'up, down, front, behind ',
        'op3': 'bottom-left, bottom-right, top-',
        'op4': '  top-left, top-right, bottom-righ',
        'correct': '3'
    },

    {
        'question': 'How can you created rounded corners using CSS3?',
        'op1': 'border[round]: 30px;	',
        'op2': ' border-radius: 30px;	',
        'op3': 'alpha-effect: round-corner;	',
        'op4': ' corner-effect: round;	',
        'correct': '1'
    },

    {
        'question': 'How do you add shadow to elements in CSS3?',
        'op1': 'shadow-color: grey;	',
        'op2': 'alpha-effect[shadow]: 10px 10px 5px grey;	',
        'op3': 'shadow-right: 10px shadow-bottom: 10px; shadow-color: grey;	',
        'op4': '  box-shadow: 10px 10px 5px grey;',
        'correct': '3'
    },

    {
        'question': 'How to add text shadow using CSS3?',
        'op1': 'font: shadowed 5px 5px 5px grey;	',
        'op2': ' shadow: text 5px 5px 5px grey;	',
        'op3': 'font-shadow: 5px 5px 5px grey;	',
        'op4': ' text-shadow: 5px 5px 5px grey;	',
        'correct': '3'
    },

    {
        'question': 'What does the a stand for in RGBa',
        'op1': 'text-shadow: 5px 5px 5px grey;	',
        'op2': 'font-shadow: 5px 5px 5px grey;',
        'op3': 'font: shadowed 5px 5px 5px grey;	',
        'op4': 'shadow: text 5px 5px 5px grey;	',
        'correct': '0'
    },

    {
        'question': 'What is the new, easier way to import or modify fonts with CSS3?',
        'op1': ' font-source: url(\’Sansation_Light.eot\’) format(\”opentype\”);	',
        'op2': 'font-family: @import \”Sansation_Light.eot\”;	',
        'op3': '@font-face	',
        'op4': ' all of these',
        'correct': '2'
    },

    {
        'question': 'What is the correct HTML for referring to an external style sheet?	',
        'op1': '&lt;style src="mystyle.css">	',
        'op2': '&lt;link rel="stylesheet" type="text/css" href="mystyle.css">',
        'op3': '&lt;stylesheet>mystyle.css</stylesheet>',
        'op4': ' &lt;cssLink rel = "style.css"',
        'correct': '0'
    },


];

//--------Increment
var correctAns = 0;
var arr = 0;

re();

function re() {
    queno.innerHTML = " Question " + " ' " + (arr + 1) + " ' " + "  of" + "  ' " + quizObj.length + " ' ";
    paraQues.innerHTML = quizObj[0].question;
    sp1.innerHTML = quizObj[0].op1;
    sp2.innerHTML = quizObj[0].op2;
    sp3.innerHTML = quizObj[0].op3;
    sp4.innerHTML = quizObj[0].op4;
}

//-----------Hardcode questions
function next() {


    var getAns = document.querySelector('input[name = "radio"]:checked');
    console.log(getAns);
    if (getAns === null) {
        alert("please select  the answer");
    }


    if (getAns.value == quizObj[arr].correct) {
        correctAns++;
        arr++;
    } else {
        arr++;
    }

    if (arr > quizObj.length - 1) {


        scoring();
        scoreDiv.setAttribute('style', 'visibility:visible');
        quiz.setAttribute('style', 'visibility:hidden');
        startbtn.setAttribute('style', 'visibility:hidden');

    }

    var ele = document.getElementsByName("radio");
    for (var i = 0; i < ele.length; i++)
        ele[i].checked = false;
    console.log('arr' + arr);
    if (quizObj[arr] === undefined) {
        clearInterval(myVar);
        scoring();

    } else {
        queno.innerHTML = " Question " + " ' " + (arr + 1) + " ' " + "  of" + "  ' " + quizObj.length + " ' ";
        paraQues.innerHTML = quizObj[arr].question;
        sp1.innerHTML = quizObj[arr].op1;
        sp2.innerHTML = quizObj[arr].op2;
        sp3.innerHTML = quizObj[arr].op3;
        sp4.innerHTML = quizObj[arr].op4;
    }


}




function scoring() {
    var scores = (correctAns / quizObj.length) * 100;
    scores = Math.round(scores);
    console.log("your total score is " + scores + "%");
    document.getElementById('score').innerHTML = scores + "%";
    document.getElementById('answer').innerHTML = correctAns + " out of " + quizObj.length;

    if (scores > 65) {
        result.innerHTML = "Congradulation you have passed";
        result.style.color = "#004D40";

    } else {
        result.innerHTML = "Sorry you have failed";
        result.style.color = "red";

    }
}
var startbtn = document.getElementById('startButton');
var main = document.getElementById('main');

function startQuiz() {
    myVar = setInterval(myTimer, 1000);
    var min = 1;
    var sec = 60;
    startbtn.setAttribute('style', 'visibility:hidden');
    main.setAttribute('style', 'visibility:hidden');
    quiz.setAttribute('style', 'visibility:visible');
    scoreDiv.setAttribute('style', 'visibility:hidden');


    function myTimer() {
        sec--;
        if (sec == 0) {
            if (min > 0) {
                min--;
                sec = 60;
            } else {
                clearInterval(myVar);
                alert("Time's Up!");
                scoring();
                scoreDiv.setAttribute('style', 'visibility:visible');
                quiz.setAttribute('style', 'visibility:hidden');
                startbtn.setAttribute('style', 'visibility:hidden');

            }
        }

        document.getElementById("timer").innerHTML = "Time Remaining: " + min + ":" + sec;

    }

}