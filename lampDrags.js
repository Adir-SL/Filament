function lampDrag(e){
    // alert(e.target);
    window.tempLamp = e.target.parentElement;
    window.tempPageX = e.pageX;
    window.tempPageY = e.pageY;
    // addEventListener('mousemove', dragToMouse(e));
}

function dragMove(e){
    if(window.tempLamp !== undefined){
        window.moveByX = e.pageX - window.tempPageX + "px";
        window.moveByY = e.pageY - window.tempPageY + "px";
        window.tempLamp.style.transform = "translate("+e.pageX - window.tempPageX + "px,"+e.pageY - window.tempPageY + "px)";
        console.log(window.moveByX + "," + window.moveByY);
    }
}

function lampDrop(e){
    // alert(e.target);
}
