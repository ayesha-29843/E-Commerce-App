// navbar 

const open = document.getElementById('open');
const close = document.getElementById('close');
const nav = document.getElementById('nav');

if (open) {
	open.addEventListener('click', () => {
		nav.classList.add('active');
	})
	
}

if (close) {
	close.addEventListener('click', () => {
		nav.classList.remove('active');
	})
}