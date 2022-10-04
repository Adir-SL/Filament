function lampDrag(e){
    // alert(e.target);
    window.tempLamp = e.target;
    window.tempPageX = e.pageX;
    window.tempPageY = e.pageY;
    // addEventListener('mousemove', dragToMouse(e));
}

function dragMove(e){
    e.target.style.top = e.pageX - window.tempPageX + "px";
    e.target.offsetTop = e.pageY + window.tempPageY + "px";
}

function lampDrop(e){
    // alert(e.target);
}
