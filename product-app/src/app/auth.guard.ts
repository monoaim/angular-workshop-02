import { Injectable } from '@angular/core'
import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Router,
} from '@angular/router'
import { Observable } from 'rxjs'

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {
    constructor(private router: Router) {}
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean {
        // TODO :: check authentication
        const param = route.params.name
        if (!param) {
            return true
        } else {
            // not logged in : redirect to login page with the return url
            this.router.navigate(['/login'], {
                queryParams: { returnUrl: state.url },
            })
            return false
        }
    }
}
