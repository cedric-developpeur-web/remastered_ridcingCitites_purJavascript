// structure de la section présentation de l'entrepirse
export function configInfoEntreprise() {
  // parti du corp du site web ciblé la balise parent
  const parentMain = document.querySelector('main');
  // création des balises enfants du parent main pour la section info entreprise
  const sectionEntreprise = document.createElement('section');
  sectionEntreprise.classList.add('infoEntreprise_container');
  const dispoInfoEntreprise = document.createElement('div');
  dispoInfoEntreprise.classList.add('dispo_description');
  const title = document.createElement('h2');
  title.textContent = 'Qui Nous Somme ?';
  const paragrapheDescriptionEntreprise = document.createElement('p');
  paragrapheDescriptionEntreprise.classList.add('description_p');
  paragrapheDescriptionEntreprise.textContent = `Notre entreprise hanSport vous accompagne dans tous les événements sportifs que les centres de loisir, clubs de sport, séminaires d’entreprise… Notre équipe est là pour vous accompagner dans tous vos projets en lien avec la mobilité du sport pour tous et de tous âges. Venez nous contacter.`

  // organisation structurel des balises enfants par rapport à son parent
  parentMain.appendChild(sectionEntreprise);
  sectionEntreprise.appendChild(dispoInfoEntreprise);
  dispoInfoEntreprise.appendChild(title);
  dispoInfoEntreprise.appendChild(paragrapheDescriptionEntreprise);

  //  création des balises enfants du parent main pour la section teams
  const infoTeams = document.createElement('section');
  infoTeams.classList.add('infoTeams');
  // présentation de soraya
  const soraya = document.createElement('article')
  const imageSoraya = document.createElement('img');
  imageSoraya.setAttribute('src', '../pictures/soraya.png');
  imageSoraya.setAttribute('alt', 'image de soraya');
  const infoSoraya = document.createElement('p');
  infoSoraya.textContent = `Notre organisatrice d'événements sportifs`
  // présentation de pedro
  const pedro = document.createElement('article')
  const imagePedro = document.createElement('img');
  imagePedro.setAttribute('src', '../pictures/pedro.png');
  imagePedro.setAttribute('alt', 'image de pedro');
  const infoPero = document.createElement('p');
  infoPero.textContent = `Notre éducateur sportif pour initier nos nouveaux pratiquants`
  // présentation de marc
  const marc = document.createElement('article')
  const imageMarc = document.createElement('img');
  imageMarc.setAttribute('src', '../pictures/marc.png');
  imageMarc.setAttribute('alt', 'image de marc');
  const infoMarc = document.createElement('p');
  infoMarc.textContent = `Notre commercial, qui est en charge de trouver des sponsors pour favoriser l'accès au sport`
  // organisation structurel des balises enfants par rapport à son parent de la section infoTeams
  parentMain.appendChild(infoTeams);
  infoTeams.appendChild(soraya);
  soraya.appendChild(imageSoraya);
  soraya.appendChild(infoSoraya);
  infoTeams.appendChild(pedro);
  pedro.appendChild(imagePedro);
  pedro.appendChild(infoPero);
  infoTeams.appendChild(marc);
  marc.appendChild(imageMarc);
  marc.appendChild(infoMarc);
}