/**
*  Challenge Quizz
*
* Pour ce challenge, suit les instructions dans le fichier README.md
* Et écris ton code ici même !
*/

/* Exo 1 */
// Ton code ici...

var question1 = "Quelle mer borde la ville de Sébastopol ?";
var solution1 = "la mer Noire";

/* Exo 2 */
// Ton code ici...

//condition vérifiable pour obtenir le resultat de vueEnCours (possibilité de jouer avec return également)
// var resultat = true;

// function vueEnCours() {
//     var reponse1 = prompt(question1);
//     if (reponse1 == solution1) {
//         alert("Gagné !");
//         resultat = true;
//     } else {
//         alert("Perdu...");
//         resultat = false;
//     }
// };

//version return
function vueEnCours() {
    var reponse1 = prompt(question1);
    if (reponse1 == solution1) {
        alert("Gagné !");
        return true;
    } else {
        alert("Perdu...");
        return false;
    }
};

/* Exo 3 */
// Ton code ici...

var question2 = "Quel est l'âge du capitaine ?";
var solution2 = 63;

//VERSION AVEC VARIABLE RESULTAT
// function vueEnCours2() {
//     var reponse2 = parseInt(prompt(question2));
//     if (reponse2 == solution2) {
//         alert("Gagné !");
//         resultat = true;
//     } else {
//         alert("Perdu...");
//         resultat = false;
//     }
// };


//Version Return

function vueEnCours2() {
    var reponse2 = parseInt(prompt(question2));
    if (reponse2 == solution2) {
        alert("Gagné !");
        return true;
    } else {
        alert("Perdu...");
        return false;
    }
};




// version avec variable resultat
// var bonnesReponses = 0;
// vueEnCours();
// if (resultat) {
//     bonnesReponses = bonnesReponses + 1;
// };

// vueEnCours2();
// if (resultat) {
//     bonnesReponses = bonnesReponses + 1;
// };


//version avec return
function quizz() {
    var bonnesReponses = 0;
//vueEnCours(); =>>>> pour la version sans return
    if (vueEnCours()) {
        bonnesReponses = bonnesReponses + 1;
        console.log(`${bonnesReponses}`);
    };


    if (vueEnCours2()) {
        bonnesReponses = bonnesReponses + 1;
        console.log(`${bonnesReponses}`);
    };


    alert(`Vous avez ${bonnesReponses} bonnes réponses.`)
    
};

quizz();

