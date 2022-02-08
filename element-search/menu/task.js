const menu_items = Array.from(document.querySelectorAll('.menu__item'));

menu_items.forEach(elem => {
	elem.addEventListener('click', openMenu);
});

function openMenu(e) {
	const elem = this.querySelector('.menu_sub');
	if (elem) {
		if(e.target.innerHTML === 'Услуги' || e.target.innerHTML === 'О компании' || e.target.innerHTML === 'Контакты') {
			e.preventDefault();
		}
		isOpened();
		if(elem.classList.contains('menu_active')){
			elem.classList.remove('menu_active');
		} else {
			elem.classList.add('menu_active');
		}
	}
}

function isOpened() {
	menu_items.forEach(elem => {
		if(elem.querySelector('.menu_active')) {
			elem.querySelector('.menu_active').classList.remove('menu_active');
		}
	});
}
