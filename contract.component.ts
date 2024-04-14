// contract.component.ts

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.scss']
})
export class ContractComponent implements OnInit {
  term: string; // Représente le terme de recherche
  partOrderList: any[] = []; // Liste des commandes de pièces
  nbrItemPage = 10; // Nombre d'éléments par page
  p = 1; // Numéro de page actuelle
  pageSizes = [5, 10, 15]; // Options de taille de page

  constructor() { }

  ngOnInit(): void {
    // Initialisation
  }

  handlePageSizeChange(event: any): void {
    // Logique de changement de taille de page
  }

  OpenModalUp(action: string, item: any): void {
    // Logique pour ouvrir une modale avec l'action spécifiée
  }
}
