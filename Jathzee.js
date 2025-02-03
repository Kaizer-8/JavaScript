
const id = ["dice1","dice2","dice3","dice4","dice5"];
let lowerscorebord = [[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]];
let upperscorebord = [[0,0,0,0,0,0],[0,0,0,0,0,0]];
let scoresaveupper = [[false,false,false,false,false,false],[false,false,false,false,false,false]];
let scoresavelower = [[false,false,false,false,false,false,false],[false,false,false,false,false,false,false]];
let timesrolled = 3;
let engamescore = 0;
let engamescore1 = 0;
let playerturn = 1;
let allnumbers = 0;
let totalturns = 6;
let tempscore = 0;
let tempscore1 = 0;
let tempscore2 = 0;
let tempscore3 = 0;
let endgameboolean = false;
const booleanscore = [false,false,false,false,false,false,false];
let savescoresboolean = false;
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

function dicescores(){
  // checkt hoe vaak een dice wordt gerold
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

function roll(){
  // als endgameboolean is false dan genereerd hij 5 random nummers voor mijn dice.  
  turns();
  if (endgameboolean == false){
    document.getElementById("small street").innerHTML = "0"
    document.getElementById("large street").innerHTML = "0"
    document.getElementById("three of a kind").innerHTML = "0"
    document.getElementById("four of a kind").innerHTML = "0"
  for (let i = 0; i < 5; i++){
    if (keepdice[i] == false){
      if (playerturnboolean == true){
      dicenumbers[i] = Math.floor(Math.random() * 6) + 1;
      }
    }
  }
}
  reset();
  lowerscorebordreset();
  pictureschange();
  timesrolled--
  dicescores();
  scorebord();

}

function reset(){
  // reset de gerolede nummers 
  for (let i = 0; i < 6; i++){
    dicenumb[i] = 0;
    allnumbers = 0;
  }
}

function turns(){
  //geeft aan hoeveel beurten een speler kan nemen en hoeveel beurten er totaal genomen kunnen worden.
  if (timesrolled == 0){
    playerturnboolean = false;
  }
  if (totalturns <= 0){
    endgameboolean = true;
  }
  if (endgameboolean == true){
for (let i = 0; i < 6; i++){
  tempscore += upperscorebord[0][i]
}
for (let i = 0; i < 6; i++){
  tempscore1 += lowerscorebord[0][i] 
  }

for (let i = 0; i < 6; i++){
  tempscore2 += upperscorebord[1][i]
}
for (let i = 0; i < 7; i++){
  tempscore3 += lowerscorebord[1][i] 
  }
}
finalscore = tempscore + tempscore1;
finalscore1 = tempscore2 + tempscore3;
if (finalscore > finalscore1){
  alert("player 1 wins" + finalscore);
}
if (finalscore1 > finalscore){
  alert("player2 wins" + finalscore1);
}
//de score moet die wordt berekent wordt opgeteld en vergeleken en er wordt een alert gegeven voor de speler die wint met de score erbij.
}

function pictureschange(){
  //verdanert de photo op basis van wat er wordt gegooid bij mijn dicenumb
    for (let i = 0; i < 5; i++){
        document.getElementById(id[i]).src = dicephoto[(dicenumbers[i]-1)];
  }
}

function holddice(dice){
  // kijkt of er wordt gedrukt op de dice en als er op de dice is gedrukt dan wordt de roll functie niet uitgevoerd.
  if (keepdice[dice] == false){
    keepdice[dice] = true;
    document.getElementById(id[dice]).className = "clicked"
  }
  else if (keepdice[dice] == true){
    keepdice[dice] = false;
    document.getElementById(id[dice]).className = "notclicked"
  }
}

function nextplayers(){
  //button om naar de volgende speler in mijn array te gaan
  if (endgameboolean == false){
  for (let i = 0; i < 5; i++){
   
      keepdice[i] = false;
  }
  for (let i = 0; i < 6; i++){
      dicenumb[i] = 0;
  }
  for (let i = 0; i < 7; i++){
    booleanscore[i] = false;
  }
  totalturns--
  reset();
  scorebord();
  holddice();
  lowerscorebordreset();
  for (let i = 0; i < 5; i++){
    document.getElementById(id[i]).className = "notclicked"
  }
    document.getElementById("small street").innerHTML = "0"
    document.getElementById("large street").innerHTML = "0"
    document.getElementById("three of a kind").innerHTML = "0"
    document.getElementById("four of a kind").innerHTML = "0"
    document.getElementById("chance").innerHTML = "0"
  savescoresboolean = false;
  if (playerturnboolean == false){
    playerturnboolean = true;
  }
  timesrolled = 3;
  if (playerturn == 1){
    playerturn++;
  }
  else {
    playerturn = 1;
  }
}
}


function scorebord(){
  //bepaald de score die gegooid wordt op basis van wat in mijn dicenumb staat
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
      booleanscore[0] = true;
    }
  }
for (let i = 0; i < 6; i++){
    if (dicenumb[i] == 4){
      document.getElementById("four of a kind").innerHTML = 40;
      booleanscore[1] = true;
    }
  }
  for (let i = 0; i < 6; i++){
    if (dicenumb[i] == 3){
      for (let j = 0; j < 6; j++){
        if (j != i){
          if (dicenumb[j] == 2){
            document.getElementById("full house").innerHTML = 25;
            booleanscore[2] = true;
          }
        }
      }
    }
  }
  if (dicenumb[0] >= 1 && dicenumb[1] >= 1 && dicenumb[2] >= 1 && dicenumb[3] >= 1 && dicenumb[4] >= 0 && dicenumb[5] == 0||
    dicenumb[0] >= 0 && dicenumb[1] >= 1 && dicenumb[2] >= 1 && dicenumb[3] >= 1 && dicenumb[4] >= 1 && dicenumb[5] == 0||
    dicenumb[0] >= 0 && dicenumb[1] >= 0 && dicenumb[2] >= 1 && dicenumb[3] >= 1 && dicenumb[4] >= 1 && dicenumb[5] == 1){
  document.getElementById("small street").innerHTML = 30;
  for (let i = 0; i < 7; i++){
    booleanscore[3] = true;
    }
  }
  if (dicenumb[0] == 1 && dicenumb[1] == 1 && dicenumb[2] == 1 && dicenumb[3] == 1 && dicenumb[4] == 1 && dicenumb[5] == 0 
    ||dicenumb[0] == 0 && dicenumb[1] == 1 && dicenumb[2] == 1 && dicenumb[3] == 1 && dicenumb[4] == 1 && dicenumb[5] == 1 ){
    document.getElementById("large street").innerHTML = 40;
    for (let i = 0; i < 7; i++){
    booleanscore[4] = true;
    }
  }
  for (let i = 0; i < 5; i++){
      allnumbers += dicenumbers[i]
      document.getElementById("chance").innerHTML = allnumbers;
    for (let i = 0; i < 7; i++){
        booleanscore[5] = true;
        }
  }
  for (let i = 0; i < 6; i++){
    if (dicenumb[i] == 5){
      document.getElementById("yathzee").innerHTML = 50;
      booleanscore[6] = true;
    }
  }
}
function lowerscorebordreset(){
  // reset het lowerscorebord als de functie wordt gecalled
  for (let i = 0; i < 6; i++){
  if (dicenumb[i] < 3){
    booleanscore[0] = false;
    document.getElementById("three of a kind").innerHTML = 0;
  }
}
  for (let i = 0; i < 6; i++){
  if (dicenumb[i] < 4){
    booleanscore[1] = false;
    document.getElementById("four of a kind").innerHTML = 0;
    }
  }
  for (let i = 0; i < 6; i++){
    if (dicenumb[i] < 5){
      booleanscore[5] = false;
      document.getElementById("yathzee").innerHTML = 0;
    }
  }
  for (let i = 0; i < 6; i++){
    if (dicenumb[i] != 3){
      for (let j = 0; j < 6; j++){
        if (j != i){
          if (dicenumb[j] != 2){
            booleanscore[2] = false;
            document.getElementById("full house").innerHTML = 0;
          }
        }
      }
    }
  }
  if (dicenumb[0] != 1 && dicenumb[1] != 1 && dicenumb[2] != 1 && dicenumb[3] != 1 && dicenumb[4] != 1 && dicenumb[5] != 0 
    ||dicenumb[0] != 0 && dicenumb[1] != 1 && dicenumb[2] != 1 && dicenumb[3] != 1 && dicenumb[4] != 1 && dicenumb[5] != 1 ){
      booleanscore[4] = false;
    document.getElementById("large street").innerHTML = 0;
    }
    if (dicenumb[0] != 1 && dicenumb[1] != 1 && dicenumb[2] != 1 && dicenumb[3] != 1 && dicenumb[4] != 0 && dicenumb[5] != 0||
      dicenumb[0] != 0 && dicenumb[1] != 1 && dicenumb[2] != 1 && dicenumb[3] != 1 && dicenumb[4] != 1 && dicenumb[5] != 0||
      dicenumb[0] != 0 && dicenumb[1] != 0 && dicenumb[2] != 1 && dicenumb[3] != 1 && dicenumb[4] != 1 && dicenumb[5] != 1){
        booleanscore[3] = false;
  document.getElementById("small street").innerHTML = 0;
  }
}

function savescores(score){
  //als er op de score wordt gedrukt dan wordt die gesaved in een 2D array voor de 2 spelers en de score wordt onthouden.
  if (savescoresboolean == false){
  if (score <= 5){
  if (scoresaveupper[playerturn-1][score] == false){
      scoresaveupper[playerturn-1][score] = true;
      upperscorebord[playerturn-1][score] = (dicenumb[score] * (score+1));
      console.log(upperscorebord[playerturn-1][score]);
    }
  }

    if (score == 6){
    if(booleanscore[0] == true){
      lowerscorebord[playerturn-1][0] = 30;
    }
  }
    if (score == 7){
    if(booleanscore[1] == true){
      lowerscorebord[playerturn-1][1] = 40;
    }
  }
    if (score == 8){
    if(booleanscore[2] == true){
      lowerscorebord[playerturn-1][2] = 25;
    }
  }
    if (score == 9){
    if(booleanscore[3] == true){
      lowerscorebord[playerturn-1][3] = 30;
    }
    else if (booleanscore[3] == false){
      lowerscorebord[playerturn-1][3] = 0;
    }
  }
    if (score == 10){
    if(booleanscore[4] == true){
      lowerscorebord[playerturn-1][4] = 40;
    }
  }
    if (score == 11){
    if(booleanscore[5] == true){
      lowerscorebord[playerturn-1][5] = allnumbers;
    }
  }
    if (score == 12){
    if(booleanscore[6] == true){
      lowerscorebord[playerturn-1][6] = 50;
      savescoresboolean = true;
      }
    }
  }
}
 
