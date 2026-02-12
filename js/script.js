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

/* Slider */

const buttons = document.querySelectorAll("button");
const mainImg = document.querySelector("#current-image");
console.log(buttons);

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    button.setAttribute("aria-current", "true");
    button.children[0].classList.add("selected-img");
    button.children[1].classList.remove("hidden");

    mainImg.setAttribute("src", button.children[0].getAttribute("src").replace("-thumbnail", ""))
    buttons.forEach((b) => {
        if(b !== button){
            b.setAttribute("aria-current", "false");
            b.children[0].classList.remove("selected-img");
            b.children[1].classList.add("hidden");
        }
    });
  });
});