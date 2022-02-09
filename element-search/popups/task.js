const modal_main = document.getElementById('modal_main');
const modal_success = document.getElementById('modal_success');
const modal__close_times = Array.from(document.querySelectorAll('.modal__close_times'));
const btn_danger = document.querySelector('.btn_danger');
const btn_success = document.querySelector('.btn_success');




modal_main.classList.add('modal_active');

modal__close_times.forEach(elem => {
	elem.addEventListener('click', () => {
		let parent = elem.closest('.modal');
		parent.classList.remove('modal_active');
	})
});




btn_danger.addEventListener('click', () => {
    modal_success.classList.add('modal_active');
	modal_main.classList.remove('modal_active');
});

btn_success.addEventListener('click', () => {
	modal_success.classList.remove('modal_active');
});

