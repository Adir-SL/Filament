function lampDrag(e){
    // alert(e.target);
    window.tempLamp = e.target;
    addEventListener('mousemove', dragToMouse(e));
}

function dragToMouse(e){
    window.tempLamp.offsetLeft = e.pageX + "px";
    window.tempLamp.offsetTop = e.pageY + "px";
}

function lampDrop(e){
    alert(e.target);
}
