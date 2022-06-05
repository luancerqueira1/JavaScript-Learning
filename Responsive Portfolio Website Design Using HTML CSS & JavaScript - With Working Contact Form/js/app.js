const menu = document.querySelector(".menu-icon");

menu.onclick = () => {
	menu.classList.toggle('move')
}
//revies swiper
var swiper = new Swiper(".reviews-content", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
	},
  
});