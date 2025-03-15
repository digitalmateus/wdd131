const currentYear = new Date().getFullYear();
const lastModified = document.lastModified; 


document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("currentYear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = document.lastModified;
});
