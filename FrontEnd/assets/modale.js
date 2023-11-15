// Récupération des éléments du DOM
const modalBtn = document.getElementById('modalBtn');
const closeModalBtn = document.getElementById('xmark')
const closeModalBtn2 = document.getElementsByClassName('closeModalBtn2');
const modal = document.getElementById('modal');
const modal2 = document.getElementById('modal2');
const contentTextarea = document.getElementById('contentTextarea');
const photoPlus = document.getElementById('photoPlus');
const publishBtnCloseMod = document.getElementById('publishBtn');
const valider = document.getElementById('valider');
const poubelle = document.getElementById('poubelleDiv');
const bandeauModal = document.getElementById('modalbtn');


// Ouvrir la fenêtre modale gallery
modalBtn.addEventListener('click', () => {
  modal.style.display = 'block';
  modalGallery();
});

//gallerie photos de l'api pour modale 
function modalGallery() {
  fetch("http://localhost:5678/api/works")
  .then(response => response.json())
  .then(data => {
    const imagesData = data;

    imagesData.forEach(image => {
      const figureElement = document.createElement("figure");
      const imgElement = document.createElement("img");
      const figCaptionElement = document.createElement("figcaption");
      const corbeille = document.createElement('i');

      imgElement.src = image.imageUrl;
      imgElement.alt = image.title;
      figCaptionElement.textContent = "éditer";

      //insérer l'icone "Corbeille"
      corbeille.innerHTML = `<i id="poubelleDiv" class="fas fa-trash-can"></i>`;
      figureElement.appendChild(corbeille);
      figureElement.appendChild(imgElement);
      figureElement.appendChild(figCaptionElement);
      contentTextarea.appendChild(figureElement);

    })
  })
};

//Fermer la fenêtre modale
closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
  contentTextarea.innerHTML = "";            //pour vider la modale
});

//Ouverture modal2 pour ajout
photoPlus.addEventListener('click', () => {
  modal.style.display = 'none';
  modal2.style.display = 'block';
});

// Récupération des données du formulaire.
const formData = new FormData(document.getElementById("photoForm"));
console.log(formData);

  // post newWork
  valider.addEventListener('submit', async (event) => {
    // On empêche le comportement par défaut
    event.preventDefault();

    // on récupère les données du formulaire dans une constante
    newElement = formData
console.log(newElement);
    // Envoi de la requête à l'API 
    fetch('http://localhost:5678/api/works', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newElement)  
    })
      .then(response => response.json())
      .then(data => {
        if (data) {
          window.location.href = "edit.html"
          modalGallery()
          }
        })
       // else {
          // La requête a échoué
       //  error.textContent = "Erreur"
      //  }
      }
    )


// retour arrowLeft
const arrowLeft = document.getElementById("arrowLeft")
arrowLeft.addEventListener('click', () => {
  modal2.style.display = 'none';
  modal.style.display = 'block';
})

// fermeture par xmark2
const xmark2 = document.getElementById("xmark2");
xmark2.addEventListener('click', () => {
  modal2.style.display = 'none';
  modal.style.display = 'none';
  contentTextarea.innerHTML = "";  //pour vider la modale
});


// Ajoute un écouteur d'événement `click` à l'élément `#modal`.

modal.addEventListener("click", function (event) {
  // Vérifie si l'événement a été déclenché à l'extérieur de la fenêtre modale.
  if (event.target.closest("#modal-content") === null) {
    modal2.style.display = 'none';
    modal.style.display = 'none';
    contentTextarea.innerHTML = "";
  }
});

modal2.addEventListener("click", function (event) {
  // Vérifie si l'événement a été déclenché à l'extérieur de la fenêtre modale.
  if (event.target.closest("#modal-content") === null) {
    modal2.style.display = 'none';
    modal.style.display = 'none';
    contentTextarea.innerHTML = "";
  }
});


/** 

// Événement pour valider une photo dans data
publishBtnCloseMod.addEventListener("click", (event) => {
  event.preventDefault();
  const inputTittle = document.querySelector("#inputTittle").value;
  formData.append("title", inputTittle);

  const selectorCategory = document.querySelector("#selectorCategory").value;
  formData.append("category", selectorCategory);
  createWorks();
});


// Fonction asynchrone pour créer une nouvelle œuvre
async function createWorks() {
  const token = sessionStorage.getItem("token");
  const response = await fetch("http://localhost:5678/api/works", {
    method: "POST",
    headers: {
      Accept: "application/json;charset=utf-8",
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });
}

// Fonction asynchrone pour supprimer une œuvre par son ID
async function deleteWorks(id) {
  const token = sessionStorage.getItem("token");
  const response = await fetch("http://localhost:5678/api/works/" + id, {
    method: "DELETE",
    headers: {
      Accept: "application/json;charset=utf-8",
      Authorization: `Bearer ${token}`,
    },
  });
  if (response.ok) {
    works = works.filter((work) => work.id !== id);
    displayWork();
  }
}

// Fonction pour supprimer une œuvre de la liste
let i = poubelle.id
function delework(i) {
  works.splice(i, 1);
  displayWork();
}
*/

/** 
// Fonction asynchrone pour supprimer une œuvre par son ID
async function deleteWorks(id) {
  const token = localStorage.getItem("token");
  const response = await fetch("http://localhost:5678/api/works/" + id, {
    method: "DELETE",
    headers: {
      Accept: "application/json;charset=utf-8",
      Authorization: `Bearer ${token}`,
    },
  });
  if (response.ok) {
    works = works.filter((work) => work.id !== id);
    displayWork();
  }
}
*/

/** 
//DELETE icone Corbeille
const corbeille = document.createElement('i');

poubelle.addEventListener("click", async (e) => {
  e.preventDefault();
  const cardDelete = e.target.parentNode.getAttribute("data-card-id");
  removeElement(cardDelete);
  deletedImages[cardDelete] = true;
  console.log(deletedImages);
  // Convertir l'objet en chaîne de caractères JSON
  const deletedImagesJSON = JSON.stringify(deletedImages);
  // Stocker JSON dans sessionStorage
  sessionStorage.setItem("deletedImages", deletedImagesJSON);
});
*/