
let input1=document.querySelector("#input1");
let input2=document.querySelector("#input2");
let h11=document.querySelector("#h11");
let h12=document.querySelector("#h12");

input1.addEventListener("change",function(){
h11.innerText=input1.value;
})
input2.addEventListener("input",function(){
    h12.innerText=input2.value;
    })