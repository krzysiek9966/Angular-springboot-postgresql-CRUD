import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserListComponent } from './user-list/user-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegistrationComponent } from './registration/registration.component';
import { UserManagerService } from './user-manager.service';
import { UserRemovingComponent } from './user-removing/user-removing.component';
import { MaterialModule } from './material/material.module';
import { UserUpdateComponent } from './user-update/user-update.component';



@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    RegistrationComponent,
    UserRemovingComponent,
    UserUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [UserManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
