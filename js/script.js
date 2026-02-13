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
const buttons = document.querySelectorAll("li > button");
const mainImg = document.querySelector("#current-image");
const mainImgMobile = document.querySelector("#current-image-mobile");
console.log(buttons);



buttons.forEach((button) => {
  button.addEventListener("click", () => {
    button.setAttribute("aria-current", "true");
    button.children[0].classList.add("selected-img");

    mainImg.setAttribute("src", button.children[0].getAttribute("src").replace("-thumbnail", ""))
    mainImgMobile.setAttribute("src", button.children[0].getAttribute("src").replace("-thumbnail", ""))
    buttons.forEach((b) => {
        if(b !== button){
            b.setAttribute("aria-current", "false");
            b.children[0].classList.remove("selected-img");
        }
    });
  });
});

/* Cart */

const output = document.querySelector("output");
const addButton = document.querySelector("#add");
const minusButton = document.querySelector("#decrase");

const sumbit = document.querySelector('[type="submit"]');
const cartDisplay = document.querySelector("#cart-badge");

console.log(output, sumbit);

let cartTotal = 0;
let itemTotal = 0;

addButton.addEventListener("click", () => {
    itemTotal++;
    output.textContent = itemTotal;
});

minusButton.addEventListener("click", () => {
    if(itemTotal > 0){
        itemTotal--;
        output.textContent = itemTotal;
    }
});

sumbit.addEventListener("click", () => {
    cartTotal += itemTotal;
    itemTotal = 0;
    output.textContent = itemTotal;
    updateCart();
});

function updateCart(){
    cartDisplay.textContent = cartTotal;
    if(cartTotal > 0){
        cartDisplay.classList.remove("hidden");
    }
}

/* Mobile Slider */
const mobileNext = document.querySelector("#mobile-next");
const mobilePrevious = document.querySelector("#mobile-previous");
const mobileNextModal = document.querySelector("#mobile-next-modal");
const mobilePreviousModal = document.querySelector("#mobile-previous-modal");

const imgsListe = ["image-product-1.jpg", "image-product-2.jpg", "image-product-3.jpg", "image-product-4.jpg"]

let imageIndex = 0;

mobileNext.addEventListener("click", () => {
    if(imageIndex + 1 >= imgsListe.length){
        imageIndex = 0;
    }else{
        imageIndex++;
    }
    updateImg();
});

mobilePrevious.addEventListener("click", () => {
    if(imageIndex - 1 < 0){
        imageIndex = imgsListe.length - 1;
    }else{
        imageIndex--;
    }
    updateImg();
});

mobileNextModal.addEventListener("click", () => {
    if(imageIndex + 1 >= imgsListe.length){
        imageIndex = 0;
    }else{
        imageIndex++;
    }
    updateImg();
});

mobilePreviousModal.addEventListener("click", () => {
    if(imageIndex - 1 < 0){
        imageIndex = imgsListe.length - 1;
    }else{
        imageIndex--;
    }
    updateImg();
});

function updateImg(){
    mainImg.setAttribute("src", "assets/images/" + imgsListe[imageIndex]);
    mainImgMobile.setAttribute("src", "assets/images/" + imgsListe[imageIndex]);
}

/* Ouverture/fermeture du modal */

const closeBtn = document.querySelector("#close");
const modal = document.querySelector("#modal");
const overlay = document.querySelector("#overlay");

closeBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
});

mainImg.addEventListener("click", () => {
    if (window.matchMedia("(min-width: 768px)").matches) {
        modal.classList.remove("hidden");
        overlay.classList.remove("hidden");
    }
});

const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // bloque la soumission
});