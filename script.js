fetch('')
  .then(response => response.json())
  .then(data =>{
    console.log(data)
    afficherrealisations(data)
    descriptiondetemoignages(data)

  });

//role : afficher les realisations ds la page
//parametre : des realisations -> tableau
//return: rien

function afficherrealisations(tableauderealisations){


tableauderealisations.forEach(realisation => {
    
    let titre = realisation.title
    console.log(titre)

    let description=realisation.description
    console.log(description)

    let image = realisation.image
    console.log(image-url)
    
    document.getElementById("container-realisations").innerHTML +=

    `realisations": [
    {
      "titre": "Table en bois massif",
      "description": "Cette table en bois massif a été fabriquée sur mesure pour s'harmoniser avec votre intérieur. Chaque détail, du choix du bois à la finition, est réalisé avec précision pour garantir une pièce unique et durable.",
      "image-url": "https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/images/menuiserie/table-bois-massif.webp"
    },
    {
      "titre": "Porte d'entrée sculptée",
      "description": "Notre expertise en menuiserie se reflète dans cette porte d'entrée sculptée. Fabriquée avec des techniques traditionnelles, elle offre à votre maison une touche d'élégance et de sécurité.",
      "image-url": "https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/images/menuiserie/porte-entree-sculptee.webp"
    },
    {
      "titre": "Armoire en bois exotique",
      "description": "L'armoire en bois exotique est un exemple de l'artisanat exceptionnel de notre menuiserie. Chaque étagère, chaque détail est pensé pour vous offrir un meuble à la fois fonctionnel et esthétique.",
      "image-url": "https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/images/menuiserie/armoire-bois-exotique.webp"
    },
    {
      "titre": "Escalier sur mesure",
      "description": "Transformez votre espace avec un escalier sur mesure. Réalisé selon vos spécifications, il allie fonctionnalité et esthétique pour créer une pièce maîtresse dans votre intérieur.",
      "image-url": "https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/images/menuiserie/escalier-sur-mesure.webp"
    }
  ],`

    })

    }
//role : afficher les temoignages ds la page
//parametre : des témoignages-> tableau
//return: rien
    function descriptiondetemoignages(tableaudetemoignages){
        tableaudetemoignages.forEach(temoignages=> {
    
    let prenom = temoignages.prenom
    console.log(titre)

    let typePrestation=temoignages.typePrestation
    console.log(description)

    let commentaire= temoignages.commentaire
    console.log(image-url)

    let note = temoignages.note
    
    document.getElementById("container-temoignages").innerHTML +=

    `"temoignages": [
    {
      "prenom": "Sophie",
      "typePrestation": "Porte sur mesure",
      "commentaire": "La Menuiserie Bobois a créé une porte d'entrée sur mesure pour ma maison. La qualité du travail est exceptionnelle, et le service a été impeccable. Je recommande vivement.",
      "note": 5
    },
    {
      "prenom": "Thomas",
      "typePrestation": "Escalier en bois",
      "commentaire": "Nous avons commandé un escalier sur mesure pour notre nouvelle maison. La Menuiserie Bobois a su comprendre nos besoins et le résultat est tout simplement spectaculaire.",
      "note": 4
    },
    {
      "prenom": "Lucie",
      "typePrestation": "Table de salle à manger",
      "commentaire": "La table en bois massif que nous avons commandée est devenue le point central de notre salle à manger. La Menuiserie Bobois a dépassé nos attentes en termes de qualité et de design.",
      "note": 5
    }
  ]`

    })

    }
