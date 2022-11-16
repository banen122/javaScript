let input=document.createElement('input');
input.type="text";
window.addEventListener("keydown",function(e){
    switch(e.code){
        case "ArrowUp":console.log("Gustavo Fring!");break;
        case "ArrowDown":console.log("Saul Goodman!");break;
        case "ArrowRight":console.log("Walter White!");break;
        case "ArrowLeft":console.log("Jesse Pinkman!");break;
    }
// if(e.code=="ArrowUp"){
//     console.log("hey you clicked me!");
// }
// else if(e.code=="ArrowDown"){
//     console.log("hello, welcme my friend, I'm gustavo fring but you can call me gus!");
// }
}
);
document.body.appendChild(input);