/** 
//Requête post connexion
async function login() {
const form = document.querySelector('form');

// Quand on submit
form.addEventListener('submit', async(event) => { 
// On empêche le comportement par défaut
event.preventDefault();

// on récupère les données du formulaire dans une constante
 let formData = {
  email: event.target.querySelector("[name=email]").value,
  password: event.target.querySelector("[name=password]").value,
  }

// Envoi de la requête à l'API 
fetch('http://localhost:5678/api/users/login', {
    method: 'POST',
    headers: {    
       'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)            // convertir l'email et le password en objet JSON 
    })
   
    .then(response => response.json())
    .then(data => {
      if (data.token) {
        localStorage.setItem("token", data.token)
        window.location.href="edit.html"
      }
      
      else { 
// La requête a échoué
        error.textContent="Email ou mot de passe incorrect"
      }
    })
  })
}
    login()

    */
    // Sélection de l'élément formulaire de connexion
let connexion = document.getElementById('login');
const bandeauModal = document.getElementById('bandeauModal');
// Ajout d'un écouteur d'événement sur la soumission du formulaire
connexion.addEventListener('submit', async (event) => {
  event.preventDefault(); // Empêche le rechargement de la page

  // Récupération des valeurs des champs email et mot de passe du formulaire
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  // Envoi des informations de connexion à l'API pour authentification
  const response = await fetch("http://localhost:5678/api/users/login", {
    method: 'POST', // Utilisation de la méthode HTTP POST
    headers: {
      "Content-Type": "application/json" // Définition du type de contenu de la requête
    },
    body: JSON.stringify({ email, password }) // Conversion des données en format JSON
  });

  // Vérification de la réponse de l'API
  if (response.status === 200) { 
    const token = await response.json();
    const bandeauModal = document.getElementById('bandeauModal');
    if (bandeauModal !== null) {
    bandeauModal.style.display = "flex";
   }
    // Stockage du jeton d'authentification et de l'ID utilisateur dans le stockage de session
    sessionStorage.setItem("token", token.token);
    sessionStorage.setItem("userId", token.userId);
    console.log(token);
    // Redirection de l'utilisateur vers la page d'accueil
    window.location.href = "index.html";
  } else {
    alert("Nom d'utilisateur ou mot de passe incorrect");
  }
});
   
