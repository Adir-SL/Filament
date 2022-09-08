function randomDot(){
    window.R = Math.floor(Math.random() * 80);
    document.getElementsByClassName("gridDot")[window.R].style.backgroundColor = "red";
}