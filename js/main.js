let navBtn = document.querySelector(".nav_btn button");
let nav = document.querySelector("nav");

navBtn.addEventListener("click", () => {
  navBtn.classList.toggle("nav_btn_active");
  nav.classList.toggle("nav_open");
});


let blog = document.querySelector('.blog');
let subMenu = document.querySelector('.submenu')

blog.addEventListener('click', () => {
  blog.classList.toggle('blog_active');
  subMenu.classList.toggle('submenu_open')
})