
//swipper  
var swiper = new Swiper(".bike-slider", {
	slidesPerView: 1,
	spaceBetween: 10,
	pagination: {
		el: ".swiper-pagination",
		dynamicBullets : true,
		clickable: true,
	},
	autoplay: {
		delay: 4000,
		//on click autoplay dont stop if false
		disableOnInteraction :false,
	},
	breakpoints: {
		320: {
		slidesPerView: 1,
		spaceBetween: 10,
		},
		510: {
		slidesPerView: 2,
		spaceBetween: 10,
		},
		758: {
		slidesPerView: 4,
		spaceBetween:15,
		},
		900: {
		slidesPerView: 4,
		spaceBetween: 20,
		},
	},
});