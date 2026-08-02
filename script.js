document.getElementById("welcomeBtn").addEventListener("click", function () {
    alert("WELCOME TO MY PORTFOLIO!");
});
document.getElementById("changeColor").addEventListener("click", function () {
    document.body.style.backgroundColor = "#e8f4ff";
});
document.getElementById("changeText").addEventListener("click", function () {
    document.getElementById("heading").innerHTML = "WELCOME TO MY PORTFOLIO";
});
let topButton = document.getElementById("topBtn");
window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
};
topButton.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});