function randomDot(){
    clearDots();
    window.R = Math.floor(Math.random() * 80);
    document.getElementsByClassName("gridDot")[window.R].style.backgroundColor = "red";
}

function clearDots(){
    var x = document.getElementsByClassName("gridDot");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.backgroundColor = "tranparent";
    }
}