const btnFont = document.querySelector(".header__btn--font");
const btnBuy = document.querySelector(".header__btn--buy");
const buyBlock = document.querySelector(".buy");
const cardBlock = document.querySelector(".card");

function toggleClass() {
	cardBlock.classList.toggle("card__open");
	buyBlock.classList.toggle("buy__open");
	btnFont.classList.toggle("header__btn--active");
	btnBuy.classList.toggle("header__btn--active");
}

btnFont.onclick = () => toggleClass();
btnBuy.onclick = () => toggleClass();
