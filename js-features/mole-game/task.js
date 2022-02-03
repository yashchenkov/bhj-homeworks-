const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

const holes = document.getElementsByClassName('hole');
for(let i = 0; i < holes.length; i++){
	holes[i].addEventListener('click', () => {
		if(holes[i].classList.contains('hole_has-mole')){
			dead.textContent = Number(dead.textContent) + 1;
		} else {
			lost.textContent = Number(lost.textContent) + 1;
		}

		if(Number(dead.textContent) === 10) {
			windowAlert('Вы выиграли!');
		} else if(Number(lost.textContent) === 3) {
			windowAlert('Вы проиграли!');
		}
	});
}

function windowAlert(text) {
	window.alert(text);
	dead.textContent = 0;
	lost.textContent = 0;
}


