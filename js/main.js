function copy(text) {
    document.body.insertAdjacentHTML("beforeend","<div id=\"copy\" contenteditable>"+text+"</div>")
    // creation d'une div éditable avec l'id copy
    document.getElementById("copy").focus();
    // il focus la div
    document.execCommand("selectAll");
    // il la select en entier
    document.execCommand("copy");
    //  il copie
    document.getElementById("copy").remove();
    //  il supprime la div
  }



  
function random (max){
    var number = document.getElementById("random");
    // Je déclare l'id random
    var reponse = document.getElementById("reponse");
    // Je déclare l'id reponse
number.innerHTML = Math.floor(Math.random()* Math.floor(max));
// je recup un chiffre random

if (number.innerHTML ==7||number.innerHTML ==3) {
    reponse.innerHTML ="You won" ;
    reponse.classList.add("text-success")
    // j'ajoute la classe  de couleur verte
    reponse.classList.remove("text-danger")
    // j'enlève la couleur verte
  } else {
    reponse.innerHTML = "You failed, Try again" ;
    reponse.classList.remove("text-success")
    // j'enlève la couleur verte
    reponse.classList.add("text-danger")
    // je met la couleur rouge
  }
}

// SI le nombre écrit est égale à 7 alors écrit tu gagnes sinon écrit tu perds












function yolo (){
  var text = ['Resterons-nous longtemps dans cette erreur, j ai jeté au feu. Champion de la religion et son patriotisme étaient indissolubles en lui. Ennemi de lernel baiser épanouissait et teintait de tous les membres de ce groupe ? Fuyant leurs demeures occupées par chacun deux croyant avoir la pierre précieuse rayonnait dans ses beaux habits de fête célébraient la nature et lorigine du singe et que léclipse ne dégénère pas en nuit. Ont-ils trouvé le remède de lappel et de lobscurité. Remonte quand je tirerai sur le tuyau pour le savoir des perquisitions inutiles. Explique-moi ton idée au point de laisser lire ses archives à qui il parla tout haut, avec des perdrix autour !','Lorem ipsum dolor sit amet.','Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, molestias!'];
  // ici je crée le tableau avec les diff valeurs
  var stock = Math.floor(Math.random()* Math.floor(text.length));
  //  stock un num ale
  var yolo = document.getElementById("yolo");
  // la var yolo prend l'id du yolo
  yolo.innerHTML = text[stock];
// j'imprime le yolo sur html
}