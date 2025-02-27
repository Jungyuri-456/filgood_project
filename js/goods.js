window.onload = function () {
  var swiper = new Swiper(".listSwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
    slidesPerView: 1,
    spaceBetween: 1,

    breakpoints: {
      390: {
        slidesPerView: 1,
        spaceBetween: 1,
      },
      768: {
        slidesPerView: 1.5,
        spaceBetween: 1,
      },
      900: {
        slidesPerView: 2,
        spaceBetween: 5,
      },
      1200: {
        slidesPerView: 2.5,
        spaceBetween: 5,
      },
      1500: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
    },
  });
  const itemHover = document.querySelectorAll(".goods-pic");
  const iconHover = document.querySelectorAll(".hover-icon");
  itemHover.forEach(function (itemHover, index) {
    itemHover.addEventListener("mouseenter", function () {
      itemHover.style.filter = "blur(5px)";
      iconHover[index].style.display = "flex";
    });
    itemHover.addEventListener("mouseleave", function () {
      itemHover.style.filter = "none";
      iconHover[index].style.display = "none";
    });
  });
};
