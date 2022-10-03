function lampDrag(e){
    // alert(e.target);
    window.tempLamp = e.target;
    window.tempPageX = e.pageX;
    window.tempPageY = e.pageY;
    // addEventListener('mousemove', dragToMouse(e));
}

function dragToMouse(e){
    e.target.offsetLeft = e.pageX + "px";
    e.target.offsetTop = e.pageY + "px";
}

function lampDrop(e){
    // alert(e.target);
}
