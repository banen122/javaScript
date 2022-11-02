const btn2=document.querySelector("button:nth-of-type(2)");
const btn3=document.querySelector("button:nth-of-type(3)");
const btn4=document.querySelector("#onclick");
const btn5=document.querySelector("#addEventListener");
//onclick property
btn2.onclick=function(){
    alert("hello there");
}
//addEventListener
btn3.addEventListener('click',()=>alert("hello world"));

//we can assign to function instead write the function inside in both onclick and addEventListener but the function should be without bracket.
//different between onclick and addEventListener
function hello(btn){
    alert(btn.innerText+": *Hellooo!*");
}
function goodbye(btn){
    alert(btn.innerText+": *Goodbye!*")
}
btn4.onclick=()=>hello(btn4);
btn4.onclick=()=>goodbye(btn4);
btn5.addEventListener('click',()=>hello(btn5));
btn5.addEventListener('click',()=>goodbye(btn5));
