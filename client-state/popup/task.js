
const popup = document.querySelector('.modal');
const closePopup = document.querySelector('.modal__close');

if(!checkCookie()) {
	closePopup.addEventListener('click', () => {
		popup.classList.remove('modal_active')
		popup.classList.add('modal_active');
		document.cookie = 'popup=true';
	});
	
}


function checkCookie() {
	let arr = document.cookie.split('=');
	return arr[1] === 'true' ? true : false;
}