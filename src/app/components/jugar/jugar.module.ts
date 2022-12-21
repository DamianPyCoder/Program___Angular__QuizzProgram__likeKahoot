import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { JugarRoutingModule } from './jugar-routing.module';

// Componentes
import { IngresarNombreComponent } from './ingresar-nombre/ingresar-nombre.component';
import { ContadorInicialComponent } from './contador-inicial/contador-inicial.component';
import { RealizarQuizzComponent } from './realizar-quizz/realizar-quizz.component';


@NgModule({
  declarations: [IngresarNombreComponent, ContadorInicialComponent, RealizarQuizzComponent],
  imports: [
    CommonModule,
    JugarRoutingModule,
    SharedModule
  ]
})
export class JugarModule { }
