import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder,
              private toastr: ToastrService,
              public auth: AuthService,
              private readonly router: Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: [null],
      password: [null],     
    });
  }

  onSubmit() {    
    if (this.form.valid) {
      console.log(this.form.value);
      this.auth.login(this.form.value)
        .then(() => this.router.navigate(['/dashboard']))
        .catch((e) => this.toastr.error(e.message));
    } else {
      this.toastr.warning('REVISE LOS CAMPOS DEL FORMULARIO' , '', {
        timeOut: 1500,
        positionClass: 'toast-center-center',      
      });
    } 
  } 
  
  fillForm() : void {
    this.form = this.fb.group({
      email: ['test@mail.com'],
      password: ['123456'],
    });
  }

  fillFormAdmin() : void {
    this.form = this.fb.group({
      email: ['admin@mail.com'],
      password: ['123456'],
    });
  }
}


