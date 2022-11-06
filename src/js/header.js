function showMenu() {
	const header = document.querySelector('.header');
	const burgerWrap = document.querySelector('.burger__wrap');
	const burger = document.querySelector('.burger');

	// открытие или закрытие меню при нажатии на бургер
	burgerWrap.addEventListener('click', () => {
		header.classList.toggle('header_open');
		burgerWrap.classList.toggle('burger__wrap_close');
		burger.classList.toggle('burger_close');
		closeMenu();
	})

	// 
	function closeMenu() {
		document.querySelector('body').addEventListener('click', (e) => {
			const parentElement = e.target.closest('.header');
			if ((!parentElement) && (header.classList.contains('header_open'))) {
				header.classList.remove('header_open');
				burgerWrap.classList.remove('burger__wrap_close');
				burger.classList.remove('burger_close');
			}
		})
	}
}

export default showMenu;