var random = Math.floor(Math.random() * 6) + 1;

var randomimage = "images/dice" + random + ".png";

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomimage);

var random2 = Math.floor(Math.random() * 6) + 1;

var randomimage2 = "images/dice" + random2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src",randomimage2);

if(random>random2){
    document.querySelector("h1").innerHTML = "Player 1 🚩  Wins";
    document.querySelectorAll("h3")[0].innerHTML = "Player 1 🚩";
}
else if(random<random2){
    document.querySelector("h1").innerHTML = "Player 2 🚩   Wins";
    document.querySelectorAll("h3")[1].innerHTML = "Player 2 🚩";
}
else {
    document.querySelector("h1").innerHTML = " 🚩  Draw";
}
