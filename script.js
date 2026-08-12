const menuBtn=document.getElementById("menuBtn");
const navLinks=document.getElementById("navLinks");
const scrollBtn=document.getElementById("scrollBtn");
const contactForm=document.getElementById("contactForm");
const formMessage=document.getElementById("formMessage");
menuBtn.addEventListener("click",()=>{
navLinks.classList.toggle("active");
});
document.querySelectorAll(".nav-links a").forEach(link=>{
link.addEventListener("click",()=>{
navLinks.classList.remove("active");
});
});
window.addEventListener("scroll",()=>{
if(window.scrollY>300){
scrollBtn.style.display="block";
}else{
scrollBtn.style.display="none";
}
});
scrollBtn.addEventListener("click",()=>{
window.scrollTo({
top:0,
behavior:"smooth"
});
});
contactForm.addEventListener("submit",(event)=>{
event.preventDefault();
const name=document.getElementById("name").value.trim();
const email=document.getElementById("email").value.trim();
const message=document.getElementById("message").value.trim();
if(name===""||email===""||message===""){
formMessage.textContent="Please fill in all fields.";
return;
}
const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if(!emailPattern.test(email)){
formMessage.textContent="Please enter a valid email address.";
return;
}
formMessage.textContent="Thank you! Your message has been validated successfully.";
contactForm.reset();
});
document.getElementById("year").textContent =
new Date().getFullYear();
