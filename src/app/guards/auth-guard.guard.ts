import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree
} from "@angular/router";
import { UserDetailsService } from "../services/user-details.service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private userDetailService: UserDetailsService) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | Promise<boolean> {
    if (!this.userDetailService.getUserDetails().isLogin) {
      this.router.navigate(['/auth']);
    }
    return this.userDetailService.getUserDetails().isLogin;
  }
}