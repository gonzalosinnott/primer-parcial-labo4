import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  products:any;

  @Output() selectedProductEvent = new EventEmitter<string>();

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.authService.getAllProducts().then((res) => {
      this.products = res;
    });
  }

  selectProduct(e) {
    this.selectedProductEvent.emit(e.target.value);
  }

}
