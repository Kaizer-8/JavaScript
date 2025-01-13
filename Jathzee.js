const id = ["dice1","dice2","dice3","dice4","dice5"];
// de dubbele array slaat de score van de 2 spelers op.
// const upperscorebord = [[0,0,0,0,0],[1,1,1,1,1,1]];
// const lowerscorebord = [[0,0,0,0,0],[1,1,1,1,1,1]];
let playerturn = 3;
let playerturnboolean = true;
const dicenumb = [0,0,0,0,0,0];
const dicepictures = [1,2,3,4,5,6];
const dicenumbers = [1,2,3,4,5];
const keepdice = [false,false,false,false,false];
const dicephoto = [
  "dice images/Dice-1.png",
  "dice images/Dice-2.png",
  "dice images/Dice-3.png",
  "dice images/Dice-4.png",
  "dice images/Dice-5.png",
  "dice images/Dice-6.png"
];
// de functie geldt voor player 1 en als speler 1 zijn beurten heeft gebruikt dan gaat de functie door naar speler 2 
function dicescores(){
  for (let i = 0; i < 6; i++){
    if (dicenumbers[i] == 1){
      dicenumb[0]++;
    }
  }
  for (let i = 0; i < 6; i++){
    if (dicenumbers[i] == 2){
      dicenumb[1]++;
    }
  }
  for (let i = 0; i < 6; i++){
    if (dicenumbers[i] == 3){
      dicenumb[2]++;
    }
  }
  for (let i = 0; i < 6; i++){
    if (dicenumbers[i] == 4){
      dicenumb[3]++;
    }
  }
  for (let i = 0; i < 6; i++){
    if (dicenumbers[i] == 5){
      dicenumb[4]++;
    }
  }
  for (let i = 0; i < 6; i++){
    if (dicenumbers[i] == 6){
      dicenumb[5]++;
    }
  }
}
// de functie geldt voor player 1 en als speler 1 zijn beurten heeft gebruikt dan gaat de functie door naar speler 2 
function roll(){
  for (let i = 0; i < 5; i++){
    if (keepdice[i] == false){
      if (playerturnboolean == true){
      dicenumbers[i] = Math.floor(Math.random() * 6) + 1;
      }
    }
  }
  pictureschange();
  playerturn--;
  turns();
  dicescores();
  scorebord();
  reset();
}

function reset(){
  for (let i = 0; i < 6; i++){
    dicenumb[i] = 0;
  }
}

function turns(){
  if (playerturn == 0){
    playerturnboolean = false;
  }
}

function pictureschange(){
    for (let i = 0; i < 5; i++){
        document.getElementById(id[i]).src = dicephoto[(dicenumbers[i]-1)];
  }
}

function holddice(dice){
  if (keepdice[dice] == false){
    keepdice[dice] = true;
  }
  else if (keepdice[dice] == true){
    keepdice[dice] = false;
  }
}

function scorebord(){
for (let i = 0; i < 6; i++){
    document.getElementById("one").innerHTML = dicenumb[0] * 1;
    }
for (let i = 0; i < 6; i++){
    document.getElementById("two").innerHTML = dicenumb[1] * 2;
    }
for (let i = 0; i < 6; i++){
    document.getElementById("three").innerHTML = dicenumb[2] * 3;
    }
for (let i = 0; i < 6; i++){
    document.getElementById("four").innerHTML = dicenumb[3] * 4;
    }
for (let i = 0; i < 6; i++){
    document.getElementById("five").innerHTML = dicenumb[4] * 5;
    }
for (let i = 0; i < 6; i++){
    document.getElementById("six").innerHTML = dicenumb[5] * 6;
    }
for (let i = 0; i < 6; i++){
    if (dicenumb[i] == 3){
      document.getElementById("three of a kind").innerHTML = 30;
    }
  }
for (let i = 0; i < 6; i++){
    if (dicenumb[i] == 4){
      document.getElementById("four of a kind").innerHTML = 40;
    }
  }
  for (let i = 0; i < 6; i++){
    if (dicenumb[i] == 3){
      for (let j = 0; j < 6; j++){
        if (j != i){
          if (dicenumb[j] == 2){
            document.getElementById("full house").innerHTML = 25;
          }
        }
      }
    }
  }
  for (let i = 0; i < 6; i++){
    if (dicenumb[i] == 5){
      document.getElementById("yathzee").innerHTML = 50;
    }
  }
  if (dicenumb[0] == 1 && dicenumb[1] == 1 && dicenumb[2] == 1 && dicenumb[3] == 1 && dicenumb[4] == 1 && dicenumb[5] == 0 
    ||dicenumb[0] == 0 && dicenumb[1] == 1 && dicenumb[2] == 1 && dicenumb[3] == 1 && dicenumb[4] == 1 && dicenumb[5] == 1 ){
    document.getElementById("large street").innerHTML = 40;
    }
    if (dicenumb[0] >= 1 && dicenumb[1] >= 1 && dicenumb[2] >= 1 && dicenumb[3] >= 1 && dicenumb[4] >= 0 && dicenumb[5] == 0||
        dicenumb[0] >= 0 && dicenumb[1] >= 1 && dicenumb[2] >= 1 && dicenumb[3] >= 1 && dicenumb[4] >= 1 && dicenumb[5] == 0||
        dicenumb[0] >= 0 && dicenumb[1] >= 0 && dicenumb[2] >= 1 && dicenumb[3] >= 1 && dicenumb[4] >= 1 && dicenumb[5] == 1){
    document.getElementById("small street").innerHTML = 30;
      }
      //chance alle dobbelstenen samen opgeteltd.
}
/*
een syteem waar je kan kiezen welke score je wilt hebben. door middel van een button naast de score of je kan op de score clikken
en dan confirmen met een button
na een aantal beurten wordt score die opgeslagen is in de const player1 en player2 het totaal berekend en vergeleken de speler
met de hoogste score wint.
*/

