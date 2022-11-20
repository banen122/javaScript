let name=document.querySelector("#name");
let tweet=document.querySelector("#tweet");
let form=document.querySelector("form");
let ulContainer=document.querySelector("ul");
let liTweet=document.querySelectorAll("li");

form.addEventListener("submit",function(e){
    e.preventDefault();
    
    addTweet(name,tweet);
    this.name.value="";
    this.tweet.value="";

})

const addTweet=function(name,tweet){
    const newTweet=document.createElement("li");
    const btag=document.createElement("b");
    btag.append(name.value);
    newTweet.appendChild(btag);
    newTweet.append(`- ${tweet.value}`);
    ulContainer.appendChild(newTweet);
}

ulContainer.addEventListener("click",function(e){
    console.dir(e);
   
 e.target.nodeName==="LI"&& e.target.remove();
})
