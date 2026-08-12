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
