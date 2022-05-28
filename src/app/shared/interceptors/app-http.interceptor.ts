import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse, HttpResponse
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {AuthService} from "../services/auth/auth.service";
import {catchError, tap} from "rxjs/operators";
import {Router} from "@angular/router";

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {

  constructor(protected authService: AuthService, protected router:Router,
              ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>>
  {
    const tokenInfo = this.authService.getTokenIfLoggedIn();

    if(tokenInfo){
      request = request.clone({
        setHeaders: {
          authorization: `Bearer ${ tokenInfo.token }`
        }
      });
    }

    return next.handle(request).pipe(
      tap(evt => {
        if (evt instanceof HttpResponse) {
          if ([201].includes(evt.status)) {
            alert("Se creó el elemento hijueputa");
          }
          if ([204].includes(evt.status)) {
            alert("Se actualizó el elemento hijueputa");
          }
        }
      }),
    catchError((err: HttpErrorResponse) => {

        if (err.status === 401) {
          this.router.navigateByUrl('auth/login');
        }

        alert("Error: " + err.message);
        console.log(err);
        return throwError( err );

      })
    );
  }
}
