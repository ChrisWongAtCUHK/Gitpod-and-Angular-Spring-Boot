import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddUserComponent } from './user/add-user.component';
import { UserListComponent } from './user/user-list.component';

const routes: Routes = [
  { path: 'add', component: AddUserComponent },
  { path: 'users', component: UserListComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
