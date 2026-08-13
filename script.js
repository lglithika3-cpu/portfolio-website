const topButton=document.getElementById("topButton");
window.addEventListener("scroll",()=>{
if(window.scrollY>300){
topButton.style.display="block";
}else{
topButton.style.display="none";
}
});
topButton.addEventListener("click",()=>{
window.scrollTo({
top:0,
behavior:"smooth"
});
});
const contactForm=document.getElementById("contactForm");
contactForm.addEventListener("submit",(event)=>{
event.preventDefault();
alert("Thank you for contacting me!");
contactForm.reset();
});