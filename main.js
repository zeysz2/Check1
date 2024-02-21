//Toggle Responsive Nav
const menuSlide = () => {
    const burger = document.querySelector(".burger");
    const navMenu = document.querySelector(".navbar");

    burger.addEventListener("click", () => {
        burger.classList.toggle("toggle-burger");
        navMenu.classList.toggle("nav-active");
    });
};
menuSlide();