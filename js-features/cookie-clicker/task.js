const cookie = document.getElementById('cookie');
const clicker = document.getElementById('clicker__counter');
const divClicker = document.getElementById('clicker_space');
let clickCounter = 0;
let imgFlag = false;
let addedDivFlag = false;
let dataArr = [];

cookie.onclick = () => {
	let date = new Date();
	dataArr.push(date);
	if(dataArr.length === 2) {
		averageClickCounter();
		addedDivFlag = true;
		dataArr.shift();
	}
	clickCounter++;
	clicker.textContent = clickCounter;
	if(!imgFlag) {
		cookie.width += 20;
		imgFlag = true;
	} else {
		cookie.width -= 20;
		imgFlag = false;
	}

}

function averageClickCounter() {
	let dif = (dataArr[1] - dataArr[0])/1000;
	let result = (1/dif).toFixed(2);
	if(!addedDivFlag) {
		divClicker.insertAdjacentHTML('afterend', `
			<div class="clicker__status" >
				Среднее количество кликов 
					<span id="addedSpan"<${result}</span>!
			</div>`);
	} else {
		let addedSpan = document.getElementById('addedSpan');
		addedSpan.textContent = result;
	}
}




