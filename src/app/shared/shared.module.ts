import { NgModule, ModuleWithProviders } from "@angular/core";
import { InputComponent } from "./input/input.component";
import { RadioComponent } from "./radio/radio.component";
import { RatingComponent } from "./rating/rating.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HTTP_INTERCEPTORS} from "@angular/common/http"

import { ShoppingCartService } from "app/restaurant-detail/shopping-cart/shopping-cart.service";
import { RestaurantsService } from "app/restaurants/restaurants.service";
import { OrderService } from "app/order/order.service";
import { SnackbarComponent } from 'app/shared/messages/snackbar/snackbar.component';
import { NotificationService } from "./messages/notification.service";
import { LoginService } from "app/security/login/login.services";
import { LoggedInGuard } from "app/security/loggedin.guard";
import { LeaveOrderGuard } from "app/order/leave-order.guard";
import { AuthInterceptor } from "app/security/auth.interceptor";

@NgModule({
    declarations: [InputComponent,RadioComponent,RatingComponent, SnackbarComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    exports: [InputComponent, RadioComponent,SnackbarComponent,
              RatingComponent, CommonModule, 
              FormsModule, ReactiveFormsModule ]
})
export class SharedModule {
    static forRoot():ModuleWithProviders<SharedModule> {
        return {
            ngModule: SharedModule,
            providers: [ShoppingCartService,
                        RestaurantsService, 
                        OrderService, 
                        NotificationService, 
                        LoginService, 
                        LoggedInGuard,
                        LeaveOrderGuard,
                        {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi:true}
                    ]
        }

    }

}