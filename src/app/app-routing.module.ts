import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserRemovingComponent } from './user-removing/user-removing.component';

const routes: Routes = [
  {path: "", redirectTo: "register", pathMatch: "full"},
  {path: "register", component: RegistrationComponent},
  {path: "getAll", component: UserListComponent},
  {path: "remove", component: UserRemovingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
