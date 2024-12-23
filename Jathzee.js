const id = ["dice1","dice2","dice3","dice4","dice5"];
// const player1 = [[0,0,0,0,0],[1,1,1,1,1,1]];
// const player2 = [0,0,0,0,0];
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

function scores(){
  for (let i = 0; i < 5; i++){
    if (dicenumbers[i] == 1){
      dicenumb[0]++;
    }
  }
  for (let i = 0; i < 5; i++){
    if (dicenumbers[i] == 2){
      dicenumb[1]++;
    }
  }
  for (let i = 0; i < 5; i++){
    if (dicenumbers[i] == 3){
      dicenumb[2]++;
    }
  }
  for (let i = 0; i < 5; i++){
    if (dicenumbers == 4){
      dicenumb[3]++;
    }
  }
  for (let i = 0; i < 5; i++){
    if (dicenumbers == 5){
      dicenumb[4]++;
    }
  }
  for (let i = 0; i < 5; i++){
    if (dicenumbers == 6){
      dicenumb[5]++;
    }
  }
}

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
  scores();
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

// function nextplayer(){
  
// }