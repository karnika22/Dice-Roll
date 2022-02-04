var randomNum1=Math.floor(Math.random()*6)+1; //gives random number bw 1 and 6

var randomDiceIamge="Dice" + randomNum1 + ".png"; //dice1.png - dice6.png

var randomImageSource= "images/"+randomDiceIamge; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


var randomNum2=Math.floor(Math.random()*6)+1; 

var randomIamgeSource2 ="images/dice" + randomNum2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src",randomIamgeSource2);



if (randomNum1>randomNum2){
    document.querySelector("h1").innerHTML="🚩Player 1 Wins!";
}
else if (randomNum2>randomNum1){
    document.querySelector("h1").innerHTML="🚩Player 2 Wins!";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}
