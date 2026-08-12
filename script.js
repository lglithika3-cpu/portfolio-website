const scrollBtn=document.getElementById("scrollBtn");
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
document.querySelectorAll('a[href^="#"]').forEach(link=>{
link.addEventListener("click",event=>{
const target=document.querySelector(link.getAttribute("href"));
if(target){
event.preventDefault();
target.scrollIntoView({
behavior:"smooth"
});
}
});
});
const cards=document.querySelectorAll(".skill-card,.project-card,.education-card");
const observer=new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";
}
});
},{threshold:0.15});
cards.forEach(card=>{
card.style.opacity="0";
card.style.transform="translateY(40px)";
card.style.transition="opacity .7s ease,transform .7s ease";
observer.observe(card);
});
const contactForm=document.getElementById("contactForm");
const formMessage=document.getElementById("formMessage");
contactForm.addEventListener("submit",event=>{
event.preventDefault();
formMessage.textContent="Thank you! Your message has been submitted successfully.";
formMessage.style.color="#910b5b";
contactForm.reset();
});