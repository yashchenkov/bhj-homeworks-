const quantity_controls = Array.from(document.querySelectorAll('.product__quantity-control'));
const productAdd = Array.from(document.querySelectorAll('.product__add'));
const cart = document.querySelector('.cart__products');




productAdd.forEach(elem => {
	elem.addEventListener('click', addToCart);
})
quantity_controls.forEach(elem => {
	elem.addEventListener('click', changeQuantity);
})



//изменение кол-ва в карточке товара
function changeQuantity() {
	let product = this.closest('.product');
	let value = this.closest('.product__quantity-controls').querySelector('.product__quantity-value');
	let valueInt = parseInt(value.textContent);

	if(this.classList.contains('product__quantity-control_dec')) {
		if(valueInt > 1) {
			value.textContent = valueInt - 1;
			if(isInCart(product.dataset.id)) {
				changeQuantityCartDec(valueInt, product);
			}
		}
	} else {
		value.textContent = valueInt + 1;
		if(isInCart(product.dataset.id)) {
			changeQuantityCartInc(valueInt, product)
		}
	}
}

//добавление в корзину
function addToCart() {
	let product = this.closest('.product');
	if(!isInCart(product.dataset.id)) {
		let img = product.querySelector('img');
		img.classList.remove('product__image');
		img.classList.add('cart__product-image');
		let quantity = product.querySelector('.product__quantity-value');


		cart.innerHTML += `
		<div class="cart__product" data-id="${product.dataset.id}">
	    	
	    </div>`
		cart.lastChild.appendChild(img.cloneNode(), false);
		console.log(img);
		cart.lastChild.innerHTML += `
		<div class="cart__product-count">${quantity.textContent}</div>`
	}
}


//проверка, есть ли в корзине элемент
function isInCart(id) {
	let cards = Array.from(cart.children);
	let index = cards.findIndex((elem) => {
		return elem.dataset.id === id
	});
	console.log(index);
	if(index !== -1) {
		return true;
	} else {
		return false;
	}
}

//уменьшение кол-ва продукта в корзине
function changeQuantityCartDec(value, product) {
	let cards = Array.from(cart.children);
	cards.forEach(elem => {
		if(elem.dataset.id === product.dataset.id) {
			elem.querySelector('.cart__product-count').textContent = value - 1;
		}
	})
}

//увеличение кол-ва продукта в корзине
function changeQuantityCartInc(value, product) {
	let cards = Array.from(cart.children);
	cards.forEach(elem => {
		if(elem.dataset.id === product.dataset.id) {
			elem.querySelector('.cart__product-count').textContent = value + 1;
		}
	})
}
