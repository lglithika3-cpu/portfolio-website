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