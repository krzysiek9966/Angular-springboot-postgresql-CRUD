import { Component, OnInit} from '@angular/core';
import { User } from '../user';
import { UserManagerService } from '../user-manager.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  user: User = new User("","","");
  message: any;


  constructor(private service: UserManagerService) { }

  ngOnInit(): void {
  }

  public register(){
    let resp = this.service.addUser(this.user);
    resp.subscribe((data) => this.message = data)
    this.user = new User("","","");
  }

  private validation(){
    if(this.user.username == "") return
  }

}
