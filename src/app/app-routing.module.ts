import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserRemovingComponent } from './user-removing/user-removing.component';
import { UserUpdateComponent } from "./user-update/user-update.component";

const routes: Routes = [
  {path: "", redirectTo: "userList", pathMatch: "full"},
  {path: "addUser", component: RegistrationComponent},
  {path: "userList", component: UserListComponent},
  {path: "removeUser", component: UserRemovingComponent},
  {path: "updateUser", component: UserUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
