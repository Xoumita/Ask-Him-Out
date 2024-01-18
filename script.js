let yesBtn = document.querySelector("#yes")
let NoBtn = document.querySelector("#no")
let btnDiv = document.querySelector(".btn")
let defaultImg = document.querySelector("#default")

yesBtn.addEventListener("click", function(){
    NoBtn.style.display = "none";
    yesBtn.style.background = "transparent";
    yesBtn.style.color = "black"
    yesBtn.style.left = "43%"
    yesBtn.innerHTML = "Let's Go!"
    defaultImg.style.display = "none"

})

NoBtn.addEventListener("mouseover", function(){
    NoBtn.style.position = "absolute"
    moveBtnRandomly()
})
NoBtn.addEventListener("click", function(){
    NoBtn.style.position = "absolute"
    moveBtnRandomly()
})
function moveBtnRandomly() {
    var windowWidth = window.innerWidth - NoBtn.offsetWidth;
    var windowHeight = window.innerHeight - NoBtn.offsetHeight;

    var randomX = Math.floor(Math.random() * windowWidth);
    var randomY = Math.floor(Math.random() * windowHeight);

    NoBtn.style.left = `${randomX}` + "px";
    NoBtn.style.top = `${randomY}` + "px";
}
