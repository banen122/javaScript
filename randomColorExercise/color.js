//Text creation
const h2=document.createElement('h2');
h2.innerText='Click Here!';
h2.style.textAlign="center";
document.body.appendChild(h2);


//Button creation
const btn=document.createElement('button');
btn.innerText='Random Color';
btn.style.marginLeft="46%";
document.body.appendChild(btn);

//action random color

function randomColor(){
    const r=Math.floor(Math.random()*255);
    const g=Math.floor(Math.random()*255);
    const b=Math.floor(Math.random()*255);
    return(`rgb(${r},${g},${b})`);
}
function makeRandomColor(){
    const color=randomColor();
    h2.innerText=color;
    document.body.style.backgroundColor=color;
}
btn.addEventListener('click',makeRandomColor);





