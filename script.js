const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector("small");
    small.innerText = message;
    small.style.visibility = "visible";
}
 
function showSuccess(input){
    const formControl =input.parentElement;
    formControl.className = "form-control success";
}

function checkUsername(){
    if(username.value === ""){
        showError(username,"Username is required");
    }else{
        showSuccess(username,"your form is filled ");
    }
}
function checkEmail(){
    if(email.value === ""){
        showError(email,"Email is Required")
    }
    else{
        showSuccess(email);
    }
}
function checkPassword(){
    if(password.value === ""){
        showError(password,"Password is required");
    }else{
        showSuccess(password);
    }
}
function checkConfirmPassword(){
    if(password2.value === ""){
        showError(password2,"please confirm is password");
    }else{
        showSuccess(password2);
    }
}
function checkPasswordMatch(){
    if(password.value !== password2.value){
        showError(password2,"password do not match please check it again");
    }
}

form.addEventListener("submit",function(e){
    e.preventDefault(); //when we click on submit , it just submits , but we dont want to that, we want to hold for a while
    checkUsername();
    checkEmail();
    checkPassword();
    checkConfirmPassword();
    checkPasswordMatch();
    

});

