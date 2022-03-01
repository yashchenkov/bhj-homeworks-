const progress = document.getElementById( 'progress' );
const endLoad = 100791055;
let xhr = new XMLHttpRequest();

xhr.addEventListener('progress', (e) => {
	progress.value = e.loaded / endLoad;
})

xhr.addEventListener('loadend', (e) => {
	console.log('finished');
	console.log(progress.value);
})

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/upload.php');
xhr.send();