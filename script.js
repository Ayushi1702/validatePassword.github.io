document.getElementById("login").addEventListener("submit", function (event) {
    event.preventDefault();
    var passwordElement = document.getElementById("password").value;
    var emailElement = document.getElementById("email").value;
    var validationMesaage = document.getElementById("validationMess")


    if ((passwordElement.length > 8) && (emailElement.includes("@"))) {
        validationMesaage.innerText = "Valid email and password"
        validationMesaage.style.color = "green";
        validationMesaage.style.fontSize = "33px";
    }
    else {
        validationMesaage.innerText = "Invalid email and password"
        validationMesaage.style.fontSize = "33px";
        validationMesaage.style.color = "red"
    }
});
