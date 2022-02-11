const menu_items = Array.from(document.querySelectorAll('.menu__item'));
const menus_sub = Array.from(document.querySelectorAll('.menu_sub'));

menu_items.forEach(elem => {
	let link = elem.querySelector('.menu__link');
	if(elem.querySelector('.menu_sub')) {
		link.addEventListener('click', openMenu);
	}
});

function openMenu(e) {
	let subMenu = this.closest('.menu__item').querySelector('.menu_sub');
	e.preventDefault();
	menus_sub.forEach(elem => {
		if(elem.classList.contains('menu_active') && subMenu !== elem) {
			elem.classList.remove('menu_active');
		}
	});
	subMenu.classList.toggle("menu_active");
}

function isOpened() {
		menu_items.forEach(elem => {
		if(elem.querySelector('.menu_active')) {
			elem.querySelector('.menu_active').classList.remove('menu_active');

		}
	});
}

