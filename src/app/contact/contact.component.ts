import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Contacts} from "../model/contacts";
import {ContactsService} from "../service/contacts.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  dataContactTest = [
    {id: 1, product_name: 'SP Ecole', code_product: '2020KVM', version: '1.3'},
    {id: 2, product_name: 'SP Banque', code_product: '2018KQP', version: '2.5'},
    {id: 3, product_name: 'SP Logement', code_product: '2001733LM12', version: '3.0'},
    {id: 4, product_name: 'SP Transport', code_product: '2020KVM', version: '4.1'},
    {id: 5, product_name: 'SP Shop', code_product: '2020KVP2', version: '2.2'}

  ];

  contacts: Contacts[];

  selectedContact: Contacts;


  constructor(private contactService: ContactsService, private fb: FormBuilder,
              private router: ActivatedRoute, private route: Router) {
  }

  ngOnInit() {
    this.loadContact();
  }

  loadContact() {
    this.contactService.getContactserv().subscribe(
      data => {
        this.contacts = data;
        console.log(this.contacts);
      },
      error => {
        console.log('Une erreur est survenus. !!');
      },
      () => {
        console.log('chargement liste et contact reussis...');
      }
    )
  }

  deleteContact() {
    this.contactService.deleteContact(this.selectedContact.id).subscribe(
      res => {
        this.loadContact();
      },
      error => {
        console.log('Erreur de suppresion du contact ');
      },
      () => {
        console.log('suppresion coontact réussis');
      });
  }

  editContacts() {
    this.route.navigate(['create-contact']);

  }

  editUpdateContacts(id: number) {
    this.route.navigate(['update-contact', id]);

  }


}
