const canvas = document.querySelector('#canvas');
const context = canvas.getContext('2d');
const penColor=document.querySelector('input[name="penColor"]');
const penSize=document.querySelector('input[name="penSize"]');
const save=document.querySelector('#save');
const reset=document.querySelector('#reset');
context.strokeStyle='#000000';
context.lineJoin='round';
context.lineCap='round';
context.lineWidth = 5;
let pen ={
    x:0,
    y:0,
    down:false
};
save.addEventListener('click',()=>{
    let image = canvas.toDataURL();
    let a = document.createElement('a');
    a.setAttribute('download','DrawIt.png');
    a.setAttribute('href',canvas.toDataURL('image/png').replace('image/png','image/octet-stream'));
    a.style.display='none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    document.getElementById('myImg').src=image;
});
canvas.addEventListener('mousedown',(e)=>{
    pen.down=true;
    [pen.x,pen.y]=[e.offsetX,e.offsetY];
});
canvas.addEventListener('mousemove',(e)=>{
    if(!pen.down) return;
    context.lineWidth= penSize.value;
    context.strokeStyle = penColor.value;
    context.beginPath();
    context.moveTo(pen.x,pen.y);
    context.lineTo(e.offsetX,e.offsetY);
    context.stroke();
    [pen.x,pen.y]=[e.offsetX,e.offsetY];
});
canvas.addEventListener('mouseup',()=>{
    pen.down=false;
});
canvas.addEventListener('mouseout',()=>{
    pen.down=false;
});
reset.addEventListener('click',()=>{
    context.clearRect(0, 0, canvas.width, canvas.height);
});
const state = {
    mousedown: false
  };

  function getMosuePositionOnCanvas(event) {
    const clientX = event.clientX || event.touches[0].clientX;
    const clientY = event.clientY || event.touches[0].clientY;
    const { offsetLeft, offsetTop } = event.target;
    const canvasX = clientX - offsetLeft;
    const canvasY = clientY - offsetTop;
  
    return { x: canvasX, y: canvasY };
  }
canvas.addEventListener('touchstart',(e)=>{
    e.preventDefault();
    const mousePos = getMosuePositionOnCanvas(e);
    context.beginPath();
    context.moveTo(mousePos.x, mousePos.y);
    context.lineWidth = 5;
    context.strokeStyle = '#000000';
    context.shadowColor = null;
    context.shadowBlur = null;
    context.fill();
    state.mousedown = true;
    console.log("Start");
});
canvas.addEventListener('touchmove',(e)=>{
    e.preventDefault();
  if (state.mousedown) {
    const mousePos = getMosuePositionOnCanvas(e);
    context.lineTo(mousePos.x, mousePos.y);
    context.stroke();
  }
    console.log("moving");
});
canvas.addEventListener('touchend',(e)=>{
    e.preventDefault();
  if (state.mousedown) {
    context.stroke();
  }
  state.mousedown = false;
    console.log("End");
});