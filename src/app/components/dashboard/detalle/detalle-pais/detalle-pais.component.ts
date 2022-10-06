import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-detalle-pais',
  templateUrl: './detalle-pais.component.html',
  styleUrls: ['./detalle-pais.component.css']
})
export class DetallePaisComponent implements OnInit {

  @Input() productCode = '';
  countryName:any;
  data:any;
  
  constructor(private service: CountriesService,
              public auth: AuthService) { }

  ngOnInit(): void {
  }  

  ngOnChanges(changes: SimpleChanges) {
    this.productCode = changes['productCode'].currentValue;

    this.auth.getProductCountry(this.productCode).then((res) => {
      this.countryName = res;
    })
    .then(() => {
      this.getCountryByName();
    });
  }

  getCountryByName() {
    this.service.getCountryByName(this.countryName).subscribe((countries) => {
      this.data = countries;
      console.log(this.data);
    });
  }

}
