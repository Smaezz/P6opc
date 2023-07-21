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
        localStorage.setItem("token",data.token)
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
   
