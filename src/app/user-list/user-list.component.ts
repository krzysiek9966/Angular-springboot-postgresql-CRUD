import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserManagerService } from '../user-manager.service';
import { Subscription } from 'rxjs';
import { InteractionService } from '../interaction.service';
 
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  clickEventSubscription:Subscription;
  users: any;

  constructor(private service: UserManagerService, private interaction: InteractionService) { 
    this.clickEventSubscription = this.interaction.getChangeEvent().subscribe(()=>{
      this.getUsers();
    })
  }

  ngOnInit(): void {
    this.getUsers();
  }

  public getUsers(){
    let resp = this.service.getAll();
    resp.subscribe((data) => this.users = data);
  }

}
