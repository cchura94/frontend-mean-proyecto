import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    var token = localStorage.getItem("access_token")
  	let tokenizedReq = req.clone({
  		setHeaders: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+ token
      }
  	})
  	return next.handle(tokenizedReq);

  }

  
}
