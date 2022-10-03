function lampDrag(e){
    // alert(e.target);
    window.tempLamp = e.target;
    this.addEventListener('mousemove', dragToMouse(e));
}

function dragToMouse(e){
    window.tempLamp.x = e.pageX;
    window.tempLamp.y = e.pageY;
}

function lampDrop(e){
    alert(e.target);
}