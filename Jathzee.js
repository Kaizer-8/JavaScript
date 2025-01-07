const id = ["dice1","dice2","dice3","dice4","dice5"];
// de dubbele array slaat de score van de 2 spelers op.
// const player1 = [[0,0,0,0,0],[1,1,1,1,1,1]];
// const player2 = [[0,0,0,0,0],[1,1,1,1,1,1]];
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
    if (dicepictures[i] == 1){
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
  /*
  een grid waar de scores in komen te staan 
  een scorebord staat onderaan het scherm die de scores bij houd van mijn dicescores functie
  voor 1 tot 6 moeten de scores van de dobbelstenen opgetelt worden voor de boventste half 

  for (let i = 0; i < 6; i++){
  if (dicenumbers[i] == 3){
  het scorebord van three of a kind wordt true. het totaal van alle dobbelstenen wordt bij elkaar opgetelt 
  }
  for (let i = 0; i < 6; i++){
  if (dicenumbers[i] == 4){
  het scorebord van four of a kind wordt true.het totaal van alle dobbelstenen wordt bij elkaar opgetelt
  }
  for (let i = 0; i < 6; i++){
  if (dicenumbers[i] == 3 && dicenumbers[i] == 2){
  het scorebord van full house wordt true
  }
  for (let i = 0; i < 6; i++){
  if (dicenumbers[i] == 5){
  het scorebord van jathzee wordt true
  }
  if (dicenumbers[0] == 1 && dicenumbers[1] == 1 && dicenumbers[2] == 1 && dicenumbers[3] == 1){
  kleine straat wordt waar op het scorebord
  }
  if (dicenumbers[0] == 1 && dicenumbers[1] == 1 && dicenumbers[2] == 1 && dicenumbers[3] == 1 && dicenumbers[4] == 1){
  grote straat wordt waar op het scorebord
  }
  */
}