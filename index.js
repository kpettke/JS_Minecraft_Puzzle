const gameNumberElement = document.querySelector(".game-number");
const gameFeedbackElement = document.querySelector(".game-feedback");
const gameHealthNumberElement = document.querySelector(".game-health-number");
const gameHealthElement = document.querySelector(".game-health-bar");
const gameGuessElement = document.querySelector(".game-guess");
const gamePlayBtn = document.querySelector(".game-button-play");
const gameResetBtn = document.querySelector(".game-button-reset");

let gameHealth;
let gameOver;
let randomGuessNumber;

const updateData = (element, message) => {
    element.textContent = message;

}

const init = () =>{
    gameHealth = 100;
    gameOver = false;
    randomGuessNumber = Math.trunc(Math.random() * 10) + 1;
    updateData(gameHealthNumberElement, "100%");
    updateData(gameFeedbackElement, "Jaki jest twoj wybor?");
    updateData(gameNumberElement, "?");
    gameGuessElement.value = "1";
    gameHealthElement.style.background = "green";
    gameHealthElement.style.width= `${gameHealth}%`;
};



init();

 const playGame = () =>{
     const guess = Number(gameGuessElement.value);
     if(!gameOver){
         if(guess <=0){
             updateData(gameFeedbackElement, "Wprowadz poprawny numer!");
         }else if (guess == randomGuessNumber){
             gameNumberElement.textContent = randomGuessNumber;
             updateData(gameFeedbackElement, "Wygrales");
        }else if (guess !== randomGuessNumber){
             if(gameHealth > 20 ){
                updateData(gameFeedbackElement, guess > randomGuessNumber ? "wpisz mniejsza liczbe" : "Wpisz wieksza liczbe");
                gameHealth -= 20;
                gameHealthElement.sytle.width = `${gameHealth}%`;
                updateData(gameHealthNumberElement, `${gameHealth}%`);
                if(gameHealth <50){ 
                    gameHealthElement.style.background = "red";
                }
            }else{
            updateData(gameFeedbackElement, "Game Over!");
            gameHealthElement.sytle.width = `${gameHealth}%`;
            updateData(gameHealthNumberElement, "0%");
            gameOver= true;
             }
         }
     }else{

                 updateData(gameFeedbackElement,"zrestuj aby zagrac pononie");

        }
    

 };


gamePlayBtn.addEventListener("click", playGame);
gameResetBtn.addEventListener("click", init);

    