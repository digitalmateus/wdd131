const currentYear = new Date().getFullYear();
const lastModified = document.lastModified; 
const temperature = 5;
const windSpeed = 10;

function calculateWindChill(temp, speed) {
    return (13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)).toFixed(2);
}

window.onload = function() {
    const windChillValueElement = document.getElementById("windChillValue");

    if (temperature <= 10 && windSpeed > 4.8) {
        const windChill = calculateWindChill(temperature, windSpeed);
        windChillValueElement.innerText = `${windChill} °C`;
    } else {
        windChillValueElement.innerText = "N/A";
    }
}