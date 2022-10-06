import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form: FormGroup;
  country: string = 'Argentina';

  constructor(private fb: FormBuilder,
              private toastr: ToastrService,
              public auth: AuthService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      code: [null],
      price: [null],
      stock: [null],
      desc: [null],
      edible: [null],
      country: [null],
    });
  }

  onSubmit() {
    this.form.contains('country') ? this.form.get('country').setValue(this.country) 
                                  : this.form.addControl('country', this.fb.control(this.country)); 
    if(this.form.valid) {
    this.auth.SetProduct(this.form.value);
      this.toastr.success('Producto cargado con éxito', '', {
        timeOut: 1500,
        positionClass: 'toast-center-center',      
      });
      this.form.reset();
    } else {
      this.toastr.warning('REVISE LOS CAMPOS DEL FORMULARIO' , '', {
        timeOut: 1500,
        positionClass: 'toast-center-center',      
      });
    } 
  }

  selectCountry(country: string) {  
    this.form.contains('country') ? this.form.get('country').setValue(country) : this.form.addControl('country', this.fb.control(country));  
    this.country = country;
    console.log(this.country);
  }  
}
