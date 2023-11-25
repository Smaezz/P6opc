// Sélection de l'élément formulaire de connexion
let connexion = document.getElementById("login");
const bandeauModal = document.getElementById("bandeauModal");
// Ajout d'un écouteur d'événement sur la soumission du formulaire
connexion.addEventListener("submit", async (event) => {
  event.preventDefault(); // Empêche le rechargement de la page

  // Récupération des valeurs des champs email et mot de passe du formulaire
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Envoi des informations de connexion à l'API pour authentification
  const response = await fetch("http://localhost:5678/api/users/login", {
    method: "POST", // Utilisation de la méthode HTTP POST
    headers: {
      "Content-Type": "application/json", // Définition du type de contenu de la requête
    },
    body: JSON.stringify({ email, password }), // Conversion des données en format JSON
  });

  // Vérification de la réponse de l'API
  if (response.status === 200) {
    const token = await response.json();
    const bandeauModal = document.getElementById("bandeauModal");

    // Stockage du jeton d'authentification et de l'ID utilisateur dans le stockage de session
    sessionStorage.setItem("token", token.token);
    sessionStorage.setItem("userId", token.userId);

    // Vérification du token
    console.log(sessionStorage.getItem("token"));

    // Redirection de l'utilisateur vers la page d'accueil
    window.location.href = "index.html";
    bandeauModal.style.display = "flex";
    console.log(token);
  } else {
    alert("Nom d'utilisateur ou mot de passe incorrect");
  }
});
