const burger = document.querySelector('.burger');
const navbar = document.querySelector('.nvabar');

burger.addEventListener('click', nav_active);

function nav_active() {
	navbar.classList.toggle('active');
	// console.log('hi');
}
