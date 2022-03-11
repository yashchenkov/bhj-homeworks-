const editor = document.querySelector('#editor');
if(localStorage.getItem('text') !== null) {
	editor.value = localStorage.getItem('text');
}

editor.addEventListener('input', () => {
	if(localStorage.getItem('text') !== null) {
		localStorage.clear();
		localStorage.setItem('text', editor.value);
	} else {
		localStorage.setItem('text', editor.value);
	}
})