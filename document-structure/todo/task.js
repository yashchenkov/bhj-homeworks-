const input = document.querySelector('.tasks__input');
const tasks = document.querySelector('.tasks__list');
const button = document.querySelector('.tasks__add');
let myStorage = window.locflStorage;
const arr = [];

input.addEventListener('keydown', addTask);
button.addEventListener('click', (e) => {
	e.preventDefault();
});


function addTask(e) {
	if(event.code === 'Enter') {
		tasks.innerHTML += `
		<div class="task">
			<div class="task__title">
	        	${input.value}
	    	</div>
	    	<a href="#" class="task__remove">&times;</a>
	    </div>`
	    input.value = '';

	    let task = tasks.lastChild;
		arr.push(task);
		setEvent();
	}
}

function setEvent() {
	console.log(arr);
	arr.forEach(elem => {
		elem.querySelector('a').addEventListener('click', (e) => {
			e.target.closest('.task').remove();
		})
	})
}


