function randomTwice(){
    clearDots();
    randomDot();
    randomDot();
}

function randomDot(){
    window.R = Math.floor(Math.random() * 64);
    console.log(window.R);
    document.getElementsByClassName("gridDot")[window.R].style.backgroundColor = "white";
}

function clearDots(){
    var x = document.getElementsByClassName("gridDot");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.backgroundColor = "transparent";
    }
}