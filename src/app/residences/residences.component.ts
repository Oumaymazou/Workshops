import { Component } from '@angular/core';
import { Residence } from '../core/models/Residence';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css'],
})
export class ResidencesComponent {
  address: string = '';
  adress: string = '';
  date:Date= new Date();
  listFavorite: Residence[] = [];
  listFiltred: Residence[] = [];
  listResidences: Residence[] = [
    {
      id: 1,
      name: 'El fel',
      address: 'Borj Cedria',
      image: '../../assets/images/h1.jpg',
      status: 'Disponible',
    },
    {
      id: 2,
      name: 'El yasmine',
      address: 'Ezzahra',
      image: '../../assets/images/h2.jpg',
      status: 'Disponible',
    },
    {
      id: 3,
      name: 'El Arij',
      address: 'Rades',
      image: '../../assets/images/h3.jpg',
      status: 'Vendu',
    },
    {
      id: 4,
      name: 'El Anber',
      address: 'inconnu',
      image: '../../assets/images/h4.jpg',
      status: 'En Construction',
    },
  ];

  showLocation(address: string) {
    if (address === 'inconnu') {
      return alert("l'adresse est inconnue");
    } else {
      return alert("l'adresse est  " + address);
    }
  }
// première méthode
  addToFavorite1(res: Residence) {
    if (this.listFavorite.indexOf(res)==-1) {
      this.listFavorite.push(res);
    }
  }

  // deuxième méthode
  addToFavorite2(res: Residence) {
    // if (this.listFavorite.includes(res)) {
    //   this.listFavorite.push(res);
    // }
  }

  filterByAdress(){
    // this.listFiltred=this.listResidences;
    return this.listFiltred=this.listResidences.filter(res=>(res.address.toLowerCase().includes(this.adress.toLowerCase())))
  }
}
