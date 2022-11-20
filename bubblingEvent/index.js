let div1=document.querySelector("#div1");
let div2=document.querySelector("#div2");
let btn1=document.querySelector("#btn1");
let btn2=document.querySelector("#btn2");

div1.addEventListener('click',function(){
    alert("hi there from div.")
})

btn1.addEventListener('click',function(){
    alert("hi there from button.")
})

btn2.addEventListener('click',function(e){
e.stopPropagation();
div2.style.backgroundColor=randomColor();
})
div2.addEventListener('click',function(){
   div2.classList.toggle('hide');
})

const randomColor=()=>{
    const r=Math.floor(Math.random()*255);
    const g=Math.floor(Math.random()*255);
    const b=Math.floor(Math.random()*255);
    return(`rgb(${r},${g},${b})`);
}