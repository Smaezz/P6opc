//Requête post connexion
/*const validation = document.querySelector(".se_connecter");
let email = document.querySelector(".email_input");
let motPasse = document.querySelector(".passe_input");
const errorEmail = document.getElementById('email_manquant')

validation.addEventListener('click', valid);

function valid(e){
    if (email.validity.valueMissing) {
      e.preventDefault();
      errorEmail.textContent = 'Prénom manquant';
    }
}*/

/*const form = document.querySelector('form');
let response = fetch(, {
  headers: {
    Authentication: 'secret'
  }
});
    // Quand on submit
    form.addEventListener("submit", (event) => {
        // On empêche le comportement par défaut
        event.preventDefault();
        console.log("Il n’y a pas eu de rechargement de page");
        let email = document.getElementById("email");
        let emailR = email.value;
        let motPasse = document.getElementById("password");
        let motPasseR = motPasse.value;
        console.log(emailR);
        console.log(motPasseR);
});
console.log(form);
*/
async function login() {
const form = document.querySelector('form');
const error = document.getElementById('error');

// Quand on submit
form.addEventListener('submit', (event) => { 
// On empêche le comportement par défaut
  //event.preventDefault();
// Récupération des valeurs du formulaire 
let email = document.getElementById("email").value;
let motPasse = document.getElementById("password").value;
// Création de l'objet de données à envoyer à l'API
let dataP = [email, motPasse]
console.log(dataP);
// Envoi de la requête à l'API 
fetch('http://localhost:5678/api/users/login', {
    method: 'POST',
    headers: {    
'Content-Type': 'application/json'
    },
    body: JSON.stringify(dataP)
    })
   
    .then(response => response.json())
    .then(data => {
      if (data.token) {
        localStorage.setItem("token".data.token)
        window.location.href="index.html"
      }
      
      else { 
// La requête a échoué
        error.textContent="Erreur lors de la requête"
      }
    })
  })
}
    login()
   