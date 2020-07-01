import { Component, OnInit } from '@angular/core';
import {User} from "../model/user";
import {UserService} from "../service/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {


  user: User [];

  selectedUser: User;

  dataUsertest = [
    {id:1, User_name: 'Larry Emol',email: 'kevinjames@gmail.com', phone: '1 800 361-6476',  },
    {id:2, User_name: 'Kevin James Tillaflor',email: 'larrydaveemol@gmail.com', phone: '1 866 580-3625' },
    {id:3, User_name: 'Mark Gaitan',email: 'mark@gmail.com', phone: '1 888 362-5889' },
    {id:4, User_name: 'Josel Lapatar',email: 'josel@gmail.com', phone: '1 888 362-5329' },
    {id:5, User_name: 'Mercedes Pagunsan',email: 'mers@gmail.com', phone: '1 888 362-5889' }

  ];

  constructor(private userService: UserService, private  httpClient: HttpClient,
              private fb: FormBuilder, private route: Router) {
  }

  ngOnInit() {
    this.loadClients();
  }

  loadClients() {
    this.userService.getUserList().subscribe(
      data => {
        this.selectedUser = data;
        console.log(this.selectedUser);
      },
      error => {
        console.log('Une erreur est survenus. !!');
      },
      () => {
        console.log('chargement liste Cleint reussis...');
      }
    )
  }

  deleteClients() {
    this.userService.deleteUser(this.selectedUser.id_user).subscribe(
      res => {
        this.loadClients();
      },
      error => {
        console.log('Erreur de suppresion du client ');
      },
      () => {
        console.log('suppresion client réussis');
      });
  }

  editClients() {
    this.route.navigate(['create-client']);

  }


  editUpdateClients(id: number) {
    this.route.navigate(['update-client', id]);

  }

  onViewClient(id: number){
    this.route.navigate(['view-client', id]);
  }

}
