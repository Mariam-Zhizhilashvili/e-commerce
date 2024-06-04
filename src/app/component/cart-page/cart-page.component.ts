import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
import { product } from '../product-view/productmodal';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/user.service'; 
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  Showproduct: any = [];
  public totalamount: number = 0;
  public addressform = false;
  myform: FormGroup | any;
  isLoggedIn: boolean = false; 

  constructor(private api: ApiService, private userService: UserService, private router: Router) { } 

  ngOnInit(): void {
    this.api.products().subscribe(res => {
      this.Showproduct = res;
      this.totalamount = this.api.calculateprice();
      console.log("total amt is", this.totalamount)
    });

    
    this.userService.currentUser.subscribe(user => {
      this.isLoggedIn = !!user; 
    });

    // ფორმის ვალიდაცია
    this.myform = new FormGroup({
      email: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      mobile: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
    });
  }

  deleteitem(item: product) {
    this.api.removecartitem(item);
  }

  Empty() {
    this.api.removeallitems();
  }

  cancel() {
    this.addressform = false;
    this.myform.reset();
  }

  onsubmit() {
    this.myform.value;
    console.log(this.myform.value);
    this.myform.reset();
  }

  checkout() {
    if (this.isLoggedIn) {
      this.addressform = true;
    } else {
      this.router.navigate(['/login']); // დალოგინებაზე გადასვლა თუ არ არის დალოგინებული
    }
  }
}
