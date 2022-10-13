const canvas = document.querySelector('#canvas');
const context = canvas.getContext('2d');
const penColor=document.querySelector('input[name="penColor"]');
const penSize=document.querySelector('input[name="penSize"]');
const save=document.querySelector('#save');

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
    // console.log("Saved");
});
canvas.addEventListener('mousedown',()=>{
    pen.down=false;
    // console.log("MouseDown");
});
canvas.addEventListener('mousemove',()=>{
    // console.log("MouseMove");
});
canvas.addEventListener('mouseup',()=>{
    // console.log("MouseUp");
});
canvas.addEventListener('mouseout',()=>{
    // console.log("MouseOut");
});
