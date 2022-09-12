function randomTwice(){
    clearDots();
    jiggleBoard();
    setTimeout(function() {randomDot();}, 300);
    setTimeout(function() {randomDot();}, 400);
}

function jiggleBoard(){
    document.getElementById("board").classList.add("jiggle");
    setTimeout(function() {document.getElementById("board").classList.remove("jiggle");}, 500);

    setTimeout(function() {
    document.getElementById("board").classList.add("jiggle");
    setTimeout(function() {document.getElementById("board").classList.remove("jiggle");}, 500);
    }, 100);
}

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