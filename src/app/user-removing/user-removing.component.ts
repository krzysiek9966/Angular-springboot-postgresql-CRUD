import { Component, OnInit} from '@angular/core';
import { UserManagerService } from '../user-manager.service';

@Component({
  selector: 'app-user-removing',
  templateUrl: './user-removing.component.html',
  styleUrls: ['./user-removing.component.css']
})
export class UserRemovingComponent implements OnInit {
  username: string = "";
  result: any = '';


  constructor(private service: UserManagerService) { }

  ngOnInit(): void { }

  public remove(){
    let resp = this.service.deleteUser(this.username);
    resp.subscribe((data) => this.result = data);
  }

}
