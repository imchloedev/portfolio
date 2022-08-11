// window.addEventListener("DOMContentLoaded", function () {
//   setTimeout(() => {
//     document.querySelector(".loader").style.display = "none";
//     document.querySelector("body").style.overflow = "auto";
//   }, 3000);
// });



function isLoading() {
    setTimeout(() => {
    document.querySelector(".loader").classList.add('remove');
    document.querySelector("body").style.overflow = "auto";
  }, 3000);
}

isLoading();



let navBtn = document.querySelector(".nav_btn button");
let nav = document.querySelector("nav");

navBtn.addEventListener("click", () => {
  navBtn.classList.toggle("nav_btn_active");
  nav.classList.toggle("nav_open");
});

let blog = document.querySelector(".blog");
let subMenu = document.querySelector(".submenu");

blog.addEventListener("click", () => {
  blog.classList.toggle("blog_active");
  subMenu.classList.toggle("submenu_open");
});

let scrollBtn = document.querySelector(".scroll_btn");

scrollBtn.addEventListener("click", () => {
  let aboutTop = document.querySelector(".about").offsetTop;
  window.scrollTo(0, aboutTop);
});
