import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });

  constructor(protected loginService:LoginService, protected router: Router, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  ingresar(){
    this.loginService.loginConNode(this.loginForm.value).subscribe(
      (data:any) => {
        console.log(data)
        if(!data.error){
          localStorage.setItem("access_token", data.access_token)          
          this.router.navigate(["/admin"])  
        }else{
          this.openSnackBar(data.mensaje)
        }
      },
      error => {
        console.log(error)
      }
    )
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, "Cerrar", {
      horizontalPosition: "end",
      verticalPosition: "top",
      duration: 3000,
    });
  }

}
