const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

const holes = document.getElementsByClassName('hole');
for(item of holes){
	item.addEventListener('click', () => {
		if(item.classList.contains('hole_has-mole')){
			dead.textContent = Number(dead.textContent) + 1;
		} else {
			lost.textContent = Number(lost.textContent) + 1;
		}

		if(Number(dead.textContent) === 10) {
			window.alert('Вы выиграли');
			dead.textContent = 0;
			lost.textContent = 0;
		} else if(Number(lost.textContent) === 3) {
			window.alert('Вы проиграли!');
			dead.textContent = 0;
			lost.textContent = 0;
		}
	});
}




