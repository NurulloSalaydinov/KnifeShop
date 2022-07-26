const NavbarFunction = () => {
  let navbarMenu = document.getElementById("navbar-menu");
  let navbarBurger = document.getElementById("navbar-burger");

  navbarBurger.onclick = () => {
    navbarBurger.classList.toggle("active");
    navbarMenu.classList.toggle("active");
  };
};

NavbarFunction();

const swiper5 = new Swiper(".swiper", {
	loop: true,
	autoplay: {
		delay: 3000,
	},
	direction: "vertical",
  	simulateTouch: false,
  	pagination: {
    	el: ".swiper-pagination",
	    clickable: true,
    	renderBullet: function (index, className) {
	      return `<span class="dot swiper-pagination-bullet">0${index + 1}</span>`;
    	},
	},
});

window.addEventListener("scroll", (e) => {
  if (window.scrollY > 30) {
    document.querySelector("nav").classList.add("scrolled");
  } else {
    document.querySelector("nav").classList.remove("scrolled");
  }
});

const HeaderContentAnimation = () => {
  let headerContent = document.querySelector(".header-content");
  if (headerContent) {
    let colors = ["#855FA8", "#62BFC4", "#FF6A00"];
    let colorIndex = 0;
    let time = 3000
    setInterval(() => {
      colorIndex += 1;
      if (colorIndex == colors.length) {
        colorIndex = 0;
      }
      headerContent.style.backgroundColor = colors[colorIndex];
    }, time);
  }
};

HeaderContentAnimation();
