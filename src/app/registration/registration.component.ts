import { Component, OnInit} from '@angular/core';
import { InteractionService } from '../interaction.service';
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
  

  constructor(private service: UserManagerService, private interaction: InteractionService) { }

  ngOnInit(): void {
  }

  public register(){
    let resp = this.service.addUser(this.user);
    resp.subscribe((data) => this.message = data)
    this.changeEvent();
  }

  public changeEvent(){
    this.interaction.sendChangeEvent();
  }

  private validation(){
    if(this.user.username == "") return 
  }

}
