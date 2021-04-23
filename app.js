const dropdown = document.querySelector('.dropdown');
dropdown.addEventListener('click', function (event) {
	event.stopPropagation();
	dropdown.classList.toggle('is-active');
});

const rev = document.querySelector('#review');
// playTo
let finalScore = 3;

const playTo = document.querySelectorAll('.dropdown-item');
for (let plays of playTo) {
	plays.addEventListener('click', function (event) {
		console.log(this.innerText);
		rev.innerText = this.innerText;
		finalScore = parseInt(this.innerText);
	})
}

const playerOne = {
	score: 0,
	button : document.querySelector('.is-primary'),
	display : document.querySelector('#one')
};

const playerTwo = {
	score: 0,
	button : document.querySelector('.is-info'),
	display : document.querySelector('#two')
};

playerOne.button.addEventListener('click', () => {
	updateScore(playerOne);
});
playerTwo.button.addEventListener('click', () => {
	updateScore(playerTwo)
});

function updateScore(player) {
	player.score++;
	player.display.innerText = player.score;
	disable(player.score);
}

const reset = document.querySelector('.is-danger');
reset.addEventListener('click', resetGame);

function resetGame() {
	playerOne.button.removeAttribute('disabled');
	playerTwo.button.removeAttribute('disabled');
	playerOne.display.innerText = 0;	playerOne.score=0;
	playerTwo.display.innerText = 0;	playerTwo.score=0;
}

function disable(score) {
	if(score === finalScore) {
		playerOne.button.setAttribute('disabled','');
		playerTwo.button.setAttribute('disabled','');
		dropdown.setAttribute('disabled','');
	}
}