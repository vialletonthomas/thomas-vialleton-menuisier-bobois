fetch('menuiserie.json')
  .then(response => response.json())
  .then(data => {
    console.log(data)
   afficherRealisation(data)
   affichertemoignages(data)
    afficherpromessesClients(data)
  });


  // injecter les réalisations 

  //role : afficher les réalisation
  //parametre : donnée (menuiserie.json)
  //return : rien car elle affiche 

  function afficherRealisation(donnee){

    donnee.realisations.forEach(realisation => {

      document.getElementById("container-cartes").innerHTML += 
      `
            <div class="flex ">

                <img src="${realisation.imageUrl}" alt="" class="w-25">

                <div class="">
                    <h3 class=""> ${realisation.titre} </h3>

                    <p class="w-25 ">${realisation.description}</p>
                </div>

            </div>`
      
    });
  }


  //injecter les valeurs 

  //role afficher les promessesClients
  //parametre les promessesClients
  //return rien 

  function afficherpromessesClients(donnee){

    donnee.promessesClients.forEach(promessesClients =>{
      
      document.getElementById("container-promessesClients").innerHTML += 

      `<div class="w-33 margintop marginbottom">

            <div>

                <p class="w-25">
                    Des créations personnalisées pour s'adapter parfaitement à votre espace
                </p>

            </div>

        </div>
      `

    });
  }



  //injecter les commentaires

//role afficher temoignages
//parametre les temoignages
//return rien 


function affichertemoignages(donnee){
  donnee.temoignages.forEach(temoignages => {
    
    document.getElementById("container-temoignages").innerHTML+=

    `<div class="w-33 ">

            <h3>
                ${temoignages.prenom}
            </h3>
                <i class="ph ph-star"></i>
                <i class="ph ph-star"></i>
                <i class="ph ph-star"></i>
                <i class="ph ph-star"></i>
                <i class="ph ph-star"></i>
            <p>
                ${temoignages.typePrestation}
            </p>

            <p class="w-25">
              ${temoignages.commentaire}
            </p>

        </div>`
  });
}
