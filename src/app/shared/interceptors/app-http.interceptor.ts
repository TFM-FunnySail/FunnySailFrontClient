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
import {SnackbarService} from "../../core/components/snackbar/snackbar.service";

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {

  constructor(protected authService: AuthService, protected router:Router,
              private snackService: SnackbarService ) {}

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
            this.snackService.publish({ message: 'Se creó el elemento!', params: undefined, style: 'success' });
          }
          if ([204].includes(evt.status)) {
            this.snackService.publish({ message: 'Se actualizó el elemento!', params: undefined, style: 'success' });
          }
        }
      }),
    catchError((err: HttpErrorResponse) => {

        if (err.status === 401) {
          this.router.navigateByUrl('auth/login');
        }else if(err.status === 0){
          this.snackService.publish({ message: 'Error conectando con los servicios', params: undefined, style: 'error' });
        }else {
          this.snackService.publish({message: err.message, params: undefined, style: 'error'});
        }
        return throwError( err );
      })
    );
  }
}
