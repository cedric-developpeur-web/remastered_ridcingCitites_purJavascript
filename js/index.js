// importation fonctions des fichiers structurel + interractive du header
import { configHeader } from './header.js';
import { affichageCategorie } from './header.js';
import { configInfoEntreprise } from './infoEntreprise.js';

// appel fonctions structurel + interractive du site via leur fichier js
configHeader();
affichageCategorie();
//  importation fonction du fichier structurel de la section info entreprise
configInfoEntreprise();