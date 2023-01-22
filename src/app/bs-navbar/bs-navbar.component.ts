import { Component } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';
import { UserService } from '../user.service';
import { User } from '../modules/User';


@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {

  currentUser : User = this.userService.currentUser;

  constructor(private cartService: ShoppingCartService,
    private userService: UserService) { }

  count: number = this.cartService.count;

  access: boolean = this.userService.access;

  getCount() {
    this.cartService.getCount();
    return this.cartService.count;
  }

  logout() {
    this.userService.access = false;
    this.access = false;
  }


}
