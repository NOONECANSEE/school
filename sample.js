const mobile_nav = document.querySelector("#open");
const mobile_nav1 = document.querySelector("#close");
const nav_header = document.querySelector(".header");

const toggleNavbar = () => {
  // alert("Plz Subscribe ");
  nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());
mobile_nav1.addEventListener("click", () => toggleNavbar());
mobile_nav.addEventListener("click", () => {
  document.querySelector(".text").style.display = "none";
});
mobile_nav1.addEventListener("click", () => {
  document.querySelector(".text").style.display = "flex";
});
