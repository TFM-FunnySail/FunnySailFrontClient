import { Component, OnInit } from '@angular/core';

import {AuthService} from "../../../../shared/services/auth/auth.service";
import {StorageService} from "../../../../shared/services/storage/storage.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user: string | null;
  login: string | null;
  private adminRole: string;
  public userLogged: any;

  constructor(
              protected authService:AuthService,
              protected storageService:StorageService) {
    this.adminRole = 'admin';
    this.userLogged = null;
    this.user = "";
    this.login = "Log in";
  }


  ngOnInit(): void {
    this.userLogged = this.authService.isUserLogged.subscribe(resp => {
      if (resp) {
        alert(this.storageService.getItem("User"));
        this.user = this.storageService.getItem("User");
        this.login = "";
      }
    });
  }
}

