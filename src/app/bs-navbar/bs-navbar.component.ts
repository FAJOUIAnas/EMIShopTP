import { Component } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';
import { UserService } from '../user.service';
import { User } from '../modules/User';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';


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

  logOutNotification(){
    Swal.fire({
      title: 'Do you want to Sign out?',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      },
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Yes',
      denyButtonText: 'Cancel',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.logout();
      } else if (result.isDenied) {
      }
    })
  }

}
