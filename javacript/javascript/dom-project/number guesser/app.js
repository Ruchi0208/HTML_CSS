/* 
game function;;;
-player must guesss a number between a min and a max
-player gets a certain amout of guesses
-notify playr of guesses remaining
-notify the player of the correct answer if loose
-let player choose to play again
*/

//game values
let min = 1,
	max = 10,
	winningNum = getRandomNum(min,max),
	guessesLeft = 3;

//UI vars
const game = document.querySelector('#game'),
	  minNum = document.querySelector('.min-num'),
	  maxNum = document.querySelector('.max-num'),
	  guessBtn = document.querySelector('#guess-btn'),
	  guessInput = document.querySelector('#guess-input'),
	  message = document.querySelector('.message');

//Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

//pay again  event listener
game.addEventListener('mousedown',function(e){
	if(e.target.className === 'play-again'){
		window.location.reload();	
	}

})

//listen for guess
guessBtn.addEventListener('click',function(){
	let guess = parseInt(guessInput.value);

	//validate
	if(isNan(guess) || guess < min || guess > max){
		setMessage(`Please Enter a number between ${min} and ${max}`,`red`);
	}

	//check if won
	if(guess === winningNum){
		//game over:won 

		/*//disable input
		guessInput.disabled = true;
		//change border color
		guessInput.style.borderColor='green';
		//set message
		setMessage(`${winningNum} is correct , YOU WIN !!` , `green`);*/

		gameOver(true , `${winningNum} is correct , YOU WIN !!`);
	} else {
		//wrong number
		guessesLeft -= 1;

		if(guessesLeft === 0){
			//game over : lost

			/*//disable input
			guessInput.disabled = true;
			//change border color
			guessInput.style.borderColor='red';
			//set message
			setMessage(`Game Over , YOU LOST . The correct number is ${winningNum}` , `red`); */

			gameOver(false , `Game Over , YOU LOST . The correct number is ${winningNum}`);
			
		} else {
			//game continues : answer wrong

			//change border color
			guessInput.style.borderColor = 'red' ;

			//clear input
			guessInput.value = '';

			//tell user its incorrect
			setMessage(`${guess} is not correct , ${guessesLeft} guesses left` , `red`);
		}
	}
});

//Game Over 
function gameOver(won,msg){
	let color;
	won === true ? color = 'green' : color = 'red';



	//disable input
	guessInput.disabled = true;
	//change border color
	guessInput.style.borderColor=color;
	//set message
	setMessage(msg,color);

	//Play again?
	guessBtn.value='Play Again';
	guessBtn.className += 'play-again';
}

//get winning number
function getRandomNum(min , max){
	return Math.floor(Math.random()*(max-min+1)+min);
}

//set message
function setMessage(msg,color){
	message.style.color=color;
	message.textContent = msg;
}