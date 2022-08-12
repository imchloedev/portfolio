// loader
function isLoading() {
  setTimeout(() => {
    document.querySelector(".loader").classList.add("remove");
    document.querySelector("body").classList.remove("fixed");
  }, 3000);
}

isLoading();

// mNav Btn
let navBtn = document.querySelector(".nav_btn button");
let mNav = document.querySelector(".mNav");

navBtn.addEventListener("click", () => {
  navBtn.classList.toggle("nav_btn_active");
  mNav.classList.toggle("open");
  document.querySelector("body").classList.toggle("fixed");
});

document.querySelectorAll(".mNav ul li a").forEach((el) => {
  el.addEventListener("click", (e) => {
    mNav.classList.remove("open");
    navBtn.classList.remove("nav_btn_active");
    document.querySelector("body").classList.remove("fixed");
  });
});

// main/scrollBtn
let scrollBtn = document.querySelector(".scroll_btn");
let aboutTop = document.querySelector(".about").offsetTop;

scrollBtn.addEventListener("click", () => {
  window.scrollTo(0, aboutTop);
});

// scroll event
let prevScrollTop = window.pageYOffset;

window.addEventListener("scroll", () => {
  let currScrollTop =
    window.pageYOffset || document.documentElement.scrollTop || window.scrollY;

  if (prevScrollTop < currScrollTop) {
    document.querySelector("header").classList.add("hide");
  } else {
    document.querySelector("header").classList.remove("hide");
  }

  prevScrollTop = currScrollTop;

  if (currScrollTop > aboutTop - 80) {
    document.querySelector("header").classList.add("active");
  } else {
    document.querySelector("header").classList.remove("active");
  }

  if (currScrollTop > document.querySelector(".contact").offsetTop - 80) {
    document.querySelector("header").classList.remove("active");
  } else {
    document.querySelector("header").classList.add("active");
  }

  scrollProgress();
});

function scrollProgress() {
  let scrollTop =
    (document.documentElement.scrollTop ||
      window.scrollY ||
      window.pageYOffset) +
    window.innerHeight / 2;

  // content

  document.querySelectorAll(".content").forEach((element, index) => {
    if (scrollTop >= element.offsetTop) {
      document.querySelectorAll(".nav li").forEach((li) => {
        li.classList.remove("active");
      });
      document.querySelectorAll(".mNav li").forEach((li) => {
        li.classList.remove("active");
      });

      document
        .querySelector(".nav li:nth-child(" + (index + 1) + ")")
        .classList.add("active");
      document
        .querySelector(".mNav li:nth-child(" + (index + 1) + ")")
        .classList.add("active");
    }
  });

  // content_item
  document.querySelectorAll(".content_item").forEach((item) => {
    if (scrollTop > item.offsetTop) {
      item.classList.add("show");
    }
  });
}
