import { ShoppingCartService } from "app/restaurant-detail/shopping-cart/shopping-cart.service";
import { Injectable } from "@angular/core";
import { CartItem } from "app/restaurant-detail/shopping-cart/cart-item.model";
import { HttpClient, HttpHeaders} from "@angular/common/http"
import { Observable } from "rxjs";
import { map } from 'rxjs/operators'
import { Order, OrderItem } from "./order.model";
import { MEAT_API } from '../app.api'
import { LoginService } from "app/security/login/login.services";

@Injectable()
export class OrderService {
    constructor(public cartService: ShoppingCartService, 
                public http: HttpClient, 
                private loginService: LoginService){}

    cartItems(): CartItem[]{
        return this.cartService.items
    }

    itemsValue(): number {
        return this.cartService.total()
    }

    increaseQty(item: CartItem){
        this.cartService.increaseQty(item)
    }

    decreaseQty(item: CartItem){

    }

    remove(item: CartItem){
        this.cartService.removeItem(item)
    }

    clear(){
        this.cartService.clear()
    }

    checkOrder(order: Order): Observable<string>{
        return this.http.post<Order>(`${MEAT_API}/orders`, order).pipe(map(order=> order.id))
    }
}