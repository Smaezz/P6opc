//gallerie photos de l'api
const gallery = document.getElementById("gallery");
const figure = document.getElementById("figure");

fetch("http://localhost:5678/api/works")
  .then((response) => response.json())
  .then((data) => {
    const imagesData = data;
    imagesData.forEach((image) => {
      const figureElement = document.createElement("figure");
      const imgElement = document.createElement("img");
      const figCaptionElement = document.createElement("figcaption");

      imgElement.src = image.imageUrl;
      imgElement.alt = image.title;
      figCaptionElement.textContent = image.title;
      figureElement.appendChild(imgElement);
      figureElement.appendChild(figCaptionElement);
      gallery.appendChild(figureElement);
    });
  })
  .catch((error) => {});

//sans filtre >> bouton1
const button1 = document.querySelector(".b1");
button1.classList.add("hover");

button1.addEventListener("click", () => {
  button1.classList.add("hover");
  button2.classList.remove("hover");
  button3.classList.remove("hover");
  button4.classList.remove("hover");
  document.getElementById("gallery").innerHTML = "";
  fetch("http://localhost:5678/api/works")
    .then((response) => response.json())
    .then((data) => {
      const imagesData = data;
      imagesData.forEach((image) => {
        const figureElement = document.createElement("figure");
        const imgElement = document.createElement("img");
        const figCaptionElement = document.createElement("figcaption");

        imgElement.src = image.imageUrl;
        imgElement.alt = image.title;
        figCaptionElement.textContent = image.title;
        figureElement.appendChild(imgElement);
        figureElement.appendChild(figCaptionElement);
        gallery.appendChild(figureElement);
      });
    })
    .catch((error) => {});
});

//filtre objets >> bouton2
const button2 = document.querySelector(".b2");

button2.addEventListener("click", () => {
  button1.classList.remove("hover");
  button2.classList.add("hover");
  button3.classList.remove("hover");
  button4.classList.remove("hover");
  document.getElementById("gallery").innerHTML = "";
  fetch("http://localhost:5678/api/works")
    .then((response) => response.json())
    .then((data) => {
      const objetsData = data;
      const filtreObjets = data.filter(
        (element) => element.category.name === "Objets"
      );
      filtreObjets.forEach((image) => {
        const figureElement = document.createElement("figure");
        const imgElement = document.createElement("img");
        const figCaptionElement = document.createElement("figcaption");

        imgElement.src = image.imageUrl;
        imgElement.alt = image.title;
        figCaptionElement.textContent = image.title;
        figureElement.appendChild(imgElement);
        figureElement.appendChild(figCaptionElement);
        gallery.appendChild(figureElement);
      });
    });
});

//filtre Appartements bouton3

const button3 = document.querySelector(".b3");

button3.addEventListener("click", () => {
  button1.classList.remove("hover");
  button2.classList.remove("hover");
  button3.classList.add("hover");
  button4.classList.remove("hover");
  document.getElementById("gallery").innerHTML = "";
  fetch("http://localhost:5678/api/works")
    .then((response) => response.json())
    .then((data) => {
      const appartementsData = data;
      const filtreAppartements = data.filter(
        (element) => element.category.name === "Appartements"
      );
      filtreAppartements.forEach((image) => {
        const figureElement = document.createElement("figure");
        const imgElement = document.createElement("img");
        const figCaptionElement = document.createElement("figcaption");

        imgElement.src = image.imageUrl;
        imgElement.alt = image.title;
        figCaptionElement.textContent = image.title;
        figureElement.appendChild(imgElement);
        figureElement.appendChild(figCaptionElement);
        gallery.appendChild(figureElement);
      });
    });
});

//filtre Hotel et restaurants
const button4 = document.querySelector(".b4");

button4.addEventListener("click", () => {
  button1.classList.remove("hover");
  button2.classList.remove("hover");
  button3.classList.remove("hover");
  button4.classList.add("hover");
  document.getElementById("gallery").innerHTML = "";
  fetch("http://localhost:5678/api/works")
    .then((response) => response.json())
    .then((data) => {
      const hotelsData = data;
      const filtreHotel = data.filter(
        (element) => element.category.name === "Hotels & restaurants"
      );
      filtreHotel.forEach((image) => {
        const figureElement = document.createElement("figure");
        const imgElement = document.createElement("img");
        const figCaptionElement = document.createElement("figcaption");

        imgElement.src = image.imageUrl;
        imgElement.alt = image.title;
        figCaptionElement.textContent = image.title;
        figureElement.appendChild(imgElement);
        figureElement.appendChild(figCaptionElement);
        gallery.appendChild(figureElement);
      });
    });
});

function afficherBandeau(token) {
  const bandeauModal = document.getElementById("bandeauModal");
  const modalBtnTitle = document.getElementById("modalBtnTitle");
  if (token) {
    bandeauModal.style.display = "flex";
    modalBtnTitle.style.display = "block";
  } else {
    bandeauModal.style.display = "none";
    modalBtnTitle.style.display = "none";
  }
}
const token = sessionStorage.getItem("token");

afficherBandeau(token);
