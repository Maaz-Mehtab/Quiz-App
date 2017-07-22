var name = document.getElementById('quizName');
var marks = document.getElementById('quizMarks');
var Time = document.getElementById('quizTime');


var fn = document.getElementById('name');
fna = localStorage.getItem('fname');
fn.innerHTML = 'Hi,' + fna;





// function quiz() {
//     var quiz = {
//         name: quizName.value,
//         marks: quizMarks.value,
//         Time: quizTime.value
//     }
//     location.href = "quizstart.html";
//     localStorage.setItem('quiz', JSON.stringify(quiz));
//     console.log(quiz);

//     location.href = "quizstart.html";
// }