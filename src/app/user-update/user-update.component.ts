import { Component, OnInit } from '@angular/core';
import {UserManagerService} from "../user-manager.service";
import {User} from "../user";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {
  user: User = new User("","","");
  updatingField: number = 0;
  sub: any;
  message: any;

  constructor(private service: UserManagerService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.updatingField = +params['updatingField'];});
  }

  public update(){
    let resp = this.service.updateUser(this.user);
    resp.subscribe();
    // resp.subscribe((data) => this.message = data)
    this.user = new User("","","");
  }

}
