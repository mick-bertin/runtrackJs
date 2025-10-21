// // recup des donnee du  bouton
// let recup = document.querySelector("#form-signup");

// function valider(event) {
//   event.preventDefault();
//   const formData = new FormData(event.target);
//   // Récupération des valeurs nom et prenom
//   let prenom = formData.get("prenom").trim();
//   let nom = formData.get("nom").trim();

//   //  messages erreur
//   formData.get("p").innerHTML = "";
//   formData.get("p1").innerHTML = "";

//   // regarde si les champs sont vides
//   if (prenom === "" || nom === "") {
//     formData.get("p").innerHTML = "Veuillez entrer votre prénom!";
//     formData.get("p1").innerHTML = "Veuillez entrer votre nom!";
//   }
//   // boucle verif la taille du nom et prenom
//   let count = 0;
//   for (let i = 0; i < prenom.length; i++) {
//     count++;
//   }

//   if (count < 4) {
//     formData.get("p").innerHTML =
//       "la taille de votrer  prénom est trop petite  ";
//   }
//   for (let i = 0; i < nom.length; i++) {
//     count++;
//   }
//   if (count < 4) {
//     formData.get("p1").innerHTML = "la taille de votrer  nom est trop petite";
//   }

//   // Récupération des valeurs mot de passe
//   let motdepasse = formData.get("motdepasse").trim();
//   if (/[!@#$%^&*(),.?":{}|<>_\-+=~`[\]\\;/]/.test(motdepasse)) {
//     formData.get("mdperr").innerHTML = "valider";
//   } else {
//     formData.get("mdperr").innerHTML =
//       "Veuillez entrez un caractere speciale !";
//   }
//   if (!/[A-Z]/.test(motdepasse)) {
//     formData.get("mdpmaj").innerHTML = "Veuillez entrez une majuscule !";
//   } else {
//     formData.get("mdpmaj").innerHTML = "good!";
//   }
//   if (!/[a-z]/.test(motdepasse)) {
//     formData.get("mdpminu").innerHTML = "Veuillez entrez une minuscule !";
//   } else {
//     formData.get("mdpminu").innerHTML = "good!";
//   }
//   if (!/[0-9]/.test(motdepasse)) {
//     formData.get("mdpnum").innerHTML = "Veuillez entrez un nombre !";
//   } else {
//     formData.get("mdpnum").innerHTML = "good!";
//   }

//   if (motdepasse.length < 9) {
//     formData.get("mdptt").innerHTML =
//       "la taille de votrer  mot de passe  est insuffisant";
//   } else {
//     ("la taille de votrer  mot de passe  est good");
//   }
// }

// recup.addEventListener("click", valider);

// // .toUpperCase()  majuscule
// // .toLowerCase()  minuscule   pattern="[A-Za-z]"
// // const regexSpecial = /[!@#$%^&*(),.?":{}|<>_\-+=~`[\]\\;/]/;

// Récupération du formulaire
let form = document.querySelector("#form-signup");

function valider(event) {
  event.preventDefault();

  // Récupération des données du formulaire
  const formData = new FormData(event.target);

  // Récupération des champs
  let prenom = formData.get("prenom")?.trim() || "";
  let nom = formData.get("nom")?.trim() || "";
  let motdepasse = formData.get("motdepasse")?.trim() || "";

  // Sélection des éléments d’erreur dans le DOM
  const p = document.querySelector("#p");
  const p1 = document.querySelector("#p1");
  const mdperr = document.querySelector("#mdperr");
  const mdpmaj = document.querySelector("#mdpmaj");
  const mdpminu = document.querySelector("#mdpminu");
  const mdpnum = document.querySelector("#mdpnum");
  const mdptt = document.querySelector("#mdptt");

  // Réinitialisation des messages d'erreur
  p.textContent = "";
  p1.textContent = "";
  mdperr.textContent = "";
  mdpmaj.textContent = "";
  mdpminu.textContent = "";
  mdpnum.textContent = "";
  mdptt.textContent = "";

  // Vérifie si les champs sont vides
  if (prenom === "") {
    p.textContent = "Veuillez entrer votre prénom !";
  }
  if (nom === "") {
    p1.textContent = "Veuillez entrer votre nom !";
  }

  // Vérifie la longueur du prénom et du nom
  if (prenom.length > 0 && prenom.length < 4) {
    p.textContent = "La taille de votre prénom est trop petite.";
  }
  if (nom.length > 0 && nom.length < 4) {
    p1.textContent = "La taille de votre nom est trop petite.";
  }

  // Vérification du mot de passe
  if (/[!@#$%^&*(),.?":{}|<>_\-+=~`[\]\\;/]/.test(motdepasse)) {
    mdperr.textContent = "Caractère spécial : ✅";
  } else {
    mdperr.textContent = "Veuillez entrer un caractère spécial !";
  }

  if (/[A-Z]/.test(motdepasse)) {
    mdpmaj.textContent = "Majuscule : ✅";
  } else {
    mdpmaj.textContent = "Veuillez entrer une majuscule !";
  }

  if (/[a-z]/.test(motdepasse)) {
    mdpminu.textContent = "Minuscule : ✅";
  } else {
    mdpminu.textContent = "Veuillez entrer une minuscule !";
  }

  if (/[0-9]/.test(motdepasse)) {
    mdpnum.textContent = "Chiffre : ✅";
  } else {
    mdpnum.textContent = "Veuillez entrer un nombre !";
  }

  if (motdepasse.length < 9) {
    mdptt.textContent = "La taille du mot de passe est insuffisante.";
  } else {
    mdptt.textContent = "Longueur du mot de passe : ✅";
  }
}

// Écoute de la soumission du formulaire
form.addEventListener("submit", valider);

// // 🔍 Changements principaux

// addEventListener("submit", valider)
// → Tu dois écouter l’événement submit du formulaire, pas un click.
// Le preventDefault() empêchera la soumission.

// formData.get("p") supprimé
// → FormData ne sert qu’à récupérer les valeurs des champs, pas des éléments HTML.
// J’ai remplacé ça par document.querySelector("#p"), etc.

// Simplification des boucles inutiles
// → Pour vérifier la taille, on peut directement utiliser .length.

// Vérifications plus robustes
// → J’ai ajouté ?.trim() || "" pour éviter les erreurs si un champ est manquant.
