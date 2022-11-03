const buttons=document.querySelectorAll('button');
const as=document.querySelectorAll('a');

function makeRandomColor(){
    const r=Math.floor(Math.random()*255);
    const g=Math.floor(Math.random()*255);
    const b=Math.floor(Math.random()*255);
    return (`rgb(${r},${g},${b})`);
}

for(let button of buttons){
    button.addEventListener('click',colorize);
}
for(let a of as){
    a.addEventListener('click',colorize);
}
function colorize(){
    this.style.backgroundColor=makeRandomColor();
    this.style.color=makeRandomColor();
}