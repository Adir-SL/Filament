function lampDrag(e){
    // alert(e.target);
    window.tempLamp = e.target;
    window.tempPageX = e.pageX;
    window.tempPageY = e.pageY;
    // addEventListener('mousemove', dragToMouse(e));
}

function dragMove(e){
    if(window.tempLamp !== undefined){
        window.moveByX = e.pageX - window.tempPageX + "px";
        window.moveByY = e.pageY - window.tempPageY + "px";
        window.tempLamp.style.transform = "translate(" + window.moveByX + "," + window.moveByY + ")";
        window.tempLamp.style.animationName = "none";
    }
}

function lampDrop(e){
    window.gridDotSize = document.getElementsByClassName("gridDot")[0].offsetWidth;
    window.moveByX = e.pageX - window.tempPageX;
    window.moveByY = e.pageY - window.tempPageY;
    window.moveByX = Math.floor(window.moveByX/window.gridDotSize) * window.gridDotSize;
    window.moveByX = window.moveByX - (window.gridDotSize/2) + "px";
    window.moveByY = Math.floor(window.moveByY/window.gridDotSize) * window.gridDotSize + "px";
    window.tempLamp.style.transform = "translate(" + window.moveByX + "," + window.moveByY + ")";
    console.log("translate(" + window.moveByX + "," + window.moveByY + ")");
    window.tempLamp = undefined;
}
