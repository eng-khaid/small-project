// LOGIN SYSTEM

const form = document.getElementById("loginForm");

if(form){

form.addEventListener("submit", function(e){

    e.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if(username === "khalid" && password === "1234"){

        window.location.href = "dashboard.html";

    } else {

        document.getElementById("error").innerText =
        "Wrong username or password";

    }

});
}


// CARD INTERACTION

function showMessage(message){

    alert("You clicked: " + message);

}


// ALERT INTERACTION

function changeColor(element){

    element.style.opacity = "0.7";

}