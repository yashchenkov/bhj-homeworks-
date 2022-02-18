const reveals = document.querySelectorAll('.reveal');

setInterval(() => {
	reveals.forEach((elem) => {
		if(elem.getBoundingClientRect().bottom > 0 && elem.getBoundingClientRect().top < window.innerHeight) {
			elem.classList.add('reveal_active');
			console.log(true)
		} else {
			elem.classList.remove('reveal_active')
			console.log(false);
		}
	});
}, 1000);
