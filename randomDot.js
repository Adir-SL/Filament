function randomTwice(){
    clearDots();
    setTimeout(function() {jiggleBoard();}, 500);
    setTimeout(function() {randomDot();}, 1500);
    setTimeout(function() {randomDot();}, 2000);
}

function jiggleBoard(){}

function randomDot(){
    window.R = Math.floor(Math.random() * 64);
    console.log(window.R);
    document.getElementsByClassName("gridDot")[window.R].classList.add("selected");
}

function clearDots(){
    var x = document.getElementsByClassName("gridDot");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].classList.remove("selected");
    }
}