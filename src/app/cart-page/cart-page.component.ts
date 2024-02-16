import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart/cart.service';
import { Cart } from '../shared/models/cart';
import { CartItem } from '../shared/models/cartItem';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent implements OnInit {
  
  cart!:Cart;
  constructor(private cartService:CartService) { 
    this.setCart();
    //for styiling: add in the constructor private foodService:FoodService class and uncomment the
    //below lines
    // let foods = foodService.getAll();
    // cartService.addToCart(foods[0]);
    // cartService.addToCart(foods[1]);
    // cartService.addToCart(foods[2]);
  }

  setCart(){
    this.cart = this.cartService.getCart();
  }

  removeFromCart(cartItem:CartItem){
    this.cartService.removeFromCart(cartItem.food.id);
    this.setCart();
  }

  changeQuantity(cartItem:CartItem, quantityInString:string){
    const quantity= parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id, quantity);
    this.setCart();
  }
 

  ngOnInit(): void {
    
  }
}
