const tabs = Array.from(document.querySelectorAll('.tab'));
const tab_content = Array.from(document.querySelectorAll('.tab__content'));

tabs.forEach(elem => {
	elem.addEventListener('click', getContent);
});

function getContent(e) {
	let indexTOld = tabs.findIndex((elem) => {
		return elem.classList.contains('tab_active');
	});
	let indexC = tab_content.findIndex(elem => {
		return elem.classList.contains('tab__content_active');
	});
	let indexTNew = tabs.indexOf(e.target);


	if(e.target !== tabs[indexTOld]) {
		tabs[indexTOld].classList.remove('tab_active');
		tab_content[indexC].classList.remove('tab__content_active');
		e.target.classList.add('tab_active');
		tab_content[indexTNew].classList.add('tab__content_active');

	}
}