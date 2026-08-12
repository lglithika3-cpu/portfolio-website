<<<<<<< HEAD
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {
event.preventDefault();

const name = document.getElementById("name").value;

alert(
    "Thank you, " +
    name +
    "! Your message has been submitted."
);

contactForm.reset();

});
const scrollBtn = document.getElementById("scrollBtn");

window.addEventListener("scroll", function() {

if (window.scrollY > 300) {

    scrollBtn.style.display = "block";

} else {

    scrollBtn.style.display = "none";

}

});

scrollBtn.addEventListener("click", function() {
window.scrollTo({
    top: 0,
    behavior: "smooth"
});

});
=======
document.getElementById("scrollBtn").addEventListener("click", function () {
    document.getElementById("projects").scrollIntoView({
        behavior: "smooth"
    });
});
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const closeBtn = document.getElementById("close");
const buttons = document.querySelectorAll(".details-btn");
buttons.forEach(function(button){
    button.addEventListener("click", function(){
        modal.style.display = "block";
        modalTitle.innerText = this.dataset.title;
        modalDescription.innerText = this.dataset.description;
    });
});
closeBtn.onclick = function(){
    modal.style.display = "none";
}
window.onclick = function(event){
    if(event.target == modal){
        modal.style.display = "none";
    }
}
>>>>>>> e3a8e4a2bf47888d949602bbffc6e11ce54b98fc
