import { Component, OnInit } from '@angular/core';
import {UserManagerService} from "../user-manager.service";
import {User} from "../user";

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {
  user: User = new User("","","");

  ngOnInit(): void { }

  constructor(private service: UserManagerService) { }

  public update(){
    this.service.updateUser(this.user);
  }

}
