const canvas = document.querySelector('#canvas');
const context = canvas.getContext('2d');
const penColor=document.querySelector('input[name="penColor"]');
const penSize=document.querySelector('input[name="penSize"]');
const saver=document.querySelector('#save');

context.strokeStyle='#000000';
context.lineJoin='round';
context.lineCap='round';
context.lineWidth = 5;
let pen ={
    x:0,
    y:0,
    down:false
}