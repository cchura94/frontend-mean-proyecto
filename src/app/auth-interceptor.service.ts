import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private router:Router){}
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    var token = localStorage.getItem("access_token")
  	let tokenizedReq = req.clone({
  		setHeaders: {
        //'Content-Type': 'application/json',
        'Authorization': 'Bearer '+ token
      }
  	})
  	return next.handle(tokenizedReq).pipe(tap(() => {},
      (error:any) => {
        console.log("Intercept: ****** : ", error)
        if(error instanceof HttpErrorResponse){
          if(error.status !== 401){
            return;
          }
          localStorage.removeItem("access_token")
          this.router.navigate(["auth/login"])
        }

      }
    ))

  }

  
}
