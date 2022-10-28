const listItem=[];
let inputUser=prompt("Type 'new' to add item to the list,Type 'list' to show the irems in the ist, Type 'delete' to remove item from list ,Type'quit' to leave.");

while(inputUser!=='quit'&&inputUser!=='q'){
    if(inputUser==='new'){      
    inputUser=prompt("add your item");
    listItem.push(inputUser);
    }
    
    else if(inputUser==='list'){
        for(let i=0;i<listItem.length;i++){
            console.log(`${i+1}:${listItem[i]}`);
        }
    }
    else if(inputUser==='delete'){
        inputUser=parseInt(prompt("enter the item you want to delete"));
        if(!Number.isNaN(inputUser)){
        listItem.splice((inputUser-1),1);
        }
        else{
            console.log("UnVaild index");
        }
    }
    inputUser=prompt("what you want to do!");
    
    }