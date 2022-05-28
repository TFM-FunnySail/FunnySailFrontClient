import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public getItem(key: any){
    return localStorage.getItem(key);
  }

  public setItem(key: any,value: any){
    return localStorage.setItem(key,value);
  }

  deleteItem(key: string) {
    return localStorage.removeItem(key);
  }
}
