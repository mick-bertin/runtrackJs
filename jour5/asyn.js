// Récupération du formulaire
const recup = document.querySelector("#form-signup");

// Fonction utilitaire : attente asynchrone
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Validation asynchrone du prénom
async function checkPrenom() {
  const prenom = document.querySelector('input[name="prenom"]').value.trim();
  const p = document.getElementById("p");
  p.innerHTML = "";
  if (prenom === "") {
    p.textContent = "Veuillez entrer votre prénom !";
    return;
  }
  // petite pause simulant une vérification serveur
  await delay(300);
  if (prenom.length < 4) {
    p.textContent = "La taille de votre prénom est trop petite.";
  } else {
    p.textContent = "✅ Prénom valide.";
  }
}

// Validation asynchrone du nom
async function checkNom() {
  const nom = document.querySelector('input[name="nom"]').value.trim();
  const p1 = document.getElementById("p1");
  p1.innerHTML = "";
  if (nom === "") {
    p1.textContent = "Veuillez entrer votre nom !";
    return;
  }
  await delay(300);
  if (nom.length < 4) {
    p1.textContent = "La taille de votre nom est trop petite.";
  } else {
    p1.textContent = "✅ Nom valide.";
  }
}

// Validation asynchrone du mot de passe
async function checkPassword() {
  const motdepasse = document
    .querySelector('input[name="motdepasse"]')
    .value.trim();
  const mdperr = document.getElementById("mdperr");
  const mdpmaj = document.getElementById("mdpmaj");
  const mdpminu = document.getElementById("mdpminu");
  const mdpnum = document.getElementById("mdpnum");
  const mdptt = document.getElementById("mdptt");

  mdperr.innerHTML = "";
  mdpmaj.innerHTML = "";
  mdpminu.innerHTML = "";
  mdpnum.innerHTML = "";
  mdptt.innerHTML = "";

  await delay(300); // simulation de traitement serveur ou API

  if (motdepasse === "") {
    mdptt.textContent = "Veuillez entrer un mot de passe.";
    return;
  }

  if (/[!@#$%^&*(),.?":{}|<>_\-+=~`[\]\\;/]/.test(motdepasse)) {
    mdperr.textContent = "✅ Caractère spécial présent.";
  } else {
    mdperr.textContent = "❌ Veuillez entrer un caractère spécial !";
  }

  if (/[A-Z]/.test(motdepasse)) {
    mdpmaj.textContent = "✅ Majuscule présente.";
  } else {
    mdpmaj.textContent = "❌ Veuillez entrer une majuscule !";
  }

  if (/[a-z]/.test(motdepasse)) {
    mdpminu.textContent = "✅ Minuscule présente.";
  } else {
    mdpminu.textContent = "❌ Veuillez entrer une minuscule !";
  }

  if (/[0-9]/.test(motdepasse)) {
    mdpnum.textContent = "✅ Chiffre présent.";
  } else {
    mdpnum.textContent = "❌ Veuillez entrer un chiffre !";
  }

  if (motdepasse.length < 9) {
    mdptt.textContent = "❌ Mot de passe trop court.";
  } else {
    mdptt.textContent = "✅ Longueur correcte.";
  }
}

// Écouteurs asynchrones sur les champs
document.querySelector('input[name="prenom"]').addEventListener("input", () => {
  checkPrenom();
});

document.querySelector('input[name="nom"]').addEventListener("input", () => {
  checkNom();
});

document
  .querySelector('input[name="motdepasse"]')
  .addEventListener("input", () => {
    checkPassword();
  });

// Validation finale lors de la soumission (empêche l’envoi si erreurs)
recup.addEventListener("submit", async (event) => {
  event.preventDefault();
  await Promise.all([checkPrenom(), checkNom(), checkPassword()]);
});
