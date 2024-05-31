// Variables for the DOM elements
const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const endgameEl = document.getElementById("end-game-container");
const settings = document.getElementById("settings");
const settingsForm = document.getElementById("settings-form");
const settingsBtn = document.getElementById("settings-btn");
const difficultySelect = document.getElementById("difficulty");

// Array
const words = [
  "dependent",
  "dog",
  "superficial",
  "admit",
  "juice",
  "javascript",
  "developer",
  "airplane",
  "great",
  "fun",
  "manipulate",
  "cat",
  "transition",
  "school",
  "computer",
  "programming",
  "drag",
  "loving",
  "north",
];

//part1 1.getRandomWord 2.addWordToDOM 3.add event listener to text element 4.updateScore 

//part2  5.get the cursor automatically in input  6.counting down - timer  7.update time  8.gameOver  9.eventListener

//part3 10.settings btn  11.settings select  12.pull from local storge  13.set difficulty  in the eventlisterna  14. set time depending on difficulty in the evenlistener 


let randomWord;

let score = 0;

let time = 10;

let diffiulty =localStorage.getItem("difficulty") !== null 
? localStorage.getItem("difficulty")
: "medium";

// set difficulty select 
difficultySelect.value = localStorage.getItem("difficulty") !== null
? localStorage.getItem("difficulty")
: "medium";




text.focus(); // in here we did option 5 saving time and being on cursor


// 6 and 7 counting down for timer
const timeInterval = setInterval(updatetime,1000);


function updatetime (){
time--;
timeEl.innerHTML = time + "s";
//console.log(1);
if (time === 0){ clearInterval(timeInterval);

  gameOver();
}
}

//8  gameover
function gameOver(){endgameEl.innerHTML = `<h1> Time ran out!</h1> <p> Your final score is ${score} </p>  <button onclick="location.reload()">Reload</button>
`;
endgameEl.style.display = "flex";
}





function getRandomWord() {
  return words [Math.floor(Math.random() * words.length)];
  // func to get random word
}

function addWordToDOM(){
  randomWord = getRandomWord();
  word.innerHTML = randomWord;
}


function updateScore(){score++;
scoreEl.innerHTML = score;

}


addWordToDOM();

// func for adding text 
text.addEventListener("input", (event) =>{
const insertedText = event.target.value;
//console.log(insertedText);
if(insertedText === randomWord)

{addWordToDOM();

updateScore();

event.target.value = "";
// increase time when we have correct answer
//time += 5;
if (diffiulty === "hard"){ time += 2;}

else if(diffiulty === "medium"){ time += 3;}

else { time += 5 ;}

updatetime()

}
})

// 10. settings btn click
settingsBtn.addEventListener("click", () => settings.classList.toggle("hide"));

//settings select
settingsForm.addEventListener("change",(event)=> {
diffiulty = event.target.value;
localStorage.setItem("difficulty",diffiulty);
})

