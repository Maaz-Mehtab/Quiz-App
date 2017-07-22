var fnam = document.getElementById('fname');
var lnam = document.getElementById('lname');
var mail = document.getElementById('email');
var pass = document.getElementById('password');
var authMessage = document.getElementById('authMessage');

function signup() {
    if (fname.value === "") {
        document.getElementById('fn').innerHTML = "please Enter your Name";
        document.getElementById('fname').style.border = '2px solid red';
    } else if (lname.value === "") {
        document.getElementById('ln').innerHTML = "please Enter your Last Name";
        document.getElementById('lname').style.border = '2px solid red';


    } else if (email.value === "") {
        document.getElementById('en').innerHTML = "please Enter Email";
        document.getElementById('email').style.border = '2px solid red';
    } else if (password.value === "") {
        document.getElementById('pn').innerHTML = "please Enter your Password";
        document.getElementById('password').style.border = '2px solid red';
    } else {
        var users = localStorage.getItem('users');
        var userExist = false;

        if (users === null) {
            users = [];

        } else {
            users = JSON.parse(users);
        }
        var user = {
            fnam: fname.value,
            lnam: lname.value,
            mail: email.value,
            pass: password.value
        }
        for (var i = 0; i < users.length; i++) {
            if (users[i].mail === email.value) {

                userExist = true;
            }
        }


        if (userExist === true) {
            authMessage.innerHTML = "user Already Exists!";
            authMessage.style.color = "red";
        } else {
            users.push(user);
            users = JSON.stringify(users);
            localStorage.setItem('users', users);
            // fname.value = '';
            lname.value = '';
            email.value = '';
            password.value = '';

            authMessage.innerHTML = "Successfully Signup"
            location.href = "quiz.html";

            var us = user.fnam;
            localStorage.setItem('fname', us);
            console.log(us);




        }

    }
}


var lmail = document.getElementById('lemail');
var lpass = document.getElementById('lpassword');
var lauthMessage = document.getElementById('lauthMessage');

function login() {
    if (lemail.value === "") {
        document.getElementById('ien').innerHTML = "please Enter Email";
        document.getElementById('lemail').style.border = '2px solid red';
    } else if (lpassword.value === "") {
        document.getElementById('ipn').innerHTML = "please Enter your Password";
        document.getElementById('lpassword').style.border = '2px solid red';
    } else {
        var users = localStorage.getItem('users');
        if (users === null) {
            users = [];
        } else {
            users = JSON.parse(users);
        }
        var authantication = false;

        for (var i = 0; i < users.length; i++) {
            if (users[i].mail === lemail.value && users[i].pass === lpassword.value) {
                var us = users[i].fnam;
                localStorage.setItem('fname', us);
                console.log(us);
                authantication = true
            }

        }
        if (authantication == false) {
            lauthMessage.innerHTML = "Login Faild"
        } else {
            // lauthMessage.innerHTML = "Login success";
            location.href = "quiz.html";
            lemail.value = '';
            lpassword.value = '';

        }

    }
}