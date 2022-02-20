const chat = document.querySelector('.chat-widget');
const chat_input = document.getElementById('chat-widget__input');
const messages = document.querySelector( '.chat-widget__messages' );

chat.addEventListener('click', () => {
	chat.classList.add('chat-widget_active');
});
chat_input.addEventListener('keydown', (e) => {
	console.log(chat_input.value);
	if(e.code === 'Enter') {
		writeMessage(chat_input.value);
		botAnswer();
	}
})



function writeMessage(message) {
	let date = new Date();
	let date_str = date.getHours() + ':' + date.getMinutes();
	
	messages.innerHTML += `
	<div class="message message_client">
    	<div class="message__time">${date_str}</div>
    	<div class="message__text">
     	 	${message}
    	</div>
 	</div>
  	` ;
  	chat_input.value = '';
}

function botAnswer() {
	let date = new Date();
	let date_str = date.getHours() + ':' + date.getMinutes();

	const words = [
        'До свидания!',
        'Зачем Вы мне пишете? Я занят!',
        'Никаких разговорчиков!',
        'Где Ваша совесть?!',
        'Я - высшая форма жизни!',
        'Отстаньте....',
        'Напишите через 10 лет, и, возможно, я Вам отвечу',
        'Иди работай, кожаный',
      ],
      index = Math.floor(Math.random() * words.length);

    messages.innerHTML += `
	<div class="message">
    	<div class="message__time">${date_str}</div>
    	<div class="message__text">
     	 	${words[index]}
    	</div>
 	</div>
 	`
}
