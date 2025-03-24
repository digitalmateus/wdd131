const currentYear = new Date().getFullYear();
const lastModified = document.lastModified; 

const mainnav = document.querySelector(`.navigation`)
const hambutton = document.querySelector(`#menu`);

hambutton.addEventListener(`click`,() => {
    mainnav.classList.toggle(`show`);
    hambutton.classList.toggle(`show`);
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("currentYear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = document.lastModified;
});
