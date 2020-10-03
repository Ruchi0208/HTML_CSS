const items = document.querySelectorAll('#timeline li');

const isInViewport = el => {
	const rect = el.getBoundingClientRect();
	return(
		rect.top >= 0 &&
		rect.left >= 0 &&
		rect.bottom <=
		(window.documentElement.clientHeight) && 
		rect.right <= (window.innerWidth ||
			document.documentElement.clientWidth)
		);
};

const run = () =>
	items.forEah(item => {
		if (isInViweport(item)) {
			item.classList.add('show');
		}
	});

//Events
window.addEventListener('load',run);
window.addEventListener('resize',run);
window.addEventListener('scroll',run);