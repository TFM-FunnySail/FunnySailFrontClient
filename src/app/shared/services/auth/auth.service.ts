import { Injectable } from '@angular/core';
import {StorageService} from "../storage/storage.service";
import {AccountService, AuthenticateResponseDTO} from "../../sdk";
import {Router} from "@angular/router";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userLogged: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isUserLogged: Observable<boolean> = this.userLogged.asObservable();

  private tokenStorageKey:string = "tokenInfo";

  constructor(protected storageService:StorageService,
              protected accountApiService:AccountService,
              protected router:Router,) { }

  public login(data: any,callback: any,callbackErr: any){
    return this.accountApiService.apiAccountAdminLoginPost(data).subscribe(resp =>{
        this.saveToken(resp);
        this.userLogged.next(true);
        callback(resp);
    },
      error => {
        callbackErr(error)
      })
  }

  private saveToken(data: AuthenticateResponseDTO) {
    this.storageService.setItem(this.tokenStorageKey,JSON.stringify({
      token:data.jwtToken,
      tokenExpiresIn:Number.parseFloat(data.jwtTokenExpiresIn as string),
      refreshTokenExpiresIn:Number.parseFloat(data.refreshTokenExpiresIn as string),
    }));
  }

  public isLoggedIn() {
    const tokenInfo = this.getTokenInfo();

    return tokenInfo && tokenInfo.token && this.isValidExpiresIn(tokenInfo.tokenExpiresIn);
  }

  private getTokenInfo() {
    return JSON.parse(this.storageService.getItem(this.tokenStorageKey as string) as string);
  }

  private isValidExpiresIn(expiresIn:number){
    return expiresIn > (new Date().getTime() + 60 * 1000);
  }

  logout() {
    this.logoutAction();
    alert("Pinche culero");
  }

  getTokenIfLoggedIn() {
    const tokenInfo = this.getTokenInfo();

    if(tokenInfo){
      if(!this.isValidExpiresIn(tokenInfo.tokenExpiresIn)){
        this.logoutAction();
      }
    }

    return tokenInfo;
  }

  private logoutAction() {
    this.storageService.deleteItem(this.tokenStorageKey);
    this.router.navigateByUrl('auth/login');
  }
}
