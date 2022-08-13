const headerSearch = document.querySelector('.header__search');
const searchInput = headerSearch.querySelector('input[name="search-input"]');
const filterSection = document.querySelector('.main__filters');


searchInput.addEventListener('focus', (evt) => {
	evt.target.style.visibility = 'hidden';
	filterSection.classList.add('main__filters--show');

	const input = filterSection.querySelector('input[name="search-input"]');
	input.focus();
});

searchInput.addEventListener('blur', (evt) => {
	evt.target.style.visibility = 'hidden';
	filterSection.classList.add('main__filters--show');
	const input = filterSection.querySelector('input[name="search-input"]');
	input.focus();
});


// Сделать, чтобы по клику на область window, search показывался, при том, чтобы, если кликаешь на область main__filters (popup),
// окно не скрывалось и input в шапке не показывался




/*
	accordion
*/

const accordionButtons = document.querySelectorAll('.filters__group-accordion');

accordionButtons.forEach((accordionButton) => {
	accordionButton.addEventListener('click', () => {
		accordionButton.classList.toggle('filters__group-accordion--active');
		const wrapper = accordionButton.nextElementSibling;

		wrapper.style.display === 'block' ? wrapper.style.display = 'none' : wrapper.style.display = 'block';
	});
});