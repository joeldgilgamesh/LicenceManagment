import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../model/user";
import {UserService} from "../service/user.service";

@Component({
  selector: 'app-create-clients',
  templateUrl: './create-clients.component.html',
  styleUrls: ['./create-clients.component.scss']
})
export class CreateClientsComponent implements OnInit {



  selectedClient: User;

  // operation = 'add' ;

  editClient = this.fb.group({
    id_user: '',
    user_name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: '',
  });

  constructor(private userService : UserService, private router: ActivatedRoute,
              private  httpClient: HttpClient, private fb: FormBuilder, private route: Router) {
  }

  ngOnInit() {
    this.router.data.subscribe(({sp2}) => {
      if (sp2) {
        this.selectedClient = sp2;
        if (this.selectedClient.id_user === undefined) {
          console.log('create product');
        }
        this.updateForm(sp2);
      }
    });

  }

  updateForm(ps: any): void {
    this.editClient.patchValue({
      id_user: ps. id_user,
      user_name: ps.user_name,
      email: ps.email,
      phone: ps. phone,
    });
  }

  updateData(client: User): void {
    client.id_user = this.editClient.get('id_user')!.value;
    client.user_name = this.editClient.get('user_name')!.value;
    client.email = this.editClient.get('email')!.value;
    client.phone = this.editClient.get('phone')!.value;
  }

  actionClick() {
    this.updateData(this.selectedClient);
    if (this.selectedClient.id_user !== undefined) {
      this.userService.updateUser(this.selectedClient).subscribe(
        data => {
          console.log('sucessfull updtate !');
        },
        error => {
          console.log('fail to update');
        }
      );
    } else {
      this.userService.addUser({
        id_user: this.editClient.get('id_user')!.value,
        user_name: this.editClient.get('user_name')!.value,
        email: this.editClient.get('email')!.value,
        phone: this.editClient.get('phone')!.value,
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

