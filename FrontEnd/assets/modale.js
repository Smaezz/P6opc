// Récupération des éléments du DOM
const modalBtn = document.getElementById('modalBtn');
const closeModalBtn = document.getElementById('closeModalBtn')
const closeModalBtn2 = document.getElementsByClassName('closeModalBtn2');
const modal = document.getElementById('modal');
const modal2 = document.getElementById('modal2');
const contentTextarea = document.getElementById('contentTextarea');
const photoPlus = document.getElementById('photoPlus');
const publishBtnCloseMod = document.getElementById('publishBtn');
const valider = document.getElementById('valider');
const poubelleDiv = document.getElementById('poubelleDiv');

// Ouvrir la fenêtre modale
  modalBtn.addEventListener('click', () => {
  modal.style.display = 'block';
  
  //gallerie photos de l'api pour modale 
fetch("http://localhost:5678/api/works")
  .then(response => response.json())
  .then(data => {
    const imagesData = data;
  
    imagesData.forEach(image => {
      const figureElement = document.createElement("figure");
      const imgElement = document.createElement("img");
      const figCaptionElement = document.createElement("figcaption");
      const corbeille = document.createElement('i');
      corbeille.textContent = "Corbeille";
  
      imgElement.src = image.imageUrl;
      imgElement.alt = image.title;
      figCaptionElement.textContent = "éditer";

//insérer l'icone à la place du texte "Corbeille"
corbeille.innerHTML = `<i id="poubelleDiv" class="fas fa-trash-can"></i>`;

      figureElement.appendChild(corbeille);
      figureElement.appendChild(imgElement);
      figureElement.appendChild(figCaptionElement);
      contentTextarea.appendChild(figureElement);
    
    });
  })
  .catch(error => {
  });

  }); 
  
/**** delete image  ****/
/*const trashButton = document.querySelectorAll(".far-trash-can");

trashButton.forEach((trash) =>
  trash.addEventListener("click", function (e) {
    let figure = this.parentNode;
    let idPhoto = figure.id;

    async function deleteProject() {
      await fetch(`${url}/${idPhoto}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${controlToken}`,
        },
      }).then(function (response) {
        if (response.status === 204) {
          figure.remove();
          let figureDelete = figure.id;
          const figureToDelete = document.getElementById(figureDelete);
          figureToDelete.remove();
        } else if (response.status === 401) {
          resStatus = response.status;
          alertModalGallery.style.display = "flex";
          alertModalGallery.innerHTML =
            "Vous n'avez pas les autorisations pour effacer le fichier, statut " +
            resStatus;
        } else {
          resStatus = response.status;
          alertModalGallery.style.display = "flex";
          alertModalGallery.innerHTML =
            "Impossible d'effacer le fichier, problème d'accès à l'API." +
            resStatus;
        }
      });
    }
    deleteProject();
    })
  );                           */
//buildWorks();

// Fermer la fenêtre modale
    //closeModalBtn.addEventListener('click', () => {
        //modal.style.display = 'none';
//});
// Ouverture modal2
    photoPlus.addEventListener('click',() => {
        modal.style.display = 'none';
        modal2.style.display = 'block';        
})
// Ajouter une photo à la modale
  valider.addEventListener('click',() => {
  const photo = document.getElementById('photo').value;
  const titre = document.getElementById('titre').value;
  const categorie = document.getElementById('categorie').value;
  let content = {photo: photo,titre: titre,categorie: categorie
    }

    // add new work in modal
function addNewWorkInModal() {
    let project = {
      id: works.length + 1,
      img: addedImage,
      caption: "éditer",
    };
    addNewProject(project, galleryOfModal, true);
  }
/**** add new work  in gallery ****/
function addNewWorkGallery() {
    let project = {
      id: works.length + 1,
      img: addedImage,
      caption: title.value,
      alt: title.value,
    };
    addNewProject(project, gallery, false);
  }
    /**** function to create a job ****/
function addNewProject(project, container, isModal) {
    let idPhoto = project.id;
    let figure = document.createElement("figure");
    figure.id = idPhoto;
    figure.className = "figure-gallery";
    let img = document.createElement("img");
    img.src = project.img;
    img.alt = project.alt;
    figure.appendChild(img);
    let figcaption = document.createElement("figcaption");
    figcaption.innerHTML = project.caption;
    figure.appendChild(figcaption);
    if (isModal) {
      let trashGallery = document.createElement("i");
      trashGallery.className = "fa-solid fa-trash-can trash";
      trashGallery.innerHTML = "";
      figure.appendChild(trashGallery);
    }
    container.appendChild(figure);
  }
    //fermeture modale2
    console.log(content);
    modal2.style.display = 'none';  
    modal.style.display = 'block';
})
    /*content(image => {
        const figureElement = document.createElement("figure");
        const imgElement = document.createElement("img");
        const figCaptionElement = document.createElement("figcaption");
  
        imgElement.src = image.imageUrl;
        imgElement.alt = image.title;
        figCaptionElement.textContent = "Editer";
        figureElement.appendChild(imgElement);
        figureElement.appendChild(figCaptionElement);
        contentTextarea.appendChild(figureElement);
        figCaptionElement.setAttribute("style", "width: 35px; height: 14px;font-familly: Work Sans; font-weight: 400; font-size: 12px;")

}) 
  })*/
// Publier les changements
 /* fetch('http://localhost:5678/api/works', {
    method: 'POST',
    headers: {    
       'Content-Type': 'application/json'
    },
    body: JSON.stringify(content)
    })
  //console.log(content);
  //modal.style.display = 'none';  */
