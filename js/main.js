//  main slide
new Swiper(".main", {
  slidesPerView: "auto",
  slidesPerGroup: 3,
  spaceBetween: 20,
  slidesOffsetAfter: 40,
  navigation: {
    nextEl: ".next1",
    prevEl: ".prev1",
  },
});
var swiper = new Swiper(".icon", {
  slidesPerView: "auto",
  slidesPerGroup: 3,
  spaceBetween: 40,
  navigation: {
    nextEl: ".next2",
    prevEl: ".prev2",
  },
});

new Swiper(".solution", {
  slidesPerView: "auto",
  slidesPerGroup: 3,
  slidesOffsetAfter: 170,
  navigation: {
    nextEl: ".next3",
    prevEl: ".prev3",
  },
});

new Swiper(".business", {
  slidesPerView: "auto",
  slidesPerGroup: 3,
  spaceBetween: 20,
  slidesOffsetAfter: 40,
  navigation: {
    nextEl: ".next4",
    prevEl: ".prev4",
  },
});

$(document).ready(function () {
  $(".tab-menu a").click(function (event) {
    event.preventDefault();

    $(this)
      .addClass("active")
      .parent()
      .siblings()
      .find("a")
      .removeClass("active");

    $($(this).attr("href")).addClass("active").siblings().removeClass("active");
  });
});

// next page
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("a:not(.exclude)");
  links.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      window.location.href = "../page/detail.html";
    });
  });
});
