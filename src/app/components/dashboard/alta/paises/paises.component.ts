import { Component, OnInit } from '@angular/core';
import { CountriesService } from 'src/app/services/countries.service';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {

  @Output() newCountryEvent = new EventEmitter<string>();

  data: any = [];
  selectedCountry = 'Argentina';

  constructor(private service: CountriesService) { }

  ngOnInit(): void {
    this.getCountries();
  }

  getCountries() {
    this.service.getCountries().subscribe((countries) => {
      this.data = countries;
      console.log(this.data);
    });
  }

  selectCountry(e) {
    console.log(e.target.value);
    this.selectedCountry = e.target.value;
    this.newCountryEvent.emit(this.selectedCountry);
  }
}
