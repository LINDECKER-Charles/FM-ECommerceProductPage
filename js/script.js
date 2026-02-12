/* Menu Burger */
const burgerMenuOpen = document.querySelector("#burger-open");
const burgerMenuClose = document.querySelector("#burger-close");
const nav = document.querySelector("#nav-ul");

console.log(burgerMenuClose, burgerMenuOpen);

burgerMenuOpen.addEventListener("click", () => {
    nav.classList.remove("-translate-x-full");
    burgerMenuOpen.classList.add("opacity-0", "-rotate-90", "pointer-events-none");
    burgerMenuClose.classList.remove("opacity-0", "rotate-90", "pointer-events-none");
});

burgerMenuClose.addEventListener("click", () => {
    nav.classList.add("-translate-x-full");
    burgerMenuOpen.classList.remove("opacity-0", "-rotate-90", "pointer-events-none");
    burgerMenuClose.classList.add("opacity-0", "rotate-90", "pointer-events-none");
});

