const loginForm = document.getElementById("loginform");
const loginButton = document.getElementById("submitdetails");
const loginErrorMsg = document.getElementById("errormessage");
const loginwhat = document.getElementById("what");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "rohit" && password === "web_dev") {

      loginwhat.style.opacity = 1;
        
        
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})