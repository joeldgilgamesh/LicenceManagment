import { Component, OnInit } from '@angular/core';
import {Modelmanegekey} from "../model/modelmanegekey";
import {GestiondecleService} from "../service/gestiondecle.service";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {ServiceProduitService} from "../service/service-produit.service";
import {UserService} from "../service/user.service";

@Component({
  selector: 'app-gestioncle',
  templateUrl: './gestioncle.component.html',
  styleUrls: ['./gestioncle.component.scss']
})
export class GestioncleComponent implements OnInit {

  dataUsertest = [
    {user_name: 'kevinjames@gmail.com',key_activation: 'IEKIP-8CP8F-E2Q7K-PIHUT-QMX5H', product_name: 'Sprint Finance'
      ,nbrePoste: '10', nbreinstanceOn: '05', },
    {user_name: 'kevinjames@gmail.com',key_activation: 'HGLW7-X2QTR-5GR1E-1MQQM-HC4V9', product_name: 'Sprint Ecole'
      ,nbrePoste: '1890', nbreinstanceOn: '91', },

  ];

  modelmanagekey : Modelmanegekey[];
  selectedkey : Modelmanegekey;
  productList:any[];
  userList:any[];
  constructor(private gestiondecleService: GestiondecleService, private httpClient: HttpClient,
              private route : Router, private serviceProduitService: ServiceProduitService,
              private userService: UserService) { }

  ngOnInit() {
    this.loadServiceProduit();
    this.loadClients();
  }
  loadDataKey() {
    this.gestiondecleService.getDatagestion().subscribe(
      data => {
        this.modelmanagekey = data;
        console.log(this.modelmanagekey);
      },
      error => { console.log('Une erreur est survenus. !!');
      },
      () => {
        console.log('chargement liste des information des clés reussis...');
      }
    );
  }

  deleteKey() {
    this.gestiondecleService.deleteKey(this.selectedkey.activation_key).subscribe(
      data => {
        this.loadDataKey();
      },
      error => { console.log('Une erreur est survenus. !!');
      },
      () => {
        console.log('Suppresion clés reussis...');
      }
    );
  }

  loadServiceProduit() {
    this.serviceProduitService.getService_produit().subscribe(
      data => {this.productList = data; console.log(this.productList);},
      error => {console.log('Une erreur est survenus. !!');},
      () => {console.log('chargement liste et produit reussis...');}
    )
  }
  loadClients() {
    this.userService.getUserList().subscribe(
      data => {
        this.userList = data;
        console.log(this.userList);},
      error => {console.log('Une erreur est survenus. !!');},
      () => {console.log('chargement liste Cleint reussis...');}
    )
  }


  editDataKey(id: number) {
    this.route.navigate(['update-gestioncle', id]);

  }

  onViewKey(id: number){
    this.route.navigate(['view-client', id]);
  }

}
