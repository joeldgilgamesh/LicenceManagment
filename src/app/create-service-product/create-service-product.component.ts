import {Component, OnInit} from '@angular/core';
// @ts-ignore
import {ServiceProduit} from "../model/service-produit";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ServiceProduitService} from "../service/service-produit.service";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../model/product-service";

@Component({
  selector: 'app-create-service-product',
  templateUrl: './create-service-product.component.html',
  styleUrls: ['./create-service-product.component.scss']
})
export class CreateServiceProductComponent implements OnInit {

  selectedServicesProduits: ServiceProduit;

  // operation = 'add' ;

  editProduct = this.fb.group({
    id: '',
    product_name: ['', Validators.required],
    code_product: ['', [Validators.required, Validators.email]],
    version: '',
  });

  constructor(private serviceProduitService: ServiceProduitService, private router: ActivatedRoute,
              private  httpClient: HttpClient, private fb: FormBuilder, private route: Router) {
  }

  ngOnInit() {
    this.router.data.subscribe(({sp1}) => {
      if (sp1) {
        this.selectedServicesProduits = sp1;
        if (this.selectedServicesProduits.id === undefined) {
          console.log('create product');
        }
        this.updateForm(sp1);
      }
    });

  }

  updateForm(ps: any): void {
    this.editProduct.patchValue({
      id: ps.id,
      product_name: ps.product_name,
      code_product: ps.code_product,
      version: ps.version,
    });
  }

  updateData(product: ProductService): void {
    product.id = this.editProduct.get('id')!.value;
    product.product_name = this.editProduct.get('product_name')!.value;
    product.code_product = this.editProduct.get('code_product')!.value;
    product.version = this.editProduct.get('version')!.value;
  }

  actionClick() {
    this.updateData(this.selectedServicesProduits);
    if (this.selectedServicesProduits.id !== undefined) {
      this.serviceProduitService.updateService_produit(this.selectedServicesProduits).subscribe(
        data => {
          console.log('sucessfull updtate !');
        },
        error => {
          console.log('fail to update');
        }
      );
    } else {
      this.serviceProduitService.addService_produit({
        id: this.editProduct.get('id')!.value,
        product_name: this.editProduct.get('product_name')!.value,
        code_product: this.editProduct.get('code_product')!.value,
        version: this.editProduct.get('version')!.value,
      }).subscribe(
        data => {
          console.log('sucessfull update !');
        },
        error => {
          console.log('fail to update');
        }
      )
    }


  }


}
