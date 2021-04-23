const dropdown = document.querySelector('.dropdown');
dropdown.addEventListener('click', function (event) {
	event.stopPropagation();
	dropdown.classList.toggle('is-active');
});


const rev = document.querySelector('#review');
let finalScore = 3;

const playTo = document.querySelectorAll('.dropdown-item');
for (let plays of playTo) {
	plays.addEventListener('click', function (event) {
		console.log(plays.innerText);
		rev.innerText = plays.innerText;
		finalScore = parseInt(plays.innerText);
	})
}

const playerOne = document.querySelector('.is-primary');
const spanOne = document.querySelector('#one');
let oneScore = 0;
playerOne.addEventListener('click', function (event) {
	console.log("Player One +");
	oneScore++;
	spanOne.innerText = oneScore;
	disable(oneScore)
})

const playerTwo = document.querySelector('.is-info');
const spanTwo = document.querySelector('#two');
let twoScore = 0;
playerTwo.addEventListener('click', function (event) {
	console.log("Player Two +");
	twoScore++;
	spanTwo.innerText = twoScore;
	disable(twoScore);
})

const reset = document.querySelector('.is-danger');
reset.addEventListener('click', resetButtons);

function resetButtons() {
	playerOne.removeAttribute('disabled');
	playerTwo.removeAttribute('disabled');
	spanOne.innerText = 0;	oneScore=0;
	spanTwo.innerText = 0;	twoScore=0;
}

function disable(score) {
	if(score === finalScore) {
		playerOne.setAttribute('disabled','');
		playerTwo.setAttribute('disabled','');
	}
}

//abc.setAttribute('disabled','')