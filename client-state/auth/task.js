const form = document.querySelector('#signin__form');
let inpts = document.querySelectorAll('.control');
const divForm = document.querySelector('.signin');
const divWelcome = document.querySelector('#welcome');
const userId = document.querySelector('#user_id');
let localStorage = window.localStorage;

let xhr = new XMLHttpRequest();

if(!localStorage.getItem('id')) {
	form.addEventListener('submit', (e) => {
		e.preventDefault();

		if(inpts[0].value !== '' && inpts[1].value !== '') {
			let formData = new FormData(document.querySelector('#signin__form'));
			xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
			xhr.send(formData);
		}
	});

	xhr.addEventListener('load', e => {
		if(JSON.parse(xhr.response).success) {
			localStorage.clear();
			localStorage.setItem('id', JSON.parse(xhr.response).user_id);
			divForm.classList.remove('signin_active');
			divWelcome.classList.add('welcome_active');
			userId.textContent += JSON.parse(xhr.response).user_id

		} else {
			divForm.classList.remove('signin_active');
			divWelcome.classList.add('welcome_active');
			divWelcome.textContent = 'Неверный логин/пароль';
		}
		console.log(e);
	})
} else {
	divForm.classList.remove('signin_active');
	divWelcome.classList.add('welcome_active');
	userId.textContent += localStorage.getItem('id');
}