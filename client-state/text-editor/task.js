const editor = document.querySelector('#editor');
let storage = window.localStorage;
if(storage.getItem('text') !== null) {
	editor.value = storage.getItem('text');
}

editor.addEventListener('input', () => {
	if(storage.getItem('text') !== null) {
		storage.clear();
		storage.setItem('text', editor.value);
	} else {
		storage.setItem('text', editor.value);
	}
})