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
      //corbeille.textContent = "Corbeille";
  
      imgElement.src = image.imageUrl;
      imgElement.alt = image.title;
      figCaptionElement.textContent = "éditer";

//insérer l'icone à la place du texte "Corbeille"
  corbeille.innerHTML = `<i id="poubelleDiv" class="fas fa-trash-can"></i>`;
    //imgElement.appendChild(corbeille)
    figureElement.appendChild(corbeille);
    figureElement.appendChild(imgElement);
    figureElement.appendChild(figCaptionElement);
    contentTextarea.appendChild(figureElement);
    console.log(corbeille);
    // delete = 
  
      corbeille.addEventListener("click", () => {
      figureElement.remove();
      });


  })

  }); 
  });
//Fermer la fenêtre modale
    closeModalBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        contentTextarea.innerHTML="";            //pour vider la modale
    });

  // Supprimer un objet de la Gallerie
   /**** delete image  ****/
   /*const boutonsCorbeille = document.querySelectorAll(".fas.fa-trash-can");
console.log(boutonsCorbeille);
if (boutonsCorbeille.length > 0) {
  boutonsCorbeille.forEach(boutonCorbeille => {
    boutonCorbeille.addEventListener("click", function (e) {
      let figure = boutonCorbeille.parentNode;
      figure.remove();
    });
  });
}    */
   /*trashButton.forEach((trash) => {
   
     trashButton.addEventListener("click", function (e) {
       let figure = trashButton.parentNode;
       let idPhoto = figure.id;
       async function deleteProject() {
         await fetch(`http://localhost:5678/api/works/{id}`, {
           method: "DELETE",
           headers: {
            'Content-Type': 'application/json'
          },
           body: {
           "id": idPhoto,
           "title": titreNew,
           "imageUrl": "string",
           "categoryId": categorie,
           "userId": "",
          }
         }).then(function (response) {
           if (response.status === 200) {
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
    });
  */
//Ouverture modal2 pour ajout
    photoPlus.addEventListener('click',() => {
        modal.style.display = 'none';
        modal2.style.display = 'block';        
});

//fetch post work
async function fetchUser () {
  const r = await fetch("http://localhost:5678/api/works",{
  method:'POST',
  headers: { 
             "Accept": "application/json",
             "Content-Type": "application/json" 
             },
             body: JSON.stringify({title: "mon premier titre"})
            })
             if (r.ok === true) {
              return r.json();
             }
             throw new Error ('impossible de contacter le serveur')
}

fetchUser().then(users=> console.log(users));

/*** 
//Créer un nouvel objet figure
valider.addEventListener('click',() => {

      const figureElement = document.createElement("figure");
      const imgElement = document.createElement("img");
      let photoNew = document.getElementById("photo").value;
      imgElement.innerHTML = photoNew;
      console.log(photoNew);
      const figCaptionElement = document.createElement("figcaption");
      const corbeille = document.createElement('i');
      corbeille.textContent = "Corbeille";
      
  
      /*imgElement.src = image.imageUrl;
      imgElement.alt = image.title;*/
 /*     figCaptionElement.textContent = "éditer";

//insérer l'icone à la place du texte "Corbeille"
corbeille.innerHTML = `<i id="poubelleDiv" class="fas fa-trash-can"></i>`;



  figureElement.appendChild(corbeille);
  figureElement.appendChild(imgElement);
  figureElement.appendChild(figCaptionElement);
  contentTextarea.appendChild(figureElement);  



  //fermeture modale2
  
  modal2.style.display = 'none';  
  modal.style.display = 'block';    
  });      ***/

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
    contentTextarea.innerHTML="";  //pour vider la modale
  });



// Ajoute un écouteur d'événement `click` à l'élément `#modal`.
//modal.addEventListener("click", () => {
  
    // Ajoute un écouteur d'événement `click` à l'élément `#modal`.
  
    modal.addEventListener("click", function (event) {
      // Vérifie si l'événement a été déclenché à l'extérieur de la fenêtre modale.
      if (event.target.closest("#modal-content") === null) {
        modal2.style.display = 'none';  
      modal.style.display = 'none';
      contentTextarea.innerHTML="";  
      }
      });

      modal2.addEventListener("click", function (event) {
        // Vérifie si l'événement a été déclenché à l'extérieur de la fenêtre modale.
        if (event.target.closest("#modal-content") === null) {
          modal2.style.display = 'none';  
        modal.style.display = 'none';
        contentTextarea.innerHTML="";  
        }
        });

