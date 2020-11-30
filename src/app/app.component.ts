import { Component } from '@angular/core';
import { ROUTES } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app';

  showFiller = false;
  components: string[] = ['User-list', 'Add-user', 'Remove-user'];
  currComponent: string = 'User-list';
}


