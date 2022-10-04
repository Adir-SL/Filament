function lampDrag(e){
    // alert(e.target);
    window.tempLamp = e.target;
    window.tempPageX = e.pageX;
    window.tempPageY = e.pageY;
    // addEventListener('mousemove', dragToMouse(e));
}

function dragMove(e){
    e.target.style.transform = "translate("+e.pageX - window.tempPageX + "px"+","+e.pageY - window.tempPageY + "px)";
}

function lampDrop(e){
    // alert(e.target);
}
