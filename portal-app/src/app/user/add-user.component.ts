import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models/user';
import { UserService } from './user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styles: []
})
export class AddUserComponent {

  user: User = new User();

  constructor(private router: Router, private userService: UserService) { }

  createUser(): void {
    this.userService.createUser(this.user)
      .subscribe(data => {
        alert("User created successfully.");
      });
  };

}
