var buttons=document.querySelectorAll("button");
for(var i=0;i<document.querySelectorAll("button").length;i++){
    buttons[i].addEventListener("click",function (){
        var buttonExpression=this.innerHTML;

    makeSound(buttonExpression);
    });
    
}
document.addEventListener("keydown",function(event){
    makeSound(event.key);
});



function makeSound(key){
    switch(key){
        case "w": var x=new Audio("./sounds/tom-1.mp3");
        x.play();
                  break;
        case "a":var x=new Audio("./sounds/tom-2.mp3");
        x.play();
                 break;
        case "s":var x=new Audio("./sounds/tom-3.mp3");
        x.play();
                 break;
        case "d":var x=new Audio("./sounds/tom-4.mp3");
        x.play();
                 break;
        case "j":var x=new Audio("./sounds/snare.mp3");
        x.play();
                 break;
        case "k":var x=new Audio("./sounds/crash.mp3");
        x.play();
                 break;
        case "l":var x=new Audio("./sounds/kick-bass.mp3");
        x.play();
        break;
        default:alert("wrong key is pressed!");
    }
}





// 