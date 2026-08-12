const contactForm=document.getElementById("contactForm");
const nameInput=document.getElementById("name");
const emailInput=document.getElementById("email");
const subjectInput=document.getElementById("subject");
const messageInput=document.getElementById("message");
const nameError=document.getElementById("nameError");
const emailError=document.getElementById("emailError");
const subjectError=document.getElementById("subjectError");
const messageError=document.getElementById("messageError");
const successMessage=document.getElementById("successMessage");
contactForm.addEventListener("submit",function(event){
event.preventDefault();
nameError.textContent="";
emailError.textContent="";
subjectError.textContent="";
messageError.textContent="";
successMessage.textContent="";
let isValid=true;
const name=nameInput.value.trim();
const email=emailInput.value.trim();
const subject=subjectInput.value.trim();
const message=messageInput.value.trim();
const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if(name===""){nameError.textContent="Please enter your name.";isValid=false}
else if(name.length<3){nameError.textContent="Name must contain at least 3 characters.";isValid=false}
if(email===""){emailError.textContent="Please enter your email.";isValid=false}
else if(!emailPattern.test(email)){emailError.textContent="Please enter a valid email address.";isValid=false}
if(subject===""){subjectError.textContent="Please enter a subject.";isValid=false}
if(message===""){messageError.textContent="Please enter your message.";isValid=false}
else if(message.length<10){messageError.textContent="Message must contain at least 10 characters.";isValid=false}
if(isValid){
successMessage.textContent="Thank you! Your message has been submitted successfully.";
contactForm.reset();
}
});
const scrollBtn=document.getElementById("scrollBtn");
window.addEventListener("scroll",function(){
if(window.scrollY>300){scrollBtn.style.display="block"}
else{scrollBtn.style.display="none"}
});
scrollBtn.addEventListener("click",function(){
window.scrollTo({top:0,behavior:"smooth"});
});