const NavbarFunction = () => {
	let navbarMenu = document.getElementById('navbar-menu');
	let navbarBurger = document.getElementById('navbar-burger');

	navbarBurger.onclick = () => {
		navbarBurger.classList.toggle('active');
		navbarMenu.classList.toggle('active');
	}
};

NavbarFunction();


const NavbarAnimation = () => {
	let navbarItem = document.querySelectorAll('.navbar-link');
	let navbarBar = document.getElementById('animation-bar');
	navbarItem.forEach(elem => {
		elem.onmouseover = (e) => {
			navbarBar.style.display = 'block';
			navbarBar.style.width = e.target.clientWidth + 'px';
			navbarBar.style.left = e.target.offsetLeft + 'px';
		};
	});
};

NavbarAnimation();

const swiper = new Swiper('.swiper', {
  direction: 'vertical',
  grabCursor: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="dot swiper-pagination-bullet">0${index+1}</span>`;
    },
  },
});


window.addEventListener('scroll', (e) => {
	if (window.scrollY > 30) {
		document.querySelector('nav').classList.add('scrolled');
	}
	else {
		document.querySelector('nav').classList.remove('scrolled');
	}
});

const HeaderContentAnimation = () => {
	let headerContent = document.querySelector('.header-content');
	if (headerContent) {
		let colors = ['#855FA8', '#62BFC4', '#FF6A00'];
		let colorIndex = 0;
		setInterval(() => {
			colorIndex += 1;
			if (colorIndex == colors.length) {
				colorIndex = 0;
			};
			headerContent.style.backgroundColor = colors[colorIndex];
		}, 5000);
	}
};

HeaderContentAnimation();