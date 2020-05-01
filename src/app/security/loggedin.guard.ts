import { CanLoad, Route, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { LoginService } from "./login/login.services";

@Injectable()
export class LoggedInGuard implements CanLoad, CanActivate{
    
    constructor(private loginService: LoginService){}
    
    checkAuthentication(path: string):boolean{
        const loggedIn = this.loginService.isLoggedIn()
        if(!loggedIn){
            this.loginService.handleLogin(`/${path}`)
        }
        return loggedIn
    }

    canLoad(router: Route): boolean{
       return this.checkAuthentication(router.path)
    }

    canActivate(activateRoute:ActivatedRouteSnapshot, 
                routerState: RouterStateSnapshot ): boolean {
        return this.checkAuthentication(activateRoute.routeConfig.path)
    }
}