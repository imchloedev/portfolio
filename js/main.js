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

// main scrollBtn
let scrollBtn = document.querySelector(".scroll_btn");
let aboutTop = document.querySelector(".about").offsetTop;

scrollBtn.addEventListener("click", () => {
  window.scrollTo(0, aboutTop);
});

// header scroll event
let prevScrollTop = window.pageYOffset;

window.addEventListener("scroll", headerReveal);

function headerReveal() {
  let currScrollTop =
    window.pageYOffset || document.documentElement.scrollTop || window.scrollY;

  if (prevScrollTop < currScrollTop) {
    document.querySelector("header").classList.add("hide");
  } else {
    document.querySelector("header").classList.remove("hide");
  }

  prevScrollTop = currScrollTop;
}

// nav scroll event

window.addEventListener("scroll", navScrollProgress);

function navScrollProgress() {
  let scrollTop =
    (document.documentElement.scrollTop ||
      window.scrollY ||
      window.pageYOffset) +
    window.innerHeight / 10;

  let content = document.querySelectorAll(".content");

  content.forEach((element, index) => {
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

  if (scrollTop > content[1].offsetTop) {
    document.querySelector("header").classList.add("active");
  } else {
    document.querySelector("header").classList.remove("active");
  }

  if (scrollTop > content[3].offsetTop) {
    document.querySelector("header").classList.remove("active");
  }
}

// project content_item

window.addEventListener("scroll", projectReveal);

function projectReveal() {
  let scrollTop =
    (document.documentElement.scrollTop ||
      window.scrollY ||
      window.pageYOffset) +
    window.innerHeight / 2;

  document.querySelectorAll(".content_item").forEach((item) => {
    if (scrollTop > item.offsetTop) {
      item.classList.add("show");
    } else {
      item.classList.remove("show");
    }
  });
}
