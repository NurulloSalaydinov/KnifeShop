const NavbarFunction = () => {
  let navbarMenu = document.getElementById("navbar-menu");
  let navbarBurger = document.getElementById("navbar-burger");

  navbarBurger.onclick = () => {
    navbarBurger.classList.toggle("active");
    navbarMenu.classList.toggle("active");
  };
};

NavbarFunction();

const NavbarAnimation = () => {
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;
      if (currentScrollPos > 100) {
        if (prevScrollpos > currentScrollPos) {
          document.querySelector("nav").classList.add('scrolled');
        } else {
          document.querySelector("nav").classList.remove('scrolled')
        }
        prevScrollpos = currentScrollPos;
      } else {
        document.querySelector("nav").classList.remove('scrolled')
      }
      if (window.scrollY > 100) {
        document.querySelector(".main-navbar").classList.add("hidden-now");
      } else {
        document.querySelector(".main-navbar").classList.remove("hidden-now");
      }
  };
};

NavbarAnimation();

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
