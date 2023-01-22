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

  
  

  constructor(private cartService: ShoppingCartService,
    private userService: UserService) { 
    }

  count: number = this.cartService.count;

  access: boolean = this.userService.access;

  currentUser : string = this.userService.currentUser;

  getCount() {
    this.cartService.getCount();
    // console.log(this.userService.currentUser.name);
    return this.cartService.count;
  }

  logout() {
    this.userService.access = false;
    this.access = false;
  }


}
