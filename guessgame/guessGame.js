let inputNumberFromUser=parseInt(prompt("Enter maximum number to start Guess game"));
while(!inputNumberFromUser){
    inputNumberFromUser=parseInt(prompt("Un valid Number!!"));
}
let guessnumber=Math.floor(Math.random()*inputNumberFromUser)+1;
console.log(guessnumber);

let guessAnswerFromUserInput=prompt("guess number between 1-"+inputNumberFromUser);
console.log(guessAnswerFromUserInput);

let numberOfTries=0;

while(parseInt(guessAnswerFromUserInput)!=guessnumber){
    if(guessAnswerFromUserInput==='q') break;
    numberOfTries++;
    if(guessAnswerFromUserInput>guessnumber){
    guessAnswerFromUserInput= prompt("too high"); 
    }
    else if(guessAnswerFromUserInput<guessnumber){
        guessAnswerFromUserInput= prompt("too low"); 
    }
    else{
        guessAnswerFromUserInput= prompt("please write only numbers");  
    }
    
}
if(guessAnswerFromUserInput==='q'){
    console.log("good bye");
}
else{
console.log("Nice you did it with number of tries:"+numberOfTries);
}


