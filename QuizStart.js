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
        "question": "HTML is what type of language ? ",
        "op1": "Scripting Language",
        "op2": "Markup Language",
        "op3": "Programming Language",
        "op4": "Network Protocol",
        'correct': '1'
    },

    {
        'question': 'HTML uses',
        'op1': 'User defined tags',
        'op2': 'jPre-specified tags',
        'op3': 'Fixed tags defined by the language',
        'op4': 'Tags only for linking',
        'correct': '2'
    },

    {
        'question': 'HTML stands for',
        'op1': 'Hyper Text Markup Language',
        'op2': 'Hyper Text Many Language',
        'op3': 'High Text Markup Language',
        'op4': 'None',
        'correct': '0'
    },

    {
        'question': 'Fundamental HTML Block is known as',
        'op1': 'HTML Body',
        'op2': 'HTML Tag',
        'op3': 'HTML Attribute',
        'op4': 'HTML Element',
        'correct': '1'
    },

    {
        'question': 'Apart from b tag, what other tag makes text bold ? ',
        'op1': 'fat',
        'op2': 'strong',
        'op3': 'black',
        'op4': 'emp',
        'correct': '1'
    },



    {
        'question': 'What should be the first tag in any HTML document? ',
        'op1': 'head',
        'op2': 'title ',
        'op3': 'document',
        'op4': 'html',
        'correct': '3'
    },

    {
        'question': 'How can you make a bulleted list with numbers? ',
        'op1': 'dl',
        'op2': 'list',
        'op3': 'ul',
        'op4': 'ol',
        'correct': '3'
    },

    {
        'question': 'What tag is used to display a picture in a HTML page? ',
        'op1': 'img',
        'op2': 'src',
        'op3': 'picture',
        'op4': 'image',
        'correct': '0'
    },

    {
        'question': 'HTML web pages can be read and rendered b',
        'op1': 'Compiler',
        'op2': 'Web Browser',
        'op3': 'Interpreter',
        'op4': 'Server',
        'correct': '1'
    },

    {
        'question': 'Tags and test that are not directly displayed on the page are written in _____ section. ',
        'op1': 'head',
        'op2': 'body',
        'op3': 'html',
        'op4': 'title',
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
        // alert("Quiz Finish");

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