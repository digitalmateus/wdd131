const currentYear = new Date().getFullYear();
const lastModified = document.lastModified; 

// form validation
function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const plan = document.getElementById("plan").value;

    if (name === "" || email === "" || plan === "") {
        alert("Please fill out all fields.");
        return false;
    }
    return true;
}


document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("currentYear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = document.lastModified;
});