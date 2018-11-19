//window.onload = function(){
//DOM elements
var wins_dom = document.getElementById("wins");
var losses_dom = document.getElementById("losses");
var placeholder_dom = document.getElementById("placeholder");
var guesses_left_dom = document.getElementById("guesses_left");
var incorrect_guessed_dom = document.getElementById("incorrect_guessed");

//create variables

var word_arr=["Moana","Zootopia","Sing","Trolls"];
var wins=0;
var losses=0;
var guesses_left=10;
var pickedword='';
var pickedwordPlaceholderArr=[];
var guess_letter_group=[];
var incorrect_letter_group=[];
var gameRunning=true;

function newGame(){
  gameRunning=true;
  guesses_left=10;
  pickedwordPlaceholderArr=[];
  guess_letter_group=[];
  incorrect_letter_group=[];

  pickedword=word_arr[Math.floor(Math.random() * word_arr.length)];
  console.log("New pick:: "+pickedword);
  for(i=0;i<word_arr.length;i++){
    if(pickedword[i]==''){
      pickedwordPlaceholderArr.push(' ');
    }
    else{
      pickedwordPlaceholderArr.push('_');
    }

  }
    
  guesses_left_dom.textContent=guesses_left;
  placeholder_dom.textContent=pickedwordPlaceholderArr.join('');
  incorrect_guessed_dom.textContent=incorrect_letter_group; 
}
    pickedword=word_arr[Math.floor(Math.random() * word_arr.length)];
    console.log(pickedword);
    for(i=0;i<word_arr.length;i++){
    if(pickedword[i]==''){
      pickedwordPlaceholderArr.push('');
    }
    else{
      pickedwordPlaceholderArr.push('_');
    }

    }
function letter_guess(letter){
  
  if(gameRunning==true &&  guess_letter_group.indexOf(letter)==-1){
    //game logic
    
    guess_letter_group.push(letter);
    console.log("guess_letter_group " + guess_letter_group);
    for(var i=0;i<pickedword.length;i++){
      if(pickedword[i].toLowerCase()===letter.toLowerCase()){
        pickedwordPlaceholderArr[i]=pickedword[i];
        guesses_left--;
        guesses_left_dom.textContent=guesses_left;
      }
    }
   
    placeholder_dom.textContent=pickedwordPlaceholderArr.join('');
    
    incorrect(letter);
    //win();
  }
 else{
    if(!gameRunning){
      alert("The game is not running");
      var start_new_game = confirm("Do you want to start a new game?");
      if(start_new_game==true){
        newGame();
      }
      else{
        alert("Exit the game");
      }
    }
    else{
      alert("You have already guessed this letter " +letter);
    }
  }
}
//check incorrect letter
function incorrect(letter){
  console.log("pickedwordPlaceholderArr===>"+pickedwordPlaceholderArr);
  if(pickedwordPlaceholderArr.indexOf(letter.toLowerCase())===-1 && pickedwordPlaceholderArr.indexOf(letter.toUpperCase())===-1 ){
    
    guesses_left--;
    incorrect_letter_group.push(letter);
    guesses_left_dom.textContent=guesses_left;
   // console.log("incorrect_letter_group "+incorrect_letter_group);
    console.log("guesses_left "+guesses_left);
    incorrect_guessed_dom.textContent=incorrect_letter_group;   
    
  }
  loss();
}

//loss
function loss(){
  if(guesses_left===0){
    losses++;
    gameRunning=false;
    
    losses_dom.textContent=losses;
    console.log("losses "+losses);
  }
  win();
}

//win
function win(){
    
  if(pickedword==pickedwordPlaceholderArr.join('')){
    wins++;
    gameRunning=false;
    
    wins_dom.textContent=wins;   
    console.log("wins "+wins);
  }
}


document.onkeyup = function (event) {
  //newGame();
  console.log(event.key);
  //if(event.keyCode.toLowerCase()>=65 || event.keyCode.toLowerCase()<=90){
  letter_guess(event.key);
  //}
  //else{
  //  alert("Choose any letter but no numbers");
  //}
  
};
//};
