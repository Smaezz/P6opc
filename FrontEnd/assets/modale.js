// Récupération des éléments du DOM
const modalBtn = document.getElementById("modalBtn");
const closeModalBtn = document.getElementById("xmark");
const closeModalBtn2 = document.getElementsByClassName("closeModalBtn2");
const modal = document.getElementById("modal");
const modal2 = document.getElementById("modal2");
const contentTextarea = document.getElementById("contentTextarea");
const photoPlus = document.getElementById("photoPlus");
const publishBtnCloseMod = document.getElementById("publishBtn");
const valider = document.getElementById("valider");
const bandeauModal = document.getElementById("modalbtn");
const photoForm = document.getElementById("photoForm");
const figureElement = document.createElement("figure");
const imgElement = document.createElement("img");
const figCaptionElement = document.createElement("figcaption");
const corbeille = document.createElement("i");
corbeille.innerHTML = `<i id="poubelleDiv" class="fas fa-trash-can"></i>`;
const poubelle = document.getElementById("poubelleDiv");

// Ouvrir la fenêtre modale gallery
modalBtn.addEventListener("click", () => {
  modal.style.display = "block";
  modalGallery();
});

//gallerie photos de l'api pour modale
function modalGallery() {
  fetch("http://localhost:5678/api/works")
    .then((response) => response.json())
    .then((data) => {
      const imagesData = data;

      imagesData.forEach((image) => {
        const figureElement = document.createElement("figure");
        const imgElement = document.createElement("img");
        const figCaptionElement = document.createElement("figcaption");
        const corbeille = document.createElement("i");
                
        imgElement.src = image.imageUrl;
        imgElement.alt = image.title;
        // figCaptionElement.textContent = "éditer";
        corbeille.innerHTML = `<i id="poubelleDiv" class="fas fa-trash-can"></i>`;
        corbeille.addEventListener("click", () => {
          console.log(image.id);
                deleteWork(image.id);
        })
        // insérer l'icone "Corbeille"
        figureElement.appendChild(corbeille);
        figureElement.appendChild(imgElement);
        figureElement.appendChild(figCaptionElement);
        contentTextarea.appendChild(figureElement);    
      });     
    });
}

// Fermer la fenêtre modale
closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
  contentTextarea.innerHTML = ""; //pour vider la modale
});

// Ouverture modal2 pour ajout
photoPlus.addEventListener("click", () => {
  modal.style.display = "none";
  modal2.style.display = "block";
});

// post newWork


// Ajouter un projet
async function addWork(event) {
  event.preventDefault();
  const token = sessionStorage.getItem("token");
  const title = document.getElementById("titre").value;
  const category = document.getElementById("categorie").value;
  const image = document.getElementById("photoF").files[0];


  if (title === "" || category === "" || image === undefined) {
      alert("Merci de remplir tous les champs");
      return;
  } else if (category !== "1" && category !== "2" && category !== "3") {
      alert("Merci de choisir une catégorie valide");
      return;
      } else {
  try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("category", category);
      formData.append("image", image);

      const response = await fetch("http://localhost:5678/api/works", {
          method: "POST",
          headers: {
              Authorization: `Bearer ${token}`,
          },
          body: formData,
      });

      if (response.status === 201) {
          alert("Projet ajouté avec succès :)");          
      } else if (response.status === 400) {
          alert("Merci de remplir tous les champs");
      } else if (response.status === 500) {
          alert("Erreur serveur");
      } else if (response.status === 401) {
          alert("Vous n'êtes pas autorisé à ajouter un projet");
          window.location.href = "connexion.html";
  }}

  catch (error) {
      console.log(error);
}

}};
// retour arrowLeft
const arrowLeft = document.getElementById("arrowLeft");
arrowLeft.addEventListener("click", () => {
  modal2.style.display = "none";
  modal.style.display = "block";
});
photoForm.addEventListener('submit', async (event) => {
  addWork(event);
})

// fermeture par xmark2
const xmark2 = document.getElementById("xmark2");
xmark2.addEventListener("click", () => {
  modal2.style.display = "none";
  modal.style.display = "none";
  contentTextarea.innerHTML = ""; //pour vider la modale
});

// Ajoute un écouteur d'événement `click` à l'élément `#modal`.

modal.addEventListener("click", function (event) {
  // Vérifie si l'événement a été déclenché à l'extérieur de la fenêtre modale.
  if (event.target.closest("#modal-content") === null) {
    modal2.style.display = "none";
    modal.style.display = "none";
    contentTextarea.innerHTML = "";
  }
});

modal2.addEventListener("click", function (event) {
  // Vérifie si l'événement a été déclenché à l'extérieur de la fenêtre modale.
  if (event.target.closest("#modal-content2") === null) {
    modal2.style.display = "none";
    modal.style.display = "none";
    contentTextarea.innerHTML = "";
  }
});

// Supprimer un projet
function deleteWork(id) {
  const token = sessionStorage.getItem("token");
  // const id = 24;
fetch(`http://localhost:5678/api/works/${id}`, {
  method: "DELETE",
  headers: { Authorization: `Bearer ${token}`},
})

.then (response => {
  if (response.status === 204) {
    alert("Element supprimé avec succés")
    return modalGallery();
  }
  // Token incorrect
  if (response.status === 401) {
      alert("Vous n'êtes pas autorisé à supprimer ce projet, merci de vous connecter avec un compte valide")
      window.location.href = "connexion.html";
  }
})
.catch (error => {
  console.log(error)
});
};

  