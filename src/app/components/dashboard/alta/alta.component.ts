import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.css']
})
export class AltaComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder,
              private toastr: ToastrService,
              public auth: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit() {
  }
  
}
