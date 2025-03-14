const DAYS = 6;
const LIMIT= 30;
const n = 6;
const options = {weekday: "long"}

const today = new Date();

for (let i = 1; i <= DAYS; i++) {
    let nextday = new Date(today);
    nextday.setDate(today.getDate() + i);
    item = document.createElement("li");
    item.textContent = nextdaystring;
    output[0].appendChild(item);
}

let studdentReport = [11, 42, 33, 64, 29, 37, 44];

for (let i=0; i < studdentReport.length; i++) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    } 
    print(i);
}

let i = 0;
while (i < studentReport.length) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
    i++;
}

studentReport.forEach (function (item) {
    if (item < LIMIT) {
        console.log(item);
    }
});

for (let i in studentReport) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
}