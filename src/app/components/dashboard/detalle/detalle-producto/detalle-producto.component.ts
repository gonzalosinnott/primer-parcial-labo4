import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';



@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {

  @Input() productCode = '';
  product:any;


  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.productCode = changes['productCode'].currentValue;

    this.auth.getProductData(this.productCode).then((res) => {
      this.product = res;
      console.log(this.product);
    });
  }  
}
