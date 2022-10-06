import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AltaComponent } from './alta/alta.component';
import { FormComponent } from './alta/form/form.component';
import { PaisesComponent } from './alta/paises/paises.component';
import { DetalleComponent } from './detalle/detalle.component';
import { ListaComponent } from './detalle/lista/lista.component';
import { DetalleProductoComponent } from './detalle/detalle-producto/detalle-producto.component';
import { DetallePaisComponent } from './detalle/detalle-pais/detalle-pais.component';

@NgModule({
  declarations: [
    DashboardComponent,
    MainPageComponent,
    NavBarComponent,
    AltaComponent,
    FormComponent,
    PaisesComponent,
    DetalleComponent,
    ListaComponent,
    DetalleProductoComponent,
    DetallePaisComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule, 
  ]
})
export class DashboardModule { }
