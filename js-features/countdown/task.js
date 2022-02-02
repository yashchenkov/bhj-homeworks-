//Сложность х0

/*const timer = document.getElementById('timer');
console.log(timer);
const intervalID = setInterval(() => {
	timer.textContent = Number(timer.textContent) - 1;
	if(Number(timer.textContent) === 0) {
		clearInterval(intervalID);
		window.alert("Вы победили в конкурсе!");
	}
	}, 1000);*/


//Сложность х1

/*const timer = document.getElementById('timer');
const intervalID = setInterval(() => {
	let timeData = timer.textContent.split(':');
	let timeInSeconds = Number(timeData[0]) * 3600 + Number(timeData[1]) * 60 + Number(timeData[2]) - 1;

	let currentHours = parseInt(timeInSeconds/3600) < 10 ? '0' + parseInt(timeInSeconds/3600) : '' + parseInt(timeInSeconds/3600);
	let currentMinutes = parseInt((timeInSeconds % 3600) / 60) < 10 ? '0' + parseInt((timeInSeconds % 3600) / 60) : '' + parseInt((timeInSeconds % 3600) / 60);
	let currentSeconds = parseInt((timeInSeconds % 3600) % 60) < 10 ? '0' + parseInt((timeInSeconds % 3600) % 60) : parseInt((timeInSeconds % 3600) % 60);
	
	timer.textContent = currentHours + ':' + currentMinutes + ':' + currentSeconds
	
	if(timeInSeconds === 0) {
		clearInterval(intervalID);
		window.alert("Вы победили в конкурсе!");
	}
}, 1000);*/


//Сложность х2
const timer = document.getElementById('timer');
const intervalID = setInterval(() => {
	let timeData = timer.textContent.split(':');
	let timeInSeconds = Number(timeData[0]) * 3600 + Number(timeData[1]) * 60 + Number(timeData[2]) - 1;

	let currentHours = parseInt(timeInSeconds/3600) < 10 ? '0' + parseInt(timeInSeconds/3600) : '' + parseInt(timeInSeconds/3600);
	let currentMinutes = parseInt((timeInSeconds % 3600) / 60) < 10 ? '0' + parseInt((timeInSeconds % 3600) / 60) : '' + parseInt((timeInSeconds % 3600) / 60);
	let currentSeconds = parseInt((timeInSeconds % 3600) % 60) < 10 ? '0' + parseInt((timeInSeconds % 3600) % 60) : parseInt((timeInSeconds % 3600) % 60);
	
	timer.textContent = currentHours + ':' + currentMinutes + ':' + currentSeconds
	
	if(timeInSeconds === 0) {
		clearInterval(intervalID);
		window.location.assign('https://github.com/notepad-plus-plus/notepad-plus-plus/releases/download/v8.2.1/npp.8.2.1.Installer.x64.exe');
	}
}, 1000);



