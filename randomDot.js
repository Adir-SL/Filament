function randomTwice(){
    clearDots();
    jiggleBoard();
    setTimeout(function() {randomDot();}, 300);
    setTimeout(function() {randomDot();}, 400);
    setTimeout(function() {window.R = undefined;}, 500);
}

function jiggleBoard(){
    document.getElementById("board").classList.add("jiggle");
    setTimeout(function() {document.getElementById("board").classList.remove("jiggle");}, 500);
}

function randomDot(){
    if(window.R !== undefined){
        window.PR = window.R;
    }
    window.R = Math.floor(Math.random() * 64);
    if(window.R == window.PR || window.R == window.PR-1 || window.R == window.PR+1 || window.R == window.PR-8 || window.R == window.PR+8){
        window.R = Math.floor(Math.random() * 64);
    }
    // console.log(window.R);
    document.getElementsByClassName("gridDot")[window.R].classList.add("selected");
    window.R = undefined;
    window.PR = undefined;
}

function clearDots(){
    var x = document.getElementsByClassName("gridDot");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].classList.remove("selected");
    }
}