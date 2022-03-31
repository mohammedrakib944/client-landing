// remove loader on load
window.onload = () => {
  setTimeout(() => {
    document.querySelector(".Loader").style.display = "none";
  }, 1500);
};

// nav bar added
window.onscroll = function () {
  const navi = document.querySelector(".navigation");
  let height = window.pageYOffset;
  if (height >= 50) navi.classList.add("afterScroll");
  else navi.classList.remove("afterScroll");
};

// swiper js
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 6,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
