const main_interests = document.querySelectorAll('.interest input');
const interests = Array.from(document.querySelector('.interest'));



main_interests.forEach(elem => {
	elem.addEventListener('change', (e) => {
	  let children = elem.closest('.interest').querySelectorAll('input');
	  children.forEach(elem => {
	  		elem.checked = e.target.checked;
		});
	});
});