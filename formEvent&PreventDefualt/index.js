let form=document.querySelector("form");
let input=document.querySelector("#inputName");
let ul=document.querySelector("#animal");
form.addEventListener("submit",function(e){
    const submittedText=input.value;//to get value inside input
    const newLi=document.createElement("li");
    newLi.innerText=`${submittedText}`;
    ul.appendChild(newLi);
    input.value="";//to empty the input value written
    e.preventDefault();
   
})