var isChecked;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateEmail(email) {
    console.log(emailRegex.test(email));
    return emailRegex.test(email);
  }
  
// functions 
function showErrorMessage(className)
{
    document.querySelector(`.${className}`).style.display = "block" 
}
function hideErrorMessage(className){
    document.querySelector(`.${className}`).style.display = "none" 
}

function validateForm(e){
    if(isChecked){
        console.log('checked');
            if (document.querySelector('#firstname').value.length == 0) {
            showErrorMessage('firstname_danger');
            e.preventDefault();
            }else{
                hideErrorMessage('firstname_danger');
            }
           if(document.querySelector('#email').value.length == 0){
            showErrorMessage('email_danger');
            e.preventDefault();
           }else{
            hideErrorMessage('email_danger');
           }
           if(document.querySelector('#business').value.length == 0){
            showErrorMessage('business_danger');
            e.preventDefault();
           }else{
            hideErrorMessage('business_danger');
           }
           if(document.querySelector('#phone').value.length == 0){
            showErrorMessage('phone_danger');
            e.preventDefault();
           }else{
            hideErrorMessage('phone_danger');
           }
           if(document.querySelector('#message').value.length == 0 || document.querySelector('#message').value.length >= 40 && document.querySelector('#message').value.length <= 200){
            showErrorMessage('message_danger');
            e.preventDefault();
           }else{
            hideErrorMessage('message_danger');
           }
           console.log("form submitted");

    }else{
        console.log("not checked");
        checkTerms();
        firstnameValidate();
        emailValidate();
        businessValidate();
        phoneValidate();
        messageValidate();
    }
}

//form validations

var firstname = document.querySelector('#firstname').value.length;
var email = document.querySelector('#email').value.length;
var business = document.querySelector('#business').value.length;
var phone = document.querySelector('#phone').value.length;
var message = document.querySelector('#message').value.length;
let checkbox = document.querySelector('#checkbox').checked;
var submitButton = document.querySelector('#submitButton');

let checkBoxEvent = document.querySelector('#checkbox');
checkBoxEvent.addEventListener('click',(e)=>{
    isChecked = document.querySelector('#checkbox').checked;
    console.log(isChecked);
})
submitButton.addEventListener('click',(e)=>{
    validateForm(e);
})

function checkTerms(){
   if(isChecked){
    document.querySelector('.terms').style.color = "black" 
   }else{
        document.querySelector('.terms').style.color = "red" 
   }
}

function firstnameValidate(){
    if (document.querySelector('#firstname').value.length == 0) {
        showErrorMessage('firstname_danger');
        }else{
            hideErrorMessage('firstname_danger');
        }
}
function emailValidate(){
    var emails = document.querySelector('#email').value;
    if(!validateEmail(emails)){
        showErrorMessage('email_danger');
        return;
    }
    if(document.querySelector('#email').value.length == 0){
        showErrorMessage('email_danger');
       }else{
        hideErrorMessage('email_danger');
       }
}

function businessValidate(){
    if(document.querySelector('#business').value.length == 0){
        showErrorMessage('business_danger');
       }else{
        hideErrorMessage('business_danger');
       }
}
function phoneValidate(){
    let phoneLength = document.querySelector('#phone').value.length;
    if(phoneLength <= 10){
        return showErrorMessage('phone_danger');
    }
    if(document.querySelector('#phone').value.length == 0){
        showErrorMessage('phone_danger');
       }else{
        hideErrorMessage('phone_danger');
       }
}
function messageValidate() {
    const messageLength = document.querySelector("#message").value.length;

    if (messageLength < 40 || messageLength > 200) {
        showErrorMessage('message_danger');
    } else {
        hideErrorMessage('message_danger');
    }
}





//burger menu

const nav = document.querySelector('nav');
const mobileMenu = document.querySelector('.mobileMenu');
mobileMenu.addEventListener('click',()=>{
    if(document.querySelector('nav').classList.contains('hidden')){
        document.querySelector('nav').classList.remove('hidden', 'slide-bottom')
        document.querySelector('nav').classList.add('slide-bottom')
        document.querySelector('.burger-button').innerText = "X";
    }else{
        document.querySelector('nav').classList.add('hidden')
        document.querySelector('nav').classList.remove('slide-bottom');
        document.querySelector('.burger-button').innerText = "=";
    }
})