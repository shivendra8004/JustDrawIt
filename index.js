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
    console.log("Saved");
});
canvas.addEventListener('mousedown',(e)=>{
    pen.down=true;
    [pen.x,pen.y]=[e.offsetX,e.offsetY];
    console.log(pen);
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
