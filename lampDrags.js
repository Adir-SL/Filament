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
        console.log("translate(" + window.moveByX + "," + window.moveByY + ")");
    }
}

function lampDrop(e){
    window.moveByX = e.pageX - window.tempPageX + "px";
    window.moveByY = e.pageY - window.tempPageY + "px";
    window.tempLamp.style.transform = "translate(" + window.moveByX + "," + window.moveByY + ")";
    window.tempLamp = undefined;
}
