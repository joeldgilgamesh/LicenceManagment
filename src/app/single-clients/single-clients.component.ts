import { Component, OnInit } from '@angular/core';
import {User} from "../model/user";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../service/user.service";

@Component({
  selector: 'app-single-clients',
  templateUrl: './single-clients.component.html',
  styleUrls: ['./single-clients.component.scss']
})
export class SingleClientsComponent implements OnInit {

  client : User;

  constructor(private router: ActivatedRoute , private userService: UserService,
              private route: Router) { }

  ngOnInit() {
    // @ts-ignore
    this.client = new User('','','','','');
    const id = this.router.snapshot.params['id'];
    this.userService.getUserById(id).subscribe(
      (clt : User) => {
        this.client = clt;
      }
    );
  }
  onBack() {
    this.route.navigate(['/clients']);
  }

}
