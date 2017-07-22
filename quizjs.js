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
        "question": " &lt;script type=text/javascript> x=4+4; <br>document.write(x);<br> Output------? ",
        "op1": "44",
        "op2": "4",
        "op3": "8",
        "op4": "Error output",
        'correct': '0'
    },

    {
        'question': 'Scripting language are ?',
        'op1': 'Low Level Programming language',
        'op2': 'Assembly Level programming language',
        'op3': 'Machine level programming language',
        'op4': 'High Level Programming language',
        'correct': '3'
    },

    {
        'question': '-------keyword is used to declare variables in javascript.',
        'op1': 'String',
        'op2': 'Dim',
        'op3': 'Var',
        'op4': 'None',
        'correct': '2'
    },
    {
        'question': 'What is mean by "this" keyword in javascript?',
        'op1': 'It refers current object',
        'op2': 'It referes previous object',
        'op3': 'It is variable which contains value',
        'op4': 'None of the above',
        'correct': '0'
    },
    {
        'question': 'Math. round(-20.51)=?',
        'op1': '20',
        'op2': '-21',
        'op3': '19',
        'op4': 'None',
        'correct': '1'
    },
    {
        'question': 'Choose the server-side JavaScript object:?',
        'op1': 'FileUpLoad',
        'op2': 'Function',
        'op3': 'File',
        'op4': 'Date',
        'correct': '2'
    },
    {
        'question': 'In Javascript, Which of the following method is used to evaluate the regular expression?',
        'op1': 'eval(2*(3+5))',
        'op2': 'evaluate(2*(3+5))',
        'op3': 'evalu(2*(3+5))',
        'op4': 'None of the above',
        'correct': '0'
    },
    {
        'question': " &lt;script type='text/javascript' language='javascript'><br>qpt=((45%2)==0)? 'hello' : 'bye';<br>document.write(qpt); &lt;/script>",
        'op1': 'hello',
        'op2': 'bye',
        'op3': 'Error in string handling',
        'op4': 'None of the above',
        'correct': '1'
    },
    {
        'question': 'parseFloat(“FF2”)=?',
        'op1': '152',
        'op2': 'FF2',
        'op3': 'NaN',
        'op4': 'None',
        'correct': '2'
    },
    {
        'question': 'eval((20*4)=?',
        'op1': 'Nan',
        'op2': '204',
        'op3': '24',
        'op4': '80',
        'correct': '3'
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
        alert("Quiz Finish");

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