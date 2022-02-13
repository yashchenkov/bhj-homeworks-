const dropdown_value = document.querySelector('.dropdown__value');
const dropdown_items = Array.from(document.querySelectorAll('.dropdown__item'));
const dropdown_list = document.querySelector('.dropdown__list');

dropdown_value.addEventListener('click', openList);
dropdown_items.forEach(elem => {
	elem.addEventListener('click', closeList);
})

//dropdown__list_active

function openList() {
	dropdown_list.classList.add('dropdown__list_active');
}

function closeList() {
	event.preventDefault();
	dropdown_list.classList.remove('dropdown__list_active');
	dropdown_value.innerHTML = this.querySelector('a').innerHTML;
}