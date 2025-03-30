const currentYear = new Date().getFullYear();
const lastModified = document.lastModified; 

const mainnav = document.querySelector(`.navigation`)
const hambutton = document.querySelector(`#menu`);

const oldTemplesLink = document.querySelector("#oldTemples");
const newTemplesLink = document.querySelector("#newTemples");
const smallTemplesLink = document.querySelector("#smallTemples");
const largeTemplesLink = document.querySelector("#largeTemples");
const allTemplesLink = document.querySelector("#allTemples");

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...
    {
        templeName: "Campinas Temple",
        location: "Campinas, Brazil",
        dedicated: "2022, May, 17",
        area: 48100,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/campinas-brazil-temple/campinas-brazil-temple-6012-main.jpg"
      },


      {
        templeName: "São Paulo Temple",
        location: "São Paulo, Brazil",
        dedicated: "1978, November, 2",
        area: 59246,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/_temp/017-S%C3%A3o-Paulo-Brazil-Temple.jpg"
      },

      {
        templeName: "Salvador Brazil Temple",
        location: "Salvador, Brazil",
        dedicated: "2024, October, 20",
        area: 29963,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/salvador-brazil-temple/salvador-brazil-temple-51668-main.jpg"
      }

  ];



createTempleCard(temples);

oldTemplesLink.addEventListener("click", () => {
  createTempleCard(temples.filter(temple => temple.dedicated.includes("18")));
});

newTemplesLink.addEventListener("click", () => {
  createTempleCard(temples.filter(temple => temple.dedicated.includes("202")));
});

smallTemplesLink.addEventListener("click", () => {
  createTempleCard(temples.filter(temple => temple.area < 20000));
});

largeTemplesLink.addEventListener("click", () => {
  createTempleCard(temples.filter(temple => temple.area >= 20000));
});

allTemplesLink.addEventListener("click", () => {
  createTempleCard(temples);
});


function createTempleCard(filteredTemples) {
    document.querySelector(".temple-grid").innerHTML = "";
    filteredTemples.forEach(temple => {
      let card = document.createElement("section");
      let name = document.createElement("h3");
      let location = document.createElement("p");
      let dedication = document.createElement("p");
      let area = document.createElement("p");
      let img = document.createElement("img");
    
    
        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");
        img.setAttribute("width", "400");
        img.setAttribute("height","300");


        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        document.querySelector(".temple-grid").appendChild(card);

    });
}


hambutton.addEventListener(`click`,() => {
    mainnav.classList.toggle(`show`);
    hambutton.classList.toggle(`show`);
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("currentYear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = document.lastModified;
});
