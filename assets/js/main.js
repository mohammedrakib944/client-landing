// remove loader on load
window.onload = () => {
  setTimeout(() => {
    document.querySelector(".Loader").style.display = "none";
  }, 1500);
};

function showMenu() {
  document.querySelector(".navigation").classList.add("showNav");
}
function hideMenu() {
  document.querySelector(".navigation").classList.remove("showNav");
}

// nav bar added
window.onscroll = function () {
  let POS_Y = window.pageYOffset;
  document.querySelector(".straight-line").style.height = POS_Y + "px";

  const navi = document.querySelector(".navigation");
  let height = window.pageYOffset;
  if (height >= 50) navi.classList.add("afterScroll");
  else navi.classList.remove("afterScroll");
};

// swiper js
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
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
