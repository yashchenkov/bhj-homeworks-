const progress = document.getElementById( 'progress' );
const buttn = document.querySelector('#send');
const inp = document.querySelector('#file');
const form = document.querySelector('#form');
let formData = new FormData(document.querySelector('#form'));

let xhr = new XMLHttpRequest();

form.addEventListener('submit', (e) => {
	e.preventDefault();
	console.log(e);
	xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
	xhr.send(formData);
});

inp.addEventListener('change', (e) => {
	formData.append('file', e.srcElement.files[0])
	console.log(e);
	console.log(e.srcElement.files[0]);
});

xhr.upload.onprogress = function(event)  {
	//console.log(event);
	progress.value = event.loaded / event.total;
};

xhr.addEventListener('loadend', () => {
    if (xhr.status == 200) {
      console.log("Успех");
    } else {
      console.log("Ошибка " + this.status);
    }
});
console.log(form);

