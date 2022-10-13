const Menu = document.getElementById("dropmenu");
const Menubtn = document.getElementById("menuicon");
const Xbtn = document.getElementById("xicon");

// Menubtn.addEventListener("click", () => {
//   Menu.classList.toggle("hidden");
// });

Menubtn.addEventListener("click", () => {
  Menu.classList.toggle("hidden");
  Xbtn.classList.toggle("hidden");
  Menubtn.classList.toggle("hidden");
});
Xbtn.addEventListener("click", () => {
  Menu.classList.toggle("hidden");
  Xbtn.classList.toggle("hidden");
  Menubtn.classList.toggle("hidden");
});
