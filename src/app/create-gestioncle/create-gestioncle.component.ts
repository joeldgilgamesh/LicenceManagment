import { Component, OnInit } from '@angular/core';
import {Modelmanegekey} from "../model/modelmanegekey";
import {FormBuilder, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {GestiondecleService} from "../service/gestiondecle.service";

@Component({
  selector: 'app-create-gestioncle',
  templateUrl: './create-gestioncle.component.html',
  styleUrls: ['./create-gestioncle.component.scss']
})
export class CreateGestioncleComponent implements OnInit {

  selectedmodelmanagekey: Modelmanegekey;

  editgestioncle = this.fb.group({
    user_name: ['', Validators.required],
    id_product: ['', Validators.required],
    product_name: ['', Validators.required],
    nbrePoste: ['', Validators.required],
    nbreinstanceOn: ['', Validators.required],
  });
  constructor(private fb: FormBuilder, private router: ActivatedRoute,
              private httpClient: HttpClient, private route: Router,
              private gestiondecleService: GestiondecleService ) { }

  ngOnInit() {
    this.router.data.subscribe(({sp3})=>{
      if (sp3) {
        this.selectedmodelmanagekey = sp3 ;
        if (this.selectedmodelmanagekey.activation_key === undefined) {
          console.log('create key succesful');
        }
        this.updateForm(sp3);
      }
    });

  }

  updateForm(ps: any): void {
    this.editgestioncle.patchValue({
      user_name: ps.user_name,
      activation_key: ps.activation_key,
      product_name: ps.product_name,
      nbrePoste: ps.activation_number,
      nbreinstanceOn: ps.nbreinstanceOn,
    });
  }
  updateData(modelgeskey: Modelmanegekey): void {
    modelgeskey.activation_key = this.editgestioncle.get(' activation_key')!.value;
    modelgeskey.user_name = this.editgestioncle.get('user_name')!.value;
    modelgeskey.product_name = this.editgestioncle.get('product_name')!.value;
    modelgeskey.nbrePoste = this.editgestioncle.get('nbrePoste')!.value;
    modelgeskey.nbreinstanceOn = this.editgestioncle.get('nbreinstanceOn')!.value;
  }

  actionClick() {
    this.updateData(this.selectedmodelmanagekey);
    if (this.selectedmodelmanagekey.activation_key !== undefined){
      this.gestiondecleService.updateDatagestion(this.selectedmodelmanagekey).subscribe(
        data => {
          console.log('sucessfull updtate !');
          this.route.navigate(['/manage-key']);

        },
        error => {
          console.log('fail to update');
        }
      );
    }else {
      this.gestiondecleService.addDatagestion({
        activation_key: this.editgestioncle.get('activation_key')!.value,
        user_name: this.editgestioncle.get(' user_name')!.value,
        product_name: this.editgestioncle.get('product_name')!.value,
        nbrePoste: this.editgestioncle.get(' nbrePoste')!.value,
        nbreinstanceOn: this.editgestioncle.get('nbreinstanceOn')!.value,
      }).subscribe(
        data => {
          console.log('sucessfull add !');
          this.route.navigate(['/manage-key']);
        },
        error => {
          console.log('fail to save');

        })
    }
  }
}
