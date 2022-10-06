import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  productCode:any;

  constructor() { }

  ngOnInit(): void {
  }

  selectedProduct(code: string) {  
     
    this.productCode = code;
  }  

}
